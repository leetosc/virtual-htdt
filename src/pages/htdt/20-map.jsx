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

export default function Map() {
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

          <Box h="100%" position="relative" overflow="auto">
            <Image
              src="/sapa/sapaToHaLong.png"
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
              You settle in for a long bus ride.
            </Typist>
          </Box>
          <Box w="100%" pt={1}>
            <Text>
              The trip from Sa Pa to Ha Long Bay is long, especially on the
              small mountain roads. You have a lot of free time on your hands.
            </Text>
            <Text>Each person share with your teammates:</Text>
            <Text fontWeight="semibold">
              What is your favorite pastime when on a long trip?
            </Text>
          </Box>
          <Box p={2}>
            {typingDone && (
              <>
                <Button
                  colorScheme="cyan"
                  onClick={() => router.push("/htdt/14a-countryside")}
                >
                  {/* TODO: update link */}
                  Continue
                </Button>
              </>
            )}
          </Box>
        </Hud>
      </GameLayout>
    </>
  );
}
