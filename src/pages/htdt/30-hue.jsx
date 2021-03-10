import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Text, Button, Image, Stack } from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import { useAppState } from "@/context/state";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";
import ReactPlayer from "react-player";

export default function Hue() {
  const router = useRouter();
  const [videoEnded, setVideoEnded] = useState(false);

  const { appState } = useAppState();

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
              <Image src="/hue/taxi.png" maxW="unset" h="100%" maxH="100%" />
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
                url="https://youtu.be/nVsRP3Pqesk"
                controls={false}
                muted={true}
                playing={true}
                playbackRate={1.25}
                onProgress={({ playedSeconds }) => {
                  if (playedSeconds > 205) {
                    setVideoEnded(true);
                  }
                }}
                config={{
                  youtube: {
                    playerVars: {
                      start: 10,
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
              You arrive in Hue, the former imperial capital of Vietnam. You
              decide to check out some of the city&apos;s popular attractions to
              see if your uncle left any clues.
            </Typist>
          </Box>
          <Box w="100%" pt={1}>
            {appState.locationsVisited.includes("/htdt/31a-imperialcity") &&
            appState.locationsVisited.includes("/htdt/31b-pagoda") &&
            appState.locationsVisited.includes("/htdt/31c-dongba") ? (
              <>
                <Text>
                  Taxi driver: &quot;It looks like you are heading to Saigon.
                  I&apos;ll take you to the airport&quot;
                </Text>
                <Button
                  mt={2}
                  colorScheme="cyan"
                  onClick={() => router.push("/htdt/31d-airport")}
                >
                  Go to airport
                </Button>
              </>
            ) : (
              <Text>Look for clues around the city</Text>
            )}
            {appState.SHOW_ANSWERS && (
              <Button
                mt={2}
                colorScheme="red"
                onClick={() => router.push("/htdt/31d-airport")}
              >
                Go to airport
              </Button>
            )}
          </Box>
          <Box p={2}>
            <Stack>
              <Button
                colorScheme="cyan"
                isDisabled={appState.locationsVisited.includes(
                  "/htdt/31a-imperialcity"
                )}
                onClick={() => router.push("/htdt/31a-imperialcity")}
              >
                Imperial City
              </Button>
              <Button
                colorScheme="cyan"
                isDisabled={appState.locationsVisited.includes(
                  "/htdt/31b-pagoda"
                )}
                onClick={() => router.push("/htdt/31b-pagoda")}
              >
                Thien Mu Pagoda
              </Button>
              <Button
                colorScheme="cyan"
                isDisabled={appState.locationsVisited.includes(
                  "/htdt/31c-dongba"
                )}
                onClick={() => router.push("/htdt/31c-dongba")}
              >
                Dong Ba Market
              </Button>
            </Stack>
          </Box>
        </Hud>
      </GameLayout>
    </>
  );
}
