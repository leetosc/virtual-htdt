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
import ShowAnswerButton from "@/components/ShowAnswerButton/ShowAnswerButton";
import YouTube from "react-youtube";

export default function Hanoibus() {
  const router = useRouter();
  const [typingDone, setTypingDone] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const [puzzleInput, setPuzzleInput] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();

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
              src="/hanoi/hanoi-busstation.jpg"
              maxW="unset"
              maxH="100%"
              h="100%"
            />
          </Box>
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            <Typist
              cursor={{ hideWhenDone: true, blink: true }}
              avgTypingDelay={10}
              onTypingDone={() => setTypingDone(true)}
            >
              You arrive at the My Dinh bus station and buy a ticket to Sa Pa.
              It is pretty crazy how busy the bus station is!
            </Typist>
            {typingDone && (
              <Button
                colorScheme="teal"
                mt={2}
                onClick={() => {
                  setModalOpened(true);
                  onOpen();
                }}
              >
                Talk to bus driver
              </Button>
            )}
          </Box>
          <Box w="100%" display="flex" pt={4}>
            {appState.SHOW_ANSWERS && <ShowAnswerButton answer="31" />}
          </Box>
          <Box p={2}>
            {modalOpened && puzzleInput === "31" && (
              <>
                <Button
                  colorScheme="cyan"
                  mx="auto"
                  onClick={() => {
                    router.push("/htdt/14-map");
                  }}
                >
                  Depart
                </Button>
              </>
            )}
          </Box>
        </Hud>
      </GameLayout>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Bus Driver</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src="/hanoi/hanoi-busdriver.png" h={36} m={2} float="left" />
            "You are heading to Sa Pa? I'm expecting someone."
            {puzzleInput === "31" ? <Text mt={3}>Great, let's go!</Text> : null}
            <Input
              backgroundColor="white"
              placeholder="Tell him the password"
              value={puzzleInput}
              onChange={(e) => setPuzzleInput(e.target.value)}
            />
          </ModalBody>

          <ModalFooter>
            <Button
              mt={2}
              colorScheme="cyan"
              isDisabled={puzzleInput !== "31"}
              onClick={() => {
                onClose();
              }}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
