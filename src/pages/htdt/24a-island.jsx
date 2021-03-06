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
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import { MapInteractionCSS } from "react-map-interaction";
import { useAppState } from "@/context/state";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";
import { GiCook } from "react-icons/gi";
import YouTube from "react-youtube";
import Typing from "react-typing-animation";
import ReactPlayer from "react-player";

export default function HaLongContact() {
  const router = useRouter();
  const [typingDone, setTypingDone] = useState(false);
  const [puzzleInput, setPuzzleInput] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalOpened, setModalOpened] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  const stateContext = useAppState();
  const { appState } = stateContext;

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

          {videoEnded ? (
            <Box h="100%" position="relative" overflow="auto">
              <Image
                src="/halong/hutinside.jpg"
                maxW="unset"
                h="100%"
                maxH="100%"
              />
            </Box>
          ) : (
            <Box h="100%" position="relative" overflow="auto" w="100%">
              <Box
                // overlay to prevent clicking video
                opacity={0}
                h="100%"
                w="100%"
                position="absolute"
                top={0}
                left={0}
              />

              <ReactPlayer
                url="https://youtu.be/4D91CxinLvo"
                controls={false}
                muted={true}
                playing={true}
                playbackRate={1}
                onEnded={() => {
                  setVideoEnded(true);
                }}
                width="100%"
                height="100%"
              />
            </Box>
          )}
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            <Typist
              cursor={{ hideWhenDone: true, blink: true }}
              avgTypingDelay={5}
              onTypingDone={() => setTypingDone(true)}
            >
              Congratulations. You successsfully build the boat and go to the
              island. There is a path that leads to an empty hut.
            </Typist>
            {videoEnded && typingDone && (
              <>
                <Text>
                  Inside, you find a chest labeled with the letter "T".
                </Text>
                <Button
                  mt={2}
                  colorScheme="cyan"
                  onClick={() => {
                    stateContext.setInventory([
                      ...appState.inventory,
                      "Fish Sauce",
                      "Ginger",
                    ]);

                    setModalOpened(true);
                    onOpen();
                  }}
                >
                  Open the chest
                </Button>
              </>
            )}
          </Box>
          <Box w="100%" pt={1}>
            <Text>Look for clues.</Text>
          </Box>
          <Box p={2}>
            {modalOpened && (
              <>
                <Button
                  colorScheme="cyan"
                  onClick={() => router.push("/htdt/25-halongbus")}
                >
                  Continue
                </Button>
              </>
            )}
          </Box>
        </Hud>
      </GameLayout>

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Chest</ModalHeader>
          <ModalCloseButton />
          <ModalBody overflow="auto" maxH="100%">
            <Image src="/halong/treasurechest.jpg" h={32} m={2} float="left" />

            <Text>
              The chest is empty, except for a note, a bag of ginger and a
              bottle of fish sauce.
            </Text>
            <Text mt={6}>
              "This used to be where I hid the family treasure, but so many
              tourists come here now. I had to move it to a safer location. Go
              to Hue to find out more. Also, here are some ingredients that will
              come in handy later."
            </Text>
            <Text mt={2}>
              <Icon as={GiCook} h={6} w={6} />
              Yellow ginger adds to the color of Bun Bo Hue, and fish sauce adds
              to its flavor.
            </Text>
            <Text textAlign="right">-Uncle Tien</Text>
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
