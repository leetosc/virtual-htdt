import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Text, Button } from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import { useAppState } from "@/context/state";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";
import ReactPlayer from "react-player";

export default function HaLong1() {
  const router = useRouter();

  const [allowContinue, setAllowContinue] = useState(false);

  const { appState } = useAppState();

  useEffect(() => {
    setTimeout(() => {
      setAllowContinue(true);
    }, 120000);
  }, []);

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
              url="https://www.youtube.com/watch?v=ReDNdewioKs"
              controls={false}
              muted={true}
              playing={true}
              playbackRate={1.5}
              loop={true}
              width="100%"
              height="100%"
            />
          </Box>
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            <Typist
              cursor={{ hideWhenDone: true, blink: true }}
              avgTypingDelay={5}
            >
              <Text>
                You arrive at Ha Long Bay. The scenery is breathtaking.
              </Text>
              <br />
              <Text fontSize="sm">
                The unique beauty of the bay, with its towering limestone
                karsts, make this a natural wonder worthy of a UNESCO World
                Heritage listing.
                <br />
                <br />
                There are more than 1,600 islets in the bay, their limestone
                worn down by 500 million years of tropical downpours, and topped
                by thick jungle growth. Some of the islands are hollow, and
                visitors can take guided tours inside to explore majestic caves.
                Some of the larger islands even have their own lakes.
              </Text>
            </Typist>
          </Box>
          <Box w="100%" pt={2}>
            <Text>
              <Text>
                The trip from Sa Pa to Ha Long Bay was long, especially on the
                small mountain roads. You had a lot of free time on your hands.
              </Text>
              <Text>Each person share with your teammates:</Text>
              <Text fontWeight="semibold">
                What is your favorite pastime when on a long trip?
              </Text>
            </Text>
          </Box>
          <Box p={2}>
            {allowContinue && (
              <>
                <Text my={2}></Text>
                <Button
                  colorScheme="cyan"
                  onClick={() => router.push("/htdt/22-halong2")}
                >
                  Continue
                </Button>
              </>
            )}
            {appState.SHOW_ANSWERS && (
              <Button
                colorScheme="red"
                onClick={() => router.push("/htdt/22-halong2")}
              >
                Continue
              </Button>
            )}
          </Box>
        </Hud>
      </GameLayout>
    </>
  );
}
