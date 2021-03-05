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
import ReactPlayer from "react-player";
import ShowAnswerButton from "@/components/ShowAnswerButton/ShowAnswerButton";

export default function HaLongActivity() {
  const router = useRouter();
  const [typingDone, setTypingDone] = useState(false);
  const [puzzleInput, setPuzzleInput] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalOpened, setModalOpened] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const { appState } = useAppState();

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
            <Image
              src="/halong/fruitboat.jpg"
              maxW="unset"
              h="100%"
              maxH="100%"
            />
          </Box>
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            <Typist
              cursor={{ hideWhenDone: true, blink: true }}
              avgTypingDelay={5}
              onTypingDone={() => setTypingDone(true)}
            >
              Follow the instructions to build the boat.
            </Typist>
          </Box>
          <Box w="100%" pt={1}>
            <Text mt={3} fontSize="sm">
              Open your Care Package and find the envelope marked "HTDT".
            </Text>
            {videoEnded && typingDone && (
              <Button
                mt={2}
                colorScheme="cyan"
                onClick={() => {
                  setModalOpened(true);
                  onOpen();
                }}
              >
                Talk to the village leader
              </Button>
            )}
          </Box>
          <Box p={2}>
            <Text>What is the message?</Text>
            <Input
              value={puzzleInput}
              my={2}
              onChange={(e) => setPuzzleInput(e.target.value)}
              backgroundColor="white"
            />

            <Button
              colorScheme="cyan"
              disabled={puzzleInput !== "boat mat thu"}
              onClick={() => router.push("/htdt/24a-island")}
            >
              Continue
            </Button>
            {appState.SHOW_ANSWERS && (
              <ShowAnswerButton answer="boat mat thu" />
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
          <ModalHeader>Village leader</ModalHeader>
          <ModalCloseButton />
          <ModalBody overflow="auto" maxH="100%">
            <Image src="/halong/halongphi2.png" h={48} m={2} float="left" />

            <Text>
              "You're looking for Uncle Tien? He was here recently and left a
              package on one of the islands. If you want to reach it you will
              need to build a special boat."
            </Text>
            <Text mt={6} fontSize="sm">
              Open your Care Package and find the envelope marked "HTDT".
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
