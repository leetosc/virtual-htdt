import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Text, Button, Image } from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import { useAppState } from "@/context/state";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";
import ReactPlayer from "react-player";

export default function Saigon() {
  const router = useRouter();
  const [videoEnded, setVideoEnded] = useState(false);
  const [allowContinue, setAllowContinue] = useState(false);

  const { appState } = useAppState();

  useEffect(() => {
    setTimeout(() => {
      setAllowContinue(true);
    }, 45000);
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

          {videoEnded ? (
            <Box h="100%" position="relative" overflow="auto">
              <Image
                src="/saigon/airport.jpg"
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
                url="https://youtu.be/01y1_y7c5_w"
                controls={false}
                muted={true}
                playing={true}
                playbackRate={1.5}
                onProgress={({ playedSeconds }) => {
                  if (playedSeconds > 180) {
                    setVideoEnded(true);
                  }
                }}
                onEnded={() => {
                  setVideoEnded(true);
                }}
                config={{
                  youtube: {
                    playerVars: {
                      start: 2,
                    },
                  },
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
              avgTypingDelay={15}
            >
              Ho Chi Minh City, commonly known by its previous name, Saigon, is
              the largest and most populous city in Vietnam, and was the capital
              of South Vietnam until the end of the Vietnam war. According to
              the 2019 census, Ho Chi Minh City has a population of over 8.9
              million within the city proper and over 21 million within its
              metropolitan area. Ho Chi Minh City is an economic and financial
              centre and plays an important role in the country&apos;s cultural
              and scientific developments.
            </Typist>
          </Box>
          <Box w="100%" pt={1}>
            <Text>
              You have some family living in Saigon that you have not seen in a
              long time. You decide to go visit them.
            </Text>
          </Box>
          <Box p={2}>
            {allowContinue && (
              <>
                <Button
                  colorScheme="cyan"
                  onClick={() => router.push("/htdt/34-walk")}
                >
                  Continue
                </Button>
              </>
            )}
            {appState.SHOW_ANSWERS && (
              <>
                <Button
                  colorScheme="red"
                  onClick={() => router.push("/htdt/34-walk")}
                >
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
