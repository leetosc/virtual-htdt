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

export default function Sample3() {
  const router = useRouter();
  const [typingDone, setTypingDone] = useState(false);

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
            <Image src="/abiaToHue.png" maxW="unset" maxH="100%" />
          </Box>
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            <Typist
              cursor={{ hideWhenDone: true, blink: true }}
              avgTypingDelay={20}
              onTypingDone={() => setTypingDone(true)}
            >
              You have arrived at Hue. Thank goodness you somehow found a direct
              flight from Austin!
              <br />
              Time to start looking for clues around the city, which was the
              former capital of Vietnam.
              <br />
            </Typist>
          </Box>
          <Box w="100%" display="flex" pt={4}>
            {typingDone && (
              <>
                <Button
                  colorScheme="cyan"
                  mx="auto"
                  onClick={() => {
                    router.push("/htdt/sample4");
                  }}
                >
                  Find a Taxi
                </Button>
              </>
            )}
          </Box>
          <Box>
            <Text>Airport</Text>
          </Box>
        </Hud>
      </GameLayout>
    </>
  );
}
