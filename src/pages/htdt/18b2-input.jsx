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

export default function SapaActivity2() {
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
      }));
      setSaMacSinhs(smslist);
    });
  }, []);

  const teams = saMacSinhs.reduce(
    (acc, curr) => (!acc.includes(curr.team) ? [...acc, curr.team] : [...acc]),
    []
  );

  const CommentComponent = ({ senderId, name, id }) => {
    const [comment, setComment] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    return (
      <Box key={id} backgroundColor="gray.700" p={3}>
        <Text fontWeight="semibold">{name}</Text>
        <Input
          my={2}
          color="black"
          backgroundColor="white"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button
          my={2}
          size="sm"
          colorScheme="cyan"
          isDisabled={submitted}
          isLoading={loading}
          onClick={() => {
            console.log("submitting");
            setLoading(true);
            axios
              .post(`https://dbdev.ga/comments`, {
                text: comment,
                sender: {
                  id: senderId,
                },
                receiver: {
                  id: id,
                },
              })
              .then((res) => {
                console.log(`${senderId} submitted for ${name}`);
                setLoading(false);
                setSubmitted(true);
              })
              .catch((error) => {
                console.log(error);
                setLoading(false);
                setSubmitted(false);
              });
          }}
        >
          {submitted ? `Done` : `Submit`}
        </Button>
      </Box>
    );
  };

  CommentComponent.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    senderId: PropTypes.number.isRequired,
  };

  return (
    <>
      <GameLayout>
        <Box
          w="100%"
          h="100%"
          backgroundColor="gray.800"
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
            w="100%"
          >
            <Text mb={4} fontSize="xl" fontWeight="semibold" textColor="white">
              Select your team and name below. Each person open this page URL on
              your own device.
            </Text>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
              {selectedName !== "" &&
                saMacSinhs
                  .filter((i) => i.team === selectedTeam)
                  .filter((i) => i.name !== selectedName)
                  .map((sms) => {
                    return (
                      <CommentComponent
                        senderId={
                          saMacSinhs.find((i) => i.name === selectedName).id
                        }
                        name={sms.name}
                        id={sms.id}
                        key={sms.id}
                      />
                    );
                  })}
            </SimpleGrid>
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
            <Text fontWeight="semibold">Each Team Member:</Text>
            <Text>
              Take 15 minutes to think about your virtual camp experience with
              your teammates so far. For each teammate, write something that you
              have learned or appreciate about them.
            </Text>
          </Box>
          <Box p={2}>
            <>
              <Text my={2}></Text>
              <Button
                colorScheme="cyan"
                onClick={() => router.push("/htdt/18c-morning")}
              >
                Return to journey
              </Button>
            </>
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
