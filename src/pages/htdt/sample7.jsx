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

export default function Sample7() {
  const router = useRouter();
  const [typingDone, setTypingDone] = useState(true);
  const [modalOpened, setModalOpened] = useState(false);

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
            <Image src="/vietnamairlines.jpg" maxW="unset" maxH="100%" />
          </Box>
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            <Typist
              cursor={{ hideWhenDone: true, blink: true }}
              avgTypingDelay={20}
              onTypingDone={() => setTypingDone(true)}
            >
              The man lets you on the plane and whispers to you before leaving:
              <br />
              "When you reach Hanoi, find a cyclo driver and tell him the secret
              code. He will take you to where you need to go. The code is in
              your TV"
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
          <Box w="100%" display="flex" pt={4}>
            {modalOpened && (
              <>
                <Button
                  colorScheme="cyan"
                  mx="auto"
                  onClick={() => {
                    router.push("/htdt/sample7a");
                  }}
                >
                  Arrive at destnation
                </Button>
              </>
            )}
          </Box>
          <Box>
            <Text>Airplane</Text>
          </Box>
        </Hud>
      </GameLayout>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>In-Flight TV</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Insert a video or mat thu here
            <Image src="/phoimage.jpeg" maxH="100%" />
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
