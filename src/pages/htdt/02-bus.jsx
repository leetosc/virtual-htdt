import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Button, Image } from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";

export default function Bus() {
  const router = useRouter();
  const [buttonClicked, setButtonClicked] = useState(false);

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
                buttonClicked
                  ? "/begin/hvmccToEagleWing.jpg"
                  : "/begin/businside.jpg"
              }
              maxW="unset"
              maxH="100%"
              h="100%"
              _hover={{ cursor: "pointer" }}
            />
          </Box>
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            <Typist
              cursor={{ hideWhenDone: true, blink: true }}
              avgTypingDelay={15}
            >
              It is a short ride and you reach your destination. It&apos;s camp!
            </Typist>
          </Box>
          <Box w="100%" display="flex" pt={4}></Box>
          <Box p={2}>
            {buttonClicked ? (
              <Button
                colorScheme="cyan"
                onClick={() => router.push("/htdt/03-camp")}
              >
                Get off bus
              </Button>
            ) : (
              <Button colorScheme="cyan" onClick={() => setButtonClicked(true)}>
                Arrive at destination
              </Button>
            )}
          </Box>
        </Hud>
      </GameLayout>
    </>
  );
}
