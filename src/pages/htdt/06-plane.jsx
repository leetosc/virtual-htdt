import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  Box,
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
} from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";
import ReactPlayer from "react-player";
import { useAppState } from "@/context/state";

export default function Plane() {
  const router = useRouter();
  const [typingDone, setTypingDone] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const { appState } = useAppState();

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
              src="/begin/planeinside.png"
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
              avgTypingDelay={20}
              onTypingDone={() => setTypingDone(true)}
            >
              What a nice plane. You settle in and see what&apos;s showing on
              the TV.
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
                Open TV
              </Button>
            )}
          </Box>
          <Box w="100%" display="flex" pt={4}></Box>
          <Box p={2}>
            {modalOpened && (
              <>
                <Button
                  colorScheme="cyan"
                  mx="auto"
                  onClick={() => {
                    router.push("/htdt/06b-plane2");
                  }}
                >
                  Continue
                </Button>
              </>
            )}
          </Box>
        </Hud>
      </GameLayout>

      <Modal isOpen={isOpen} onClose={() => {}} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>In-Flight TV</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
              It&apos;s a video about Ha Noi!
              {videoEnded ? (
                <Box minH={64} h="100%" position="relative" overflow="auto">
                  <Image src="/begin/planetv.webp" w="100%" maxH="100%" />
                </Box>
              ) : (
                <ReactPlayer
                  url="https://youtu.be/74dgLjjXABk"
                  controls={false}
                  muted={true}
                  playing={true}
                  playbackRate={2}
                  onProgress={({ playedSeconds }) => {
                    if (playedSeconds > 190) {
                      setVideoEnded(true);
                    }
                  }}
                  config={{
                    youtube: {
                      playerVars: {
                        start: 5,
                      },
                    },
                  }}
                  width="100%"
                  h="100%"
                  minH={64}
                />
              )}
            </Box>
          </ModalBody>

          <ModalFooter>
            {appState.SHOW_ANSWERS && (
              <Button colorScheme="red" mr={3} onClick={onClose}>
                Close
              </Button>
            )}
            <Button
              disabled={!videoEnded}
              colorScheme="gray"
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
