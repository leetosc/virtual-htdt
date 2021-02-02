import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import NextImage from "next/image";
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

export default function Sample7a() {
  const router = useRouter();
  const [typingDone, setTypingDone] = useState(false);
  const [puzzleInput, setPuzzleInput] = useState("");

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

          <Box h="100%" overflow="auto">
            <Image src="/hueToHanoi.png" maxW="unset" maxH="100%" />
          </Box>
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            <Typist
              cursor={{ hideWhenDone: true, blink: true }}
              avgTypingDelay={20}
              onTypingDone={() => setTypingDone(true)}
            >
              You have arrived at Hanoi, the capital of Vietnam. Outside of the
              airport you find a cyclo driver. He seems to be waiting for you.
              <br />
            </Typist>
          </Box>
          <Box w="100%" pt={2}>
            <Text>"What is the password?"</Text>
            <Input
              backgroundColor="white"
              value={puzzleInput}
              onChange={(e) => setPuzzleInput(e.target.value)}
            />

            <Button
              colorScheme="cyan"
              mx="auto"
              mt={2}
              isDisabled={puzzleInput.toLowerCase() !== "pho"}
              onClick={() => {
                router.push("/htdt/sample8");
              }}
            >
              Submit
            </Button>
          </Box>
          <Box>
            <Link href="/htdt/sample7">
              <a>Back to plane</a>
            </Link>
          </Box>
        </Hud>
      </GameLayout>
    </>
  );
}
