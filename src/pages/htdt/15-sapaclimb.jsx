import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  Box,
  Text,
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Show,
} from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import Hud from "@/components/Hud/Hud";
import { FaPlay, FaStop } from "react-icons/fa";
import { useAppState } from "@/context/state";
import Typist from "react-typist";
import ReactCardFlip from "react-card-flip";
import useSound from "use-sound";

import soundbyte1 from "../../../public/sapa/soundbytes/1.m4a";
import soundbyte2 from "../../../public/sapa/soundbytes/2.m4a";
import soundbyte3 from "../../../public/sapa/soundbytes/3.m4a";
import soundbyte4 from "../../../public/sapa/soundbytes/4.m4a";
import soundbyte5 from "../../../public/sapa/soundbytes/5.m4a";
import soundbyte6 from "../../../public/sapa/soundbytes/6.m4a";
import soundbyte7 from "../../../public/sapa/soundbytes/7.m4a";
import soundbyte8 from "../../../public/sapa/soundbytes/8.m4a";
import soundbyte9 from "../../../public/sapa/soundbytes/9.m4a";
import soundbyte10 from "../../../public/sapa/soundbytes/10.m4a";
import soundbyte11 from "../../../public/sapa/soundbytes/11.m4a";
import soundbyte12 from "../../../public/sapa/soundbytes/12.m4a";
import soundbyte13 from "../../../public/sapa/soundbytes/13.m4a";
import ShowAnswerButton from "@/components/ShowAnswerButton/ShowAnswerButton";

