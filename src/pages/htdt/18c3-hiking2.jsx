import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Text, Button, Image } from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";
import { useAppState } from "@/context/state";

export default function Hiking2() {
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
            <Image src="/sapa/hiking2.jpg" maxW="unset" h="100%" maxH="100%" />
          </Box>
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            <Typist
              cursor={{ hideWhenDone: true, blink: true }}
              avgTypingDelay={5}
              onTypingDone={() => setTypingDone(true)}
            >
              &quot;That was fun. I hope you were able to learn a lot about
              them. The next group of people I want you to meet are the Dao
              people. You have to know that the Dao people’s religion is a mix
              of Confucianism, Buddhism, and Taoism, and they have a lot of
              wisdom to bestow upon us, particularly of their ancestry.&quot;
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
                  onClick={() => router.push("/htdt/18c4-dao")}
                >
                  Continue
                </Button>
              </>
            )}
            {appState.SHOW_ANSWERS && (
              <Button
                colorScheme="red"
                onClick={() => router.push("/htdt/18c4-dao")}
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
