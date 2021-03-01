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
} from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import { useAppState } from "@/context/state";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";
import sound1 from "../../../public/hanoi-BanMuonDiDau.mp3";
import useSound from "use-sound";

export default function Cyclo() {
  const router = useRouter();

  const [diDau] = useSound(sound1);

  const stateContext = useAppState();
  const { appState } = stateContext;

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
              h="100%"
              onClick={diDau}
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
          <Box w="100%">
            {appState.locationsVisited.includes("11b-hoankiem") &&
            appState.locationsVisited.includes("11-pagoda") &&
            appState.locationsVisited.includes("09-stjoseph") &&
            appState.locationsVisited.includes("12-dongxuan") ? (
              <>
                <Text>
                  "It looks like you are heading to Sa Pa. I'll take you to the
                  bus station"
                </Text>
                <Button
                  mt={2}
                  colorScheme="cyan"
                  onClick={() => router.push("/htdt/13-hanoibus")}
                >
                  Go to bus station
                </Button>
              </>
            ) : (
              <Text>Look for clues around the city</Text>
            )}
          </Box>
          <Box>
            <Text mb={1}>Bạn muốn đi đâu?</Text>
            <Stack>
              <Button
                colorScheme="cyan"
                isDisabled={appState.locationsVisited.includes("11b-hoankiem")}
                onClick={() => router.push("/htdt/11b-hoankiem")}
              >
                Hoàn Kiếm Lake
              </Button>
              <Button
                colorScheme="cyan"
                onClick={() => router.push("/htdt/11-pagoda")}
                isDisabled={appState.locationsVisited.includes("11-pagoda")}
              >
                One Pillar Pagoda
              </Button>
              <Button
                colorScheme="cyan"
                onClick={() => router.push("/htdt/09-stjoseph")}
                isDisabled={appState.locationsVisited.includes("09-stjoseph")}
              >
                St Joseph&apos;s Cathedral
              </Button>
              <Button
                colorScheme="cyan"
                isDisabled={appState.locationsVisited.includes("12-dongxuan")}
                onClick={() => router.push("/htdt/12-dongxuan")}
              >
                Đồng Xuân Market
              </Button>
            </Stack>
          </Box>
        </Hud>
      </GameLayout>
    </>
  );
}