export default function SapaClimb() {
  const router = useRouter();
  const [modalOpened, setModalOpened] = useState(false);
  const [cardFlipped, setCardFlipped] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const stateContext = useAppState();
  const { appState } = stateContext;

  const [
    playSound1,
    { stop: stopSound1, isPlaying: isPlayingSound1 },
  ] = useSound(soundbyte1);
  const [
    playSound2,
    { stop: stopSound2, isPlaying: isPlayingSound2 },
  ] = useSound(soundbyte2);
  const [
    playSound3,
    { stop: stopSound3, isPlaying: isPlayingSound3 },
  ] = useSound(soundbyte3);
  const [
    playSound4,
    { stop: stopSound4, isPlaying: isPlayingSound4 },
  ] = useSound(soundbyte4);
  const [
    playSound5,
    { stop: stopSound5, isPlaying: isPlayingSound5 },
  ] = useSound(soundbyte5);
  const [
    playSound6,
    { stop: stopSound6, isPlaying: isPlayingSound6 },
  ] = useSound(soundbyte6);
  const [
    playSound7,
    { stop: stopSound7, isPlaying: isPlayingSound7 },
  ] = useSound(soundbyte7);
  const [
    playSound8,
    { stop: stopSound8, isPlaying: isPlayingSound8 },
  ] = useSound(soundbyte8);
  const [
    playSound9,
    { stop: stopSound9, isPlaying: isPlayingSound9 },
  ] = useSound(soundbyte9);
  const [
    playSound10,
    { stop: stopSound10, isPlaying: isPlayingSound10 },
  ] = useSound(soundbyte10);
  const [
    playSound11,
    { stop: stopSound11, isPlaying: isPlayingSound11 },
  ] = useSound(soundbyte11);
  const [
    playSound12,
    { stop: stopSound12, isPlaying: isPlayingSound12 },
  ] = useSound(soundbyte12);
  const [
    playSound13,
    { stop: stopSound13, isPlaying: isPlayingSound13 },
  ] = useSound(soundbyte13);

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
              src="/sapa/sapaguide.jpg"
              maxW="unset"
              h="100%"
              maxH="100%"
            />
            <Box
              position="absolute"
              top="0"
              left="0"
              p={4}
              display="flex"
              flexWrap="wrap"
              w="100%"
            >
              <Button
                size="lg"
                m={4}
                colorScheme="cyan"
                onClick={() => {
                  if (isPlayingSound1) {
                    stopSound1();
                  } else {
                    playSound1();
                  }
                }}
                rightIcon={isPlayingSound1 ? <FaStop /> : <FaPlay />}
              >
                Hiking Sound 1
              </Button>

              <Button
                size="lg"
                m={4}
                colorScheme="cyan"
                onClick={() => {
                  if (isPlayingSound2) {
                    stopSound2();
                  } else {
                    playSound2();
                  }
                }}
                rightIcon={isPlayingSound2 ? <FaStop /> : <FaPlay />}
              >
                Hiking Sound 2
              </Button>

              <Button
                size="lg"
                m={4}
                colorScheme="cyan"
                onClick={() => {
                  if (isPlayingSound3) {
                    stopSound3();
                  } else {
                    playSound3();
                  }
                }}
                rightIcon={isPlayingSound3 ? <FaStop /> : <FaPlay />}
              >
                Hiking Sound 3
              </Button>

              <Button
                m={4}
                size="lg"
                colorScheme="cyan"
                onClick={() => {
                  if (isPlayingSound4) {
                    stopSound4();
                  } else {
                    playSound4();
                  }
                }}
                rightIcon={isPlayingSound4 ? <FaStop /> : <FaPlay />}
              >
                Hiking Sound 4
              </Button>

              <Button
                m={4}
                size="lg"
                colorScheme="cyan"
                onClick={() => {
                  if (isPlayingSound5) {
                    stopSound5();
                  } else {
                    playSound5();
                  }
                }}
                rightIcon={isPlayingSound5 ? <FaStop /> : <FaPlay />}
              >
                Hiking Sound 5
              </Button>

              <Button
                m={4}
                size="lg"
                colorScheme="cyan"
                onClick={() => {
                  if (isPlayingSound6) {
                    stopSound6();
                  } else {
                    playSound6();
                  }
                }}
                rightIcon={isPlayingSound6 ? <FaStop /> : <FaPlay />}
              >
                Hiking Sound 6
              </Button>

              <Button
                m={4}
                size="lg"
                colorScheme="cyan"
                onClick={() => {
                  if (isPlayingSound7) {
                    stopSound7();
                  } else {
                    playSound7();
                  }
                }}
                rightIcon={isPlayingSound7 ? <FaStop /> : <FaPlay />}
              >
                Hiking Sound 7
              </Button>

              <Button
                m={4}
                size="lg"
                colorScheme="cyan"
                onClick={() => {
                  if (isPlayingSound8) {
                    stopSound8();
                  } else {
                    playSound8();
                  }
                }}
                rightIcon={isPlayingSound8 ? <FaStop /> : <FaPlay />}
              >
                Hiking Sound 8
              </Button>

              <Button
                m={4}
                size="lg"
                colorScheme="cyan"
                onClick={() => {
                  if (isPlayingSound9) {
                    stopSound9();
                  } else {
                    playSound9();
                  }
                }}
                rightIcon={isPlayingSound9 ? <FaStop /> : <FaPlay />}
              >
                Hiking Sound 9
              </Button>

              <Button
                m={4}
                size="lg"
                colorScheme="cyan"
                onClick={() => {
                  if (isPlayingSound10) {
                    stopSound10();
                  } else {
                    playSound10();
                  }
                }}
                rightIcon={isPlayingSound10 ? <FaStop /> : <FaPlay />}
              >
                Hiking Sound 10
              </Button>

              <Button
                m={4}
                size="lg"
                colorScheme="cyan"
                onClick={() => {
                  if (isPlayingSound11) {
                    stopSound11();
                  } else {
                    playSound11();
                  }
                }}
                rightIcon={isPlayingSound11 ? <FaStop /> : <FaPlay />}
              >
                Hiking Sound 11
              </Button>

              <Button
                m={4}
                size="lg"
                colorScheme="cyan"
                onClick={() => {
                  if (isPlayingSound12) {
                    stopSound12();
                  } else {
                    playSound12();
                  }
                }}
                rightIcon={isPlayingSound12 ? <FaStop /> : <FaPlay />}
              >
                Hiking Sound 12
              </Button>

              <Button
                m={4}
                size="lg"
                colorScheme="cyan"
                onClick={() => {
                  if (isPlayingSound13) {
                    stopSound13();
                  } else {
                    playSound13();
                  }
                }}
                rightIcon={isPlayingSound13 ? <FaStop /> : <FaPlay />}
              >
                Hiking Sound 13
              </Button>
            </Box>
          </Box>
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            <Typist
              cursor={{ hideWhenDone: true, blink: true }}
              avgTypingDelay={5}
            >
              You reach your destination and get off the bus. You are greeted by
              a local guide.
              <br />
              <br />
              &quot;I will lead you up the mountain. When we get there you will
              tell me who you are looking for.&quot;
            </Typist>
          </Box>
          <Box w="100%" pt={1}>
            <Text my={2}>
              Figure out who you are looking for. Maybe the writing at the
              bottom of the brochure the man gave you will help.
            </Text>
            <Text my={3} fontSize="xs">
              Hint: send the current page URL to each team member to work on the
              mat thu together.
            </Text>
            <Button
              colorScheme="cyan"
              onClick={() => {
                setModalOpened(true);
                onOpen();
              }}
            >
              Look at the brochure again
            </Button>
            {appState.SHOW_ANSWERS && (
              <>
                <ShowAnswerButton answer="queen of sapa" />
                <ShowAnswerButton answer="ascent" />
              </>
            )}
          </Box>
          <Box p={2}>
            {modalOpened && (
              <>
                <Button
                  colorScheme="cyan"
                  onClick={() => router.push("/htdt/16-mountaintop")}
                >
                  Arrive at mountaintop
                </Button>
              </>
            )}
          </Box>
        </Hud>
      </GameLayout>

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent minW="50vw">
          <ModalHeader>Brochure</ModalHeader>
          <ModalCloseButton />
          <ModalBody overflow="auto" maxH="100%">
            <Image src="/sapa/brochure2.png" />
            <Text fontSize="lg" fontWeight="semibold" mt={6}>
              UYWYWNVFGVVHYQZXLXXHRWVPPNVDWNVJYRVTYDRXZJVHW
            </Text>
            <Text fontSize="sm" my={2}>
              Solve the sound-bytes for the correct Letter Substitution
            </Text>
            <Text my={2}>Hint: Hiking is very TIME-consuming</Text>
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
