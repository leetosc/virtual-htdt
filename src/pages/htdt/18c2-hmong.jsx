import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Text, Button, Image } from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";
import { useAppState } from "@/context/state";

export default function SapaTour() {
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
            <Image src="/sapa/hmong.jpg" maxW="unset" h="100%" maxH="100%" />
          </Box>
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            <Typist
              cursor={{ hideWhenDone: true, blink: true }}
              avgTypingDelay={5}
              onTypingDone={() => setTypingDone(true)}
            >
              &quot;Hi I’m Vi, nice to meet you. I am part of the Hmong people.
              Our people have been through a lot of conflict, but it is good to
              finally settle down in Sa Pa and be one of the most populous
              minority groups here.
              <br />
              <br />
              We’re not in our homes right now, but our gods are the god of the
              kitchen, god of the door, and god of the house. We also worship
              our ancestors, asking them to instill their wisdom onto us.
              <br />
              <br />
              Family is also a very important thing to us, and even to those are
              not blood-related to us, we still consider them as our family.
              &quot;
            </Typist>
          </Box>
          <Box w="100%" pt={2}>
            Talk to the Hmong people
          </Box>
          <Box p={2}>
            {typingDone && (
              <>
                <Text my={2}></Text>
                <Button
                  colorScheme="cyan"
                  onClick={() => router.push("/htdt/18c3-hiking2")}
                >
                  Continue
                </Button>
              </>
            )}
            {appState.SHOW_ANSWERS && (
              <Button
                colorScheme="red"
                onClick={() => router.push("/htdt/18c3-hiking2")}
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
