import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Text, Button, Image } from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";

export default function Hiking4() {
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

          <Box h="100%" position="relative" overflow="auto">
            <Image src="/sapa/hiking1.jpg" maxW="unset" h="100%" maxH="100%" />
          </Box>
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            <Typist
              cursor={{ hideWhenDone: true, blink: true }}
              avgTypingDelay={5}
              onTypingDone={() => setTypingDone(true)}
            >
              &quot;We’re almost at the end of our hike. This is the final group
              of people that we will meet on our hike, but you are welcome to go
              around afterwards to meet and talk to the other minority groups of
              Sa Pa. If you tell them the right things, some of them may give
              you something or tell you something special in return. This is a
              traditional Giay wedding, and don’t worry, they allowed us to come
              watch their traditional weddings, so you’re not intruding on them,
              at least as long as you keep your distance and mind their personal
              space.&quot;
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
                  onClick={() => router.push("/htdt/18c8-giay")}
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
