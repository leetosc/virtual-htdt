import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Button, Image } from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";

export default function HaLongBus() {
  const router = useRouter();

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
            <Image src="/halong/bus.jpg" maxW="unset" maxH="100%" h="100%" />
          </Box>
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            <Typist
              cursor={{ hideWhenDone: true, blink: true }}
              avgTypingDelay={10}
            >
              Although somewhat disappointed at not finding the treasure, you
              are glad to have had the chance to see the natural beauty of Ha
              Long Bay. Time to take a bus to Hue.
            </Typist>
          </Box>
          <Box w="100%" display="flex" pt={2}>
            Continue your journey
          </Box>
          <Box p={2}>
            <Button
              colorScheme="cyan"
              mx="auto"
              onClick={() => {
                router.push("/htdt/26-map");
              }}
            >
              Depart
            </Button>
          </Box>
        </Hud>
      </GameLayout>
    </>
  );
}
