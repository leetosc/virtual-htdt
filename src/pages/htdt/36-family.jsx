import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Text, Button, Image, Stack } from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import { useAppState } from "@/context/state";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";
import ReactPlayer from "react-player";

export default function SaigonFamily() {
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
              <Image
                src="/saigon/phipho.jpg"
                maxW="unset"
                maxH="100%"
                h="100%"
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
                url="https://youtu.be/DOESK-yyUqw"
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
                      start: Math.floor(Math.random() * 1200),
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
              You family is happy to see you and take you out to get some
              delicious local pho. They ask you about life in America, and you
              ask them about life in Vietnam and about some of the holidays and
              festivals that they like to celebrate.
            </Typist>
          </Box>
          <Box w="100%" pt={1}>
            <Stack>
              <Text>
                Your cousins each have a favorite festival. Click to hear each
                story.
              </Text>
              <Button
                colorScheme="cyan"
                isDisabled={appState.locationsVisited.includes(
                  "/htdt/37a-teacherday1"
                )}
                onClick={() => router.push("/htdt/37a-teacherday1")}
              >
                Ngày Nhà Giáo
              </Button>
              <Button
                colorScheme="cyan"
                isDisabled={appState.locationsVisited.includes(
                  "/htdt/37c-trungthu1"
                )}
                onClick={() => router.push("/htdt/37c-trungthu1")}
              >
                Tết Trung Thu
              </Button>
              <Button
                colorScheme="cyan"
                isDisabled={appState.locationsVisited.includes(
                  "/htdt/37e-tet1"
                )}
                onClick={() => router.push("/htdt/37e-tet1")}
              >
                Tết Nguyên Đán
              </Button>
            </Stack>
            {appState.SHOW_ANSWERS && (
              <Button
                mt={2}
                colorScheme="red"
                onClick={() => router.push("/htdt/38-cathedral")}
              >
                Continue
              </Button>
            )}
          </Box>
          <Box p={2}>
            {appState.locationsVisited.includes("/htdt/37a-teacherday1") &&
              appState.locationsVisited.includes("/htdt/37c-trungthu1") &&
              appState.locationsVisited.includes("/htdt/37e-tet1") && (
                <>
                  <Text>
                    After telling you about their favorite festivals, your
                    cousins want to take you around the city.
                  </Text>
                  <Button
                    mt={2}
                    colorScheme="cyan"
                    onClick={() => router.push("/htdt/38-cathedral")}
                  >
                    Go
                  </Button>
                </>
              )}
          </Box>
        </Hud>
      </GameLayout>
    </>
  );
}
