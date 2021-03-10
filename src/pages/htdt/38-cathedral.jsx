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
} from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import { useAppState } from "@/context/state";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";
import { Carousel } from "react-responsive-carousel";
import ReactPlayer from "react-player";
import { GoogleFonts } from "next-google-fonts";

export default function NhaThoDucBa() {
  const router = useRouter();
  const [typingDone, setTypingDone] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalOpened, setModalOpened] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

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
          <GoogleFonts href="https://fonts.googleapis.com/css2?family=Assistant:wght@400;600&display=swap" />

          <Head>
            <title>Virtual HTDT</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          {videoEnded ? (
            <Box h="100%" position="relative" overflow="auto">
              <Image
                src="/saigon/nhaThoDucBaDenny.JPG"
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
                url="https://youtu.be/R2PVLDHY8z0"
                controls={false}
                muted={true}
                playing={true}
                playbackRate={1.25}
                onEnded={() => setVideoEnded(true)}
                config={{
                  youtube: {
                    playerVars: {
                      start: 11,
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
              avgTypingDelay={5}
              onTypingDone={() => setTypingDone(true)}
            >
              Your cousin takes you to the Notre-Dame Cathedral Basilica of
              Saigon, known as Nhà Thờ Đức Bà.
              <br />
              <br />
              Built between 1863 and 1880 by French colonists, the Notre-Dame
              Cathedral Basilica of Saigon is the most impressive cathedral in
              Vietnam. Modeled on Notre-Dame de Paris and built with materials
              shipped over from France, the cathedral is the religious center
              for Vietnam’s 6.2 million Catholics.
            </Typist>
          </Box>
          <Box w="100%" pt={1}>
            <Text></Text>
            {videoEnded && (
              <>
                <Text>You run into a younger version of Tr. Denny</Text>
                <Button
                  onClick={() => {
                    setModalOpened(true);
                    onOpen();
                  }}
                  colorScheme="cyan"
                  mt={3}
                >
                  Talk to Tr. Denny
                </Button>
              </>
            )}
            {appState.SHOW_ANSWERS && (
              <Button
                onClick={() => {
                  setModalOpened(true);
                  onOpen();
                }}
                colorScheme="red"
                mt={3}
              >
                Talk to Tr. Denny
              </Button>
            )}
          </Box>
          <Box p={2}>
            {videoEnded && modalOpened && (
              <>
                <Text>&quot;Don&apos;t forget the password!&quot;</Text>
                <Button
                  mt={2}
                  colorScheme="cyan"
                  onClick={() => router.push("/htdt/29-map")}
                >
                  Continue
                </Button>
              </>
            )}
            {appState.SHOW_ANSWERS && (
              <Button
                colorScheme="red"
                onClick={() => router.push("/htdt/29-map")}
              >
                Continue
              </Button>
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
          <ModalHeader>Young Tr. Denny</ModalHeader>
          <ModalCloseButton />
          <ModalBody overflow="auto" maxH="100%">
            <Image src="/saigon/denny.png" h={28} m={2} float="left" />
            <Text>
              &quot;Are you looking for Uncle Tien? His house is in the city.
              You will need a password to get in.&quot;
            </Text>
            <Text mt={8} fontWeight="semibold" fontFamily="Assistant">
              /TV - HMALK - VZEFT/L - MEHZI - MWAIVT - Y - FHYAZ/
            </Text>
            <Text mt={4}>Key: HA = F, HEHE = N</Text>
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
