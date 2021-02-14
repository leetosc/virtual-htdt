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

export default function Bus() {
  const router = useRouter();
  const [typingDone, setTypingDone] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

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
              src={buttonClicked ? "/hvmccToEagleWing.jpg" : "/businside.jpg"}
              maxW="unset"
              maxH="100%"
              h="100%"
              _hover={{ cursor: "pointer" }}
            />
          </Box>
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            <Typist
              cursor={{ hideWhenDone: true, blink: true }}
              avgTypingDelay={15}
              onTypingDone={() => setTypingDone(true)}
            >
              It is a short ride and you reach your destination. It's camp!
            </Typist>
          </Box>
          <Box w="100%" display="flex" pt={4}></Box>
          <Box p={2}>
            {buttonClicked ? (
              <Button
                colorScheme="cyan"
                onClick={() => router.push("/htdt/03-camp")}
              >
                Get off bus
              </Button>
            ) : (
              <Button colorScheme="cyan" onClick={() => setButtonClicked(true)}>
                Arrive at destination
              </Button>
            )}
          </Box>
        </Hud>
      </GameLayout>
    </>
  );
}
