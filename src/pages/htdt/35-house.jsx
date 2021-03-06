import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Button, Image } from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";

export default function SaigonHouse() {
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
            <Image
              src="/saigon/saigonhouses.jpg"
              maxW="unset"
              h="100%"
              maxH="100%"
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
              You arrive at your family member's house. Like most of the houses
              in the area, they have a small business on the first level and
              live on the upper floors.
            </Typist>
          </Box>
          <Box w="100%" display="flex" pt={4}></Box>
          <Box p={2}>
            {typingDone && (
              <>
                <Button
                  colorScheme="cyan"
                  onClick={() => router.push("/htdt/27-trip")}
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
