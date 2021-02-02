import React, { useState, useEffect, useRef } from "react";
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
import sound1 from "../../../public/hue-BanMuonDiDau.mp3";
import sound2 from "../../../public/Hue-TakeAnywhere.mp3";
import useSound from "use-sound";

export default function Sample4() {
  const router = useRouter();
  const clickCounter = useRef(0);

  const [diDau] = useSound(sound1);
  const [takeAnywhere] = useSound(sound2);

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
              src="/hanoicyclo.jpg"
              maxW="unset"
              maxH="100%"
              onClick={() => {
                clickCounter.current += 1;
                if (clickCounter.current % 2 === 0) {
                  takeAnywhere();
                } else {
                  diDau();
                }
              }}
            />
          </Box>
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            <Typist
              cursor={{ hideWhenDone: true, blink: true }}
              avgTypingDelay={20}
            >
              The cyclo driver was a friend of your uncle, and says that they
              liked to visit certain places around the city when they hung out
              together.
            </Typist>
          </Box>
          <Box w="100%" pt={2}>
            <Text mb={1}>Bạn muốn đi đâu?</Text>
            <Stack>
              <Button
                colorScheme="cyan"
                onClick={() => window.alert("not made yet")}
              >
                Hoàn Kiếm Lake
              </Button>
              <Button
                colorScheme="cyan"
                onClick={() => window.alert("not made yet")}
              >
                One Pillar Pagoda
              </Button>
              <Button
                colorScheme="cyan"
                onClick={() => window.alert("not made yet")}
              >
                Thăng Long Imperial Citadel
              </Button>
              <Button
                colorScheme="cyan"
                onClick={() => window.alert("not made yet")}
              >
                St Joseph's Cathedral
              </Button>
              <Button
                colorScheme="cyan"
                onClick={() => window.alert("not made yet")}
              >
                Nội Bài Airport
              </Button>
            </Stack>
          </Box>
          <Box>
            <Text>Cyclo</Text>
          </Box>
        </Hud>
      </GameLayout>
    </>
  );
}
