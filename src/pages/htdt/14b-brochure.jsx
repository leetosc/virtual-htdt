import React, { useState, useEffect } from "react";
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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import { MapInteractionCSS } from "react-map-interaction";
import { useAppState } from "@/context/state";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";
import YouTube from "react-youtube";
import Typing from "react-typing-animation";
import ReactCardFlip from "react-card-flip";

export default function Brochure() {
  const router = useRouter();
  const [typingDone, setTypingDone] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);

  const [puzzleInput, setPuzzleInput] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <GameLayout>
        <Box
          w="100%"
          h="100%"
          backgroundColor="gray.800"
          textColor="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Head>
            <title>Virtual HTDT</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Box h="100%" position="relative" overflow="auto">
            <Image src="/sapa/sapa2.png" maxW="unset" h="100%" maxH="100%" />
          </Box>
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            <Typist
              cursor={{ hideWhenDone: true, blink: true }}
              avgTypingDelay={5}
              onTypingDone={() => setTypingDone(true)}
            ></Typist>
          </Box>
          <Box w="100%" pt={2}>
            <Text my={2}>
              A man on the bus hands you a brochure. It looks like there is
              something on the back, but it doesn't really mean anything to you.
            </Text>
            <Button
              colorScheme="cyan"
              onClick={() => {
                setModalOpened(true);
                onOpen();
              }}
            >
              Read the brochure
            </Button>
          </Box>
          <Box p={2}>
            {modalOpened && (
              <>
                <Button
                  colorScheme="cyan"
                  onClick={() => router.push("/htdt/15-sapaclimb")}
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
          <ModalHeader>Brochure</ModalHeader>
          <ModalCloseButton />
          <ModalBody overflow="auto" maxH="100%">
            {/* <Image src="/trtony.png" h={28} m={2} float="left" /> */}
            <Text>
              History of Sa Pa: Originally, Sa Pa was inhabited by an unknown
              group of people, but experts believe those people left around the
              15th century. Then, the Hmong and Yao people came, along with the
              Giay and Tay, all of whom still live in the Sa Pa province today.
              When the French found this area in the late 1880s, Sa Pa began to
              be put on maps. From here until the 1960s, a series of wars and
              conflicts started to plague the region, many buildings were
              destroyed and many people were forced to flee. However, by the
              early 1960s, the new migration schemes set up by the new Socialist
              regime started to have more inhabitants migrate to Sa Pa. By 1993,
              the decision was made to open up tourism to Sa Pa, and became an
              extremely popular tourist destination in Vietnam, what it is
              primarily known for today.
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
