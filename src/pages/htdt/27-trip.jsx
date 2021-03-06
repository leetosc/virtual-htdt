import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Text, Button, Image } from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import Hud from "@/components/Hud/Hud";
import { useAppState } from "@/context/state";
import Typist from "react-typist";
import ReactPlayer from "react-player";

export default function Trip() {
  const router = useRouter();
  const [videoEnded, setVideoEnded] = useState(false);
  const { appState } = useAppState();
  const [allowContinue, setAllowContinue] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAllowContinue(true);
    }, 50000);
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
              <Image src="/buswindow.png" maxW="unset" h="100%" maxH="100%" />
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
                url="https://youtu.be/a1SAKLfWVSc"
                controls={false}
                muted={true}
                playing={true}
                playbackRate={1}
                onEnded={() => {
                  setVideoEnded(true);
                }}
                config={{
                  youtube: {
                    playerVars: {
                      start: 70,
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
              avgTypingDelay={5}
            >
              Sit back and enjoy the ride.
            </Typist>
          </Box>
          <Box w="100%" pt={1}>
            <Text>
              On your trip to Hue, you think about all the great Vietnamese food
              you have been eating during the trip.
            </Text>
            <Text mt={2}>
              Each person share with your teammates:{" "}
              <b>
                What is your favorite Vietnamese dish? What is your favorite
                food overall?
              </b>
            </Text>
          </Box>
          <Box p={2}>
            {allowContinue && (
              <>
                <Button
                  colorScheme="cyan"
                  onClick={() => router.push("/htdt/22c-boat")}
                >
                  Continue
                </Button>
              </>
            )}
            {appState.SHOW_ANSWERS && (
              <Button
                colorScheme="red"
                onClick={() => router.push("/htdt/27-trip")}
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
