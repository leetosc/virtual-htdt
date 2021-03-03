import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Text, Button, Image, Input } from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";

import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";

export default function Map() {
  const router = useRouter();
  const [typingDone, setTypingDone] = useState(false);
  const [puzzleInput, setPuzzleInput] = useState("");

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
            <Image src="/abiaToHanoi.png" maxW="unset" h="100%" maxH="100%" />
          </Box>
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            <Typist
              cursor={{ hideWhenDone: true, blink: true }}
              avgTypingDelay={5}
              onTypingDone={() => setTypingDone(true)}
            >
              After a long trip you arrive in Hanoi. You see a group of cyclo
              drivers and approach them. What was your contact's name?
            </Typist>
          </Box>
          <Box w="100%" display="flex" pt={4}></Box>
          <Box p={2}>
            {typingDone && (
              <>
                Contact's name
                <Text textColor="red.500" fontWeight="semibold">
                  ANSWER: "nghia"
                </Text>
                <Input
                  my={2}
                  backgroundColor="white"
                  value={puzzleInput}
                  onChange={(e) => setPuzzleInput(e.target.value)}
                />
                <Button
                  isDisabled={puzzleInput.toLowerCase() !== "nghia"}
                  colorScheme="cyan"
                  onClick={() => router.push("/htdt/08-cyclo")}
                >
                  Submit
                </Button>
              </>
            )}
          </Box>
        </Hud>
      </GameLayout>
    </>
  );
}
