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
  useToast,
} from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import { MapInteractionCSS } from "react-map-interaction";
import { useAppState } from "@/context/state";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";
import YouTube from "react-youtube";
import Typing from "react-typing-animation";
import ReactCardFlip from "react-card-flip";

export default function Queen() {
  const router = useRouter();
  const [typingDone, setTypingDone] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);

  const [puzzleInput, setPuzzleInput] = useState("");
  const [puzzleCorrect, setPuzzleCorrect] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

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
            <Image src="/sapa/queen.jpeg" maxW="unset" h="100%" maxH="100%" />
          </Box>
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            <Typist
              cursor={{ hideWhenDone: true, blink: true }}
              avgTypingDelay={5}
              onTypingDone={() => setTypingDone(true)}
            >
              "They call me the Queen of Sapa. I'm not actually a queen, I'm
              just in charge of this village here. Uncle Tien liked to come to
              my village to get away from the hustle and bustle of city life.
              Before I tell you any more, I need the code word." <br />
              <br />
            </Typist>
          </Box>
          <Box w="100%" pt={2}>
            <Text my={2}>What is the code word?</Text>
            <Input
              backgroundColor="white"
              value={puzzleInput}
              placeholder="Code word"
              onChange={(e) => setPuzzleInput(e.target.value)}
            />
            <Button
              mt={2}
              colorScheme="cyan"
              onClick={() => {
                if (!puzzleInput.toLowerCase() === "ascent") {
                  toast({
                    title: "Wrong",
                    description: `"Sorry, you will have to leave."`,
                    status: "warning",
                    duration: 10000,
                    isClosable: true,
                  });
                  router.push("/htdt/15-sapaclimb");
                } else {
                  setPuzzleCorrect(true);
                }
              }}
            >
              Submit
            </Button>
          </Box>
          <Box p={2}>
            {puzzleCorrect && (
              <>
                <Text my={2}>"Great. I will take you to my village."</Text>
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
          <ModalHeader>Guide</ModalHeader>
          <ModalCloseButton />
          <ModalBody overflow="auto" maxH="100%">
            <Image src="/sapa/guide.png" h={28} m={2} float="left" />
            <Text>
              Oh, the Queen of Sapa! I know her. I will take you to her.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={onClose}>
              Go
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
