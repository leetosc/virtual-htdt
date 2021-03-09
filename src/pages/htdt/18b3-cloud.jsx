import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Box,
  Heading,
  Text,
  Button,
  Image,
  Input,
  Stack,
  Select,
  FormLabel,
  Modal,
  SimpleGrid,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import { MapInteractionCSS } from "react-map-interaction";
import { useAppState } from "@/context/state";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";
import YouTube from "react-youtube";
import Typing from "react-typing-animation";
import { Carousel } from "react-responsive-carousel";
import ReactCardFlip from "react-card-flip";
import axios from "axios";
import ReactWordcloud from "react-wordcloud";

export default function Wordcloud() {
  const router = useRouter();
  const [typingDone, setTypingDone] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);

  const [puzzleInput, setPuzzleInput] = useState("");
  const [puzzleCorrect, setPuzzleCorrect] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const [saMacSinhs, setSaMacSinhs] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedName, setSelectedName] = useState("");

  useEffect(() => {
    axios.get("https://dbdev.ga/sa-mac-sinhs").then((res) => {
      const smslist = res.data.map((sms) => ({
        name: sms.Name,
        team: sms.team.Name,
        id: sms.id,
        comments: sms.comments.map((comment) => comment.text),
      }));
      setSaMacSinhs(smslist);
    });
  }, []);

  console.log(saMacSinhs);

  const teams = saMacSinhs.reduce(
    (acc, curr) => (!acc.includes(curr.team) ? [...acc, curr.team] : [...acc]),
    []
  );

  const wordArray =
    selectedName && saMacSinhs.length > 0
      ? saMacSinhs.find((i) => i.name === selectedName).comments.join(" ")
      : "";

  console.log("wordarray", wordArray);

  const wordcnt = wordArray
    .replace(/[^\w\s]/g, "")
    .split(/\s+/)
    .reduce(function (map, word) {
      map[word] = (map[word] || 0) + 1;
      return map;
    }, Object.create(null));

  console.log("wordcount", wordcnt);
  const wordCountArray = Object.entries(wordcnt).map(([key, value]) => {
    return { text: key, value: value };
  });
  console.log("wordcountarray", wordCountArray);

  return (
    <>
      <GameLayout>
        <Box
          w="100%"
          h="100%"
          backgroundColor="white"
          textColor="white"
          display="flex"
          // alignItems="center"
          // justifyContent="center"
        >
          <Head>
            <title>Virtual HTDT</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Box
            h="100%"
            position="relative"
            justifyContent="space-between"
            overflow="auto"
            p={6}
            maxW="800px"
            w="100%"
            mx="auto"
            backgroundColor="white"
          >
            {process.browser && (
              <ReactWordcloud
                words={wordCountArray}
                options={{
                  colors: [
                    "#1f77b4",
                    "#ff7f0e",
                    "#2ca02c",
                    "#d62728",
                    "#9467bd",
                    "#8c564b",
                  ],
                  enableTooltip: false,
                  deterministic: false,
                  fontFamily: "impact",
                  fontSizes: [45, 85],
                  fontStyle: "normal",
                  fontWeight: "normal",
                  padding: 1,
                  rotations: 3,
                  rotationAngles: [0, 90],
                  scale: "sqrt",
                  spiral: "archimedean",
                  transitionDuration: 1000,
                }}
              />
            )}
          </Box>
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            <Box>
              <FormLabel>Select your team</FormLabel>
              <Select
                backgroundColor="white"
                placeholder="Select your team"
                onChange={(e) => setSelectedTeam(e.target.value)}
              >
                {teams.map((team) => (
                  <option value={team} key={team}>
                    {team}
                  </option>
                ))}
              </Select>
              <FormLabel mt={4}>Select your name</FormLabel>
              <Select
                backgroundColor="white"
                placeholder="Select your name"
                onChange={(e) => setSelectedName(e.target.value)}
              >
                {saMacSinhs
                  .filter((i) => i.team === selectedTeam)
                  .map((sms) => (
                    <option value={sms.name} key={sms.id}>
                      {sms.name}
                    </option>
                  ))}
              </Select>
            </Box>
          </Box>
          <Box w="100%" pt={2}>
            <Text fontWeight="semibold">View your word cloud</Text>
            <Text>Your comments:</Text>
            {saMacSinhs
              .find((i) => i.name === selectedName)
              .comments.map((comment, index) => (
                <Text my={2} key={index}>{`"${comment}"`}</Text>
              ))}
          </Box>
          <Box p={2}>
            {typingDone && (
              <>
                <Text my={2}></Text>
                <Button
                  colorScheme="cyan"
                  onClick={() => router.push("/htdt/18c-morning")}
                >
                  Continue
                </Button>
              </>
            )}
          </Box>
        </Hud>
      </GameLayout>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
        size="lg"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Reflection</ModalHeader>
          <ModalCloseButton />
          <ModalBody overflow="auto" maxH="100%">
            <Text>
              Sa Pa is a very secluded area, at least compared to the rest of
              the world. They have a difficult time meeting face to face with
              people outside of their region without ACTIVELY going out of their
              way to do so. Because of this, everyone who lives in Sa Pa feels
              like they are in their own big family, even if their heritage,
              personalities, etc. are very different from one another. <br />
              This is very similar to TNTT, in that whenever we go to Thieu Nhi,
              our problems go away, and we are apart of our own Thieu Nhi
              family, even if we may come from different backgrounds, we can all
              bond with each other through our joy and our goal to spread God’s
              love. This sense of family also allows us to relate to other
              people who are in different Doans, in that we are sharing our love
              of Thieu Nhi, as well as our love of God with other people, and we
              are able to bond with them because of it, even if we live hundreds
              to even thousands miles away.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
