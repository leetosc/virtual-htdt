import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Image,
  Text,
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

export default function Tet2() {
  const router = useRouter();
  const [typingDone, setTypingDone] = useState(false);
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
              src="/saigon/band_tet.png"
              maxW="unset"
              h="100%"
              maxH="100%"
            />
          </Box>
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            <Typist
              cursor={{ hideWhenDone: true, blink: true }}
              avgTypingDelay={5}
              onTypingDone={() => setTypingDone(true)}
            >
              It is also a time when families reunite to celebrate and welcome
              the coming of the new year. Homes will be decorated, and families
              will prepare meals to feast together. As a custom, children often
              chuc (give Tết greetings) their elders in exchange for li xi
              (lucky money), which are generally given in red envelopes. These
              greetings tend to include wishes of luck and prosperity in the
              upcoming year.
            </Typist>
          </Box>
          <Box w="100%" pt={2}>
            <Text fontWeight="semibold">Team Activity:</Text>
            <Text>
              Take 5 minutes to come up with a Tết greeting (Chúc Tết) for a
              Huynh Truong. When you are ready, join the HTDT voice channel.
            </Text>
            <Text mt={4}>Click when instructed by Huynh Truong</Text>
            <Button my={2} onClick={onOpen} colorScheme="blue">
              HT Activity Links
            </Button>
          </Box>
          <Box p={2}>
            <Text>
              After completing the activity, return to the family lunch.
            </Text>
            {typingDone && (
              <>
                <Button
                  my={2}
                  colorScheme="cyan"
                  onClick={() => router.push("/htdt/36-family")}
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
          <ModalHeader>Links</ModalHeader>
          <ModalCloseButton />
          <ModalBody overflow="auto" maxH="100%">
            <ReactPlayer
              url="https://youtu.be/n1eGeuAzKj8"
              controls={true}
              muted={false}
              playbackRate={1}
              width="100%"
              height="260px"
            />
            <Text>1:34 - 2:12</Text>
            <Box h={16}></Box>
            <ReactPlayer
              url="https://youtu.be/zesT0HyoIW4"
              controls={true}
              muted={false}
              playbackRate={1}
              width="100%"
              height="260px"
            />
            <Text>0:35 - 1:08</Text>
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
