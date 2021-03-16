import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Text, Button, Image } from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";

export default function Sapabus() {
  const router = useRouter();
  const [clickCounter, setClickCounter] = useState(0);

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
              src={
                clickCounter % 2 === 0
                  ? "/sapa/sapa-bus.jpg"
                  : "/sapa/peterbus.jpg"
              }
              maxW="unset"
              maxH="100%"
              h="100%"
              onClick={() => {
                setClickCounter(clickCounter + 1);
              }}
              _hover={{ cursor: "pointer" }}
            />
          </Box>
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            <Typist
              cursor={{ hideWhenDone: true, blink: true }}
              avgTypingDelay={10}
            >
              It is time to leave. You bid farewell to the villagers, then get
              back on the bus. The bus driver asks where you want to go. Your
              uncle&apos;s note in the cabin mentioned Ha Long Bay, so you
              decide to go there.
            </Typist>
          </Box>
          <Box w="100%" display="flex" pt={4}>
            <Text fontSize="sm">Click to see the inside of the bus</Text>
          </Box>
          <Box p={2}>
            <Button
              colorScheme="cyan"
              mx="auto"
              onClick={() => {
                router.push("/htdt/20-map");
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
