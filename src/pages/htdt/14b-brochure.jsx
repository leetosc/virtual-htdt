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
  const [cardFlipped, setCardFlipped] = useState(false);

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
              something written at the bottom, but it doesn't really mean
              anything to you.
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

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent minW="50vw">
          <ModalHeader>Brochure</ModalHeader>
          <ModalCloseButton />
          <ModalBody overflow="auto" maxH="100%">
            <ModalBody overflow="auto" maxH="100%">
              <Text textColor="blue.800" fontWeight="bold" mb={3}>
                Click to flip
              </Text>
              <ReactCardFlip isFlipped={cardFlipped} flipDirection="horizontal">
                <Box
                  onClick={() => setCardFlipped(!cardFlipped)}
                  _hover={{ cursor: "pointer" }}
                  minH={64}
                >
                  <Image src="/sapa/brochure1.png" />
                </Box>

                <Box
                  onClick={() => setCardFlipped(!cardFlipped)}
                  _hover={{ cursor: "pointer" }}
                  minH={64}
                >
                  <Image src="/sapa/brochure2.png" />
                </Box>
              </ReactCardFlip>
            </ModalBody>
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
