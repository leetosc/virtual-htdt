import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Text, Button, Image } from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";
import { useAppState } from "@/context/state";

export default function Hiking3() {
  const router = useRouter();
  const [typingDone, setTypingDone] = useState(false);
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

          <Box h="100%" position="relative" overflow="auto">
            <Image src="/sapa/hiking3.jpg" maxW="unset" h="100%" maxH="100%" />
          </Box>
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            <Typist
              cursor={{ hideWhenDone: true, blink: true }}
              avgTypingDelay={5}
              onTypingDone={() => setTypingDone(true)}
            >
              &quot;Our next stop is that of the Tay People. This is a treat
              indeed, here they are right now, playing one of their traditional
              songs, let’s see if they’ll have a chat with us.&quot;
            </Typist>
          </Box>
          <Box w="100%" pt={2}>
            <Text>Continue hiking</Text>
          </Box>
          <Box p={2}>
            {typingDone && (
              <>
                <Text my={2}></Text>
                <Button
                  colorScheme="cyan"
                  onClick={() => router.push("/htdt/18c6-tay")}
                >
                  Continue
                </Button>
              </>
            )}
            {appState.SHOW_ANSWERS && (
              <Button
                colorScheme="red"
                onClick={() => router.push("/htdt/18c6-tay")}
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
