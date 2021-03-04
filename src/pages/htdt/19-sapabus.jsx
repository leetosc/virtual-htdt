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

export default function Sapabus() {
  const router = useRouter();
  const [typingDone, setTypingDone] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const [imageClicked, setImageClicked] = useState(false);
  const [puzzleInput, setPuzzleInput] = useState("");
  const [clickCounter, setClickCounter] = useState(0);

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
            <Image
              src={
                clickCounter % 2 === 0
                  ? "/sapa/sapa-bus.jpg"
                  : "/sapa/peterbus.jpg"
              }
              maxW="unset"
              maxH="100%"
              h="100%"
              onClick={() => {
                setClickCounter(clickCounter + 1);
                setImageClicked(true);
              }}
              _hover={{ cursor: "pointer" }}
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
              It is time to leave. You bid farewell to the villagers, then get
              back on the bus and depart for Ha Long Bay.
            </Typist>
          </Box>
          <Box w="100%" display="flex" pt={4}>
            <Text fontSize="sm">Click to see the inside of the bus</Text>
          </Box>
          <Box p={2}>
            <Button
              colorScheme="cyan"
              mx="auto"
              onClick={() => {
                router.push("/htdt/20-map");
              }}
            >
              Depart
            </Button>
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
