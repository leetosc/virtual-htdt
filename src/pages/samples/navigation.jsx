import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Text, Button, Image, Stack } from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import { useAppState } from "@/context/state";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";
import sound1 from "../../../public/hanoi-BanMuonDiDau.mp3";
import useSound from "use-sound";
import ReactPlayer from "react-player";

export default function SampleNavigation() {
  const router = useRouter();

  const [diDau] = useSound(sound1);
  const [videoEnded, setVideoEnded] = useState(false);

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

          {videoEnded ? (
            <Box h="100%" position="relative" overflow="auto">
              <Image
                src="/hanoi/hanoicyclo.jpg"
                maxW="unset"
                maxH="100%"
                h="100%"
                onClick={diDau}
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
                url="https://youtu.be/bSBhEiJE-74"
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
                      start: Math.floor(Math.random() * 350),
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
              avgTypingDelay={20}
            >
              The cyclo driver was a friend of your uncle, and says that they
              liked to visit certain places around the city when they hung out
              together.
            </Typist>
          </Box>
          <Box w="100%">
            <Text>
              This page is a branching point, the user can follow the links in
              any order and return here after completing each location.
            </Text>
            <Text>
              When all locations are completed, the option to continue will
              show.
            </Text>
            {appState.locationsVisited.includes("/htdt/11b-hoankiem") &&
            appState.locationsVisited.includes("/htdt/11-pagoda") &&
            appState.locationsVisited.includes("/htdt/09-stjoseph") &&
            appState.locationsVisited.includes("/htdt/12-dongxuan") ? (
              <>
                <Text>
                  &quot;It looks like you are heading to Sa Pa. I&apos;ll take
                  you to the bus station&quot;
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
            {appState.SHOW_ANSWERS && (
              <Button
                mt={2}
                colorScheme="red"
                onClick={() => router.push("/htdt/13-hanoibus")}
              >
                Go to bus station
              </Button>
            )}
          </Box>
          <Box>
            <Text mb={1}>Bạn muốn đi đâu?</Text>
            <Stack>
              <Button
                colorScheme="cyan"
                isDisabled={appState.locationsVisited.includes(
                  "/htdt/11b-hoankiem"
                )}
                onClick={() => router.push("/htdt/11b-hoankiem")}
              >
                Hoàn Kiếm Lake
              </Button>
              <Button
                colorScheme="cyan"
                onClick={() => router.push("/htdt/11-pagoda")}
                isDisabled={appState.locationsVisited.includes(
                  "/htdt/11-pagoda"
                )}
              >
                One Pillar Pagoda
              </Button>
              <Button
                colorScheme="cyan"
                onClick={() => router.push("/htdt/09-stjoseph")}
                isDisabled={appState.locationsVisited.includes(
                  "/htdt/10a-tnttkids"
                )}
              >
                St Joseph&apos;s Cathedral
              </Button>
              <Button
                colorScheme="cyan"
                isDisabled={appState.locationsVisited.includes(
                  "/htdt/12-dongxuan"
                )}
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
