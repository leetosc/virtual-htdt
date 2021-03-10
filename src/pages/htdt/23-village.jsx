import React, { useState, useEffect } from "react";
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
} from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import { useAppState } from "@/context/state";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";
import ReactPlayer from "react-player";

export default function HaLongVillage() {
  const router = useRouter();
  const [typingDone, setTypingDone] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalOpened, setModalOpened] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [allowContinue, setAllowContinue] = useState(false);

  const { appState } = useAppState();

  useEffect(() => {
    setTimeout(() => {
      setAllowContinue(true);
    }, 50000);
  }, []);

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
                src="/halong/floatingvillage.jpg"
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
                url="https://youtu.be/MCgSduvi0s8"
                controls={false}
                muted={true}
                playing={true}
                playbackRate={1.5}
                onEnded={() => {
                  setVideoEnded(true);
                }}
                config={{
                  youtube: {
                    playerVars: {
                      start: 50,
                    },
                  },
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
              avgTypingDelay={15}
              onTypingDone={() => setTypingDone(true)}
            >
              Ha Long Bay is home to many traditional floating villages whose
              inhabitants live on boats and floating wooden houses in the core
              zone of Hạ Long bay. Their main livelihood is fishing and
              aquaculture. Traditionally, each boat in the floating village is a
              separate household, though the raft or boat always serves more
              than one function. It is a home, a means of transport, and a
              source of income. The residents are inextricably linked to their
              setting, forming an integrated cultural landscape and living
              tradition.
            </Typist>
          </Box>
          <Box w="100%" pt={1}>
            {typingDone && (
              <Text>
                You arrive at the floating village. The village leader comes out
                to greet you.
              </Text>
            )}
            {allowContinue && typingDone && (
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
            {modalOpened && (
              <>
                <Button
                  colorScheme="cyan"
                  onClick={() => router.push("/htdt/24-activity")}
                >
                  Build the boat
                </Button>
              </>
            )}
            {appState.SHOW_ANSWERS && (
              <>
                <Button
                  colorScheme="red"
                  onClick={() => router.push("/htdt/24-activity")}
                >
                  Build the boat
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
          <ModalHeader>Village leader</ModalHeader>
          <ModalCloseButton />
          <ModalBody overflow="auto" maxH="100%">
            <Image src="/halong/villager.png" h={48} m={2} float="left" />

            <Text>
              &quot;You&apos;re looking for Uncle Tiền? He was here recently and
              left a package on one of the islands. If you want to reach it you
              will need to build a special boat.&quot;
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
