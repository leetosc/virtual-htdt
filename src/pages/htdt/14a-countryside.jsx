import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Text, Button } from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";
import ReactPlayer from "react-player";

export default function Countryside() {
  const router = useRouter();
  const [typingDone, setTypingDone] = useState(false);

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
              url="https://www.youtube.com/watch?v=2_86KFKD1wE"
              controls={false}
              muted={true}
              playing={true}
              config={{
                youtube: {
                  playerVars: {
                    start: 56,
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
              avgTypingDelay={5}
              onTypingDone={() => setTypingDone(true)}
            >
              Sa Pa is a small mountain town in the Lao Cai province, about 350
              km (a bit over 200 miles) northwest of Hanoi. It was first home to
              several different minority groups, including the Hmang, Dao, Tay,
              Giay, but now it is mainly known for its natural beauty and
              awe-inspiring landscape.
            </Typist>
          </Box>
          <Box w="100%" pt={4}>
            <Text>
              Along the way, you see the beautiful landscape and think of how
              blessed you are to be able to travel. Before continuing the
              journey, each person share with your teammates:
            </Text>
            <Text fontWeight="semibold">
              Of the places you have visited or traveled to, which is your
              favorite?
            </Text>
          </Box>
          <Box p={2}>
            {typingDone && (
              <>
                <Button
                  colorScheme="cyan"
                  onClick={() => router.push("/htdt/14b-brochure")}
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
