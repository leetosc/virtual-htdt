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
import { Carousel } from "react-responsive-carousel";
import ReactCardFlip from "react-card-flip";

export default function Peoples() {
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
            <Image src="/placeholder.png" maxW="unset" h="100%" maxH="100%" />
          </Box>
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            <Typist
              cursor={{ hideWhenDone: true, blink: true }}
              avgTypingDelay={5}
              onTypingDone={() => setTypingDone(true)}
            >
              Let me introduce you to the different peoples who live in this
              region.
            </Typist>
          </Box>
          <Box w="100%" pt={2}>
            <Button
              mt={2}
              colorScheme="cyan"
              onClick={() => {
                setModalOpened(true);
                onOpen();
              }}
            >
              Talk to the people
            </Button>
          </Box>
          <Box p={2}>
            {modalOpened && (
              <>
                <Text my={2}>
                  "You must be tired after climbing the mountain. Here is the
                  house your uncle liked to stay at when he visited. Get some
                  rest!"
                </Text>
                <Button
                  colorScheme="cyan"
                  onClick={() => router.push("/htdt/18-cabin")}
                >
                  Go
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
          <ModalHeader>Peoples of Sa Pa</ModalHeader>
          <ModalCloseButton />
          <ModalBody overflow="auto" maxH="100%">
            <Carousel showThumbs={false} infiniteLoop={true}>
              <Box maxH="100%" display="flex" flexDir="column">
                <Image
                  src="https://picsum.photos/300/200"
                  maxW="unset"
                  maxH="100%"
                />
                <Box textColor="white" textAlign="left" px={2} mt={2} mb={4}>
                  <Text fontSize="sm">
                    Hmong People: Worship their ancestors, the god of the house,
                    the good of the kitchen, and even the god of the door. There
                    are also different symbols that are custom only to them,
                    such as a green tree branch at the front door meaning that
                    an entrance is forbidden.
                  </Text>
                </Box>
              </Box>
              <Box maxH="100%" display="flex" flexDir="column">
                <Image
                  src="https://picsum.photos/300/200"
                  maxW="unset"
                  maxH="100%"
                />
                <Box textColor="white" textAlign="left" px={2} mt={2} mb={4}>
                  <Text fontSize="sm">
                    Yao (Dao) People: Mixes elements of Confucianism, Buddhism,
                    and Taoism. They also worship their family’s ancestry, but
                    also a man named Ban Vuong who is known as the earliest
                    ancestor of the Dao people.
                  </Text>
                </Box>
              </Box>
              <Box maxH="100%" display="flex" flexDir="column">
                <Image
                  src="https://picsum.photos/300/200"
                  maxW="unset"
                  maxH="100%"
                />
                <Box textColor="white" textAlign="left" px={2} mt={2} mb={4}>
                  <Text fontSize="sm">
                    Tay People: They believe in gods of their natural
                    environments, as well as worship and praying for their
                    ancestors
                  </Text>
                </Box>
              </Box>
              <Box maxH="100%" display="flex" flexDir="column">
                <Image
                  src="https://picsum.photos/300/200"
                  maxW="unset"
                  maxH="100%"
                />
                <Box textColor="white" textAlign="left" px={2} mt={2} mb={4}>
                  <Text fontSize="sm">
                    Giay People: They worship the God of Kitchen, Heaven and
                    Earth, as well as their family ancestors.{" "}
                  </Text>
                </Box>
              </Box>
            </Carousel>
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
