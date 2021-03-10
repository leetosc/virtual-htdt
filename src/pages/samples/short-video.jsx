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
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";
import ReactPlayer from "react-player";

export default function SampleShortVideo() {
  const router = useRouter();
  const [typingDone, setTypingDone] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalOpened, setModalOpened] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

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
                src="/halong/halongphi.jpg"
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
                url="https://youtu.be/o0qZiWvFyok"
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
              Overlooking the bay, you encounter a man standing in the shadows.
            </Typist>
            {videoEnded && typingDone && (
              <Button
                mt={2}
                colorScheme="cyan"
                onClick={() => {
                  setModalOpened(true);
                  onOpen();
                }}
              >
                Talk to the man
              </Button>
            )}
          </Box>
          <Box w="100%" pt={1}>
            <Text>
              This page shows a short video, then an image when the video ends.
            </Text>
            <Text>The user can continue after opening the modal.</Text>
          </Box>
          <Box p={2}>
            {modalOpened && (
              <>
                <Button
                  colorScheme="cyan"
                  onClick={() => router.push("/htdt/22c-boat")}
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
          <ModalHeader>Man in the shadows</ModalHeader>
          <ModalCloseButton />
          <ModalBody overflow="auto" maxH="100%">
            <Image src="/halong/halongphi2.png" h={96} m={2} float="left" />

            <Text>&quot;What are you doing here?&quot;</Text>
            <Text mt={6}>
              &quot;Oh, you&apos;re looking for Uncle Tiền? He spent some time
              at one of the floating villages. I can take you there.&quot;
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
