import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Text, Button } from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import { useAppState } from "@/context/state";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";
import ReactPlayer from "react-player";

export default function SaigonWalk() {
  const router = useRouter();
  const [allowContinue, setAllowContinue] = useState(false);

  const { appState } = useAppState();

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
              url="https://youtu.be/YsXsSKXyTPw"
              controls={false}
              muted={true}
              playing={true}
              playbackRate={1}
              loop={true}
              config={{
                youtube: {
                  playerVars: {
                    start: 305,
                  },
                },
              }}
              width="100%"
              height="100%"
            />
          </Box>
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            <Typist
              cursor={{ hideWhenDone: true, blink: true }}
              avgTypingDelay={15}
            >
              As you make your way to your family member&apos;s house, you take
              a walk through the city. There are so many people!
            </Typist>
          </Box>
          <Box w="100%" pt={1}>
            <Text>
              Before continuing, each person share with your teammates:
            </Text>
            <Text fontWeight="semibold">
              Do you have any family members in Vietnam?
            </Text>
          </Box>
          <Box p={2}>
            {allowContinue && (
              <>
                <Button
                  colorScheme="cyan"
                  onClick={() => router.push("/htdt/24-activity")}
                >
                  Continue
                </Button>
              </>
            )}
            {appState.SHOW_ANSWERS && (
              <>
                <Button
                  colorScheme="red"
                  onClick={() => router.push("/htdt/24-activity")}
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
