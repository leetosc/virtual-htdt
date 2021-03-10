import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Button, Image } from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";
import ReactPlayer from "react-player";

export default function Tet2() {
  const router = useRouter();
  const [typingDone, setTypingDone] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

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
              <Image src="/saigon/tet2.jpg" maxW="unset" h="100%" maxH="100%" />
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
                url="https://youtu.be/wthTWwWCjIM"
                controls={false}
                muted={true}
                playing={true}
                playbackRate={1}
                onProgress={({ playedSeconds }) => {
                  if (playedSeconds > 131) {
                    setVideoEnded(true);
                  }
                }}
                config={{
                  youtube: {
                    playerVars: {
                      start: 86,
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
              onTypingDone={() => setTypingDone(true)}
            >
              You will also hear a lot of loud noises from firecrackers, gongs,
              drums, and more as lion dancers parade throughout the streets.
              They perform what is called mua lan (lion dancing). The dancing
              and loud noises are used to ward off evil spirits in preparation
              for the new year.
            </Typist>
          </Box>
          <Box w="100%" display="flex" pt={4}></Box>
          <Box p={2}>
            {typingDone && (
              <>
                <Button
                  colorScheme="cyan"
                  onClick={() => router.push("/htdt/37g-tet3")}
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
