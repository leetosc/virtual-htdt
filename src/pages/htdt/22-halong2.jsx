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

export default function HaLong2() {
  const router = useRouter();
  const [typingDone, setTypingDone] = useState(false);
  const [puzzleInput, setPuzzleInput] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalOpened, setModalOpened] = useState(false);

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
              You arrive at Ha Long Bay and take a boat out to explore the area.
              Your guide tells you a bit of folklore about the place.
            </Typist>
            {typingDone && (
              <Button
                colorScheme="cyan"
                onClick={() => {
                  setModalOpened();
                  onOpen();
                }}
              >
                Legend of Ha Long Bay
              </Button>
            )}
          </Box>
          <Box w="100%" pt={1}>
            <Text>ddd</Text>
          </Box>
          <Box p={2}>
            {modalOpened && (
              <>
                <Button
                  colorScheme="cyan"
                  onClick={() => router.push("/htdt/21-halong")}
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
          <ModalHeader>Legend of Ha Long Bay</ModalHeader>
          <ModalCloseButton />
          <ModalBody overflow="auto" maxH="100%">
            <Text>
              Legend says that long ago, when the country was newly formed, the
              Vietnamese forefathers had to fight against fierce invaders coming
              from the North by sea. <br />
              <br />
              The gods from the heavens watched on before sending the Mother
              Dragon and her children to help the ancient Vietnamese people to
              defend their country. <br />
              <br />
              The dragons descended upon the earth, incinerated the invaders and
              spat jewels of emerald and jade that upon hitting the land, turned
              into great islands and islets that formed invincible defensive
              walls that the invaders could not overcome. The enemies fled and
              peace finally returned to this Southeast Asian country. <br />
              <br />
              After the battle, The Mother Dragon and her children did not
              return to the heavens, but stayed in the mortal world. To this
              day, the dragons lay on the lands they helped protect. The seas
              rose but it is the dragons that form the bays iconic mountainous
              landscape. <br />
              <br />
              The dragon children lay on the lands that are known as Bai Tu Long
              which literally means ‘Thanks to the Dragon children’ and their
              tails form the area of Bach Long Vi. The great Mother Dragon forms
              Ha Long Bay, which literally translates as ‘Descending Dragon
              Bay’.
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
