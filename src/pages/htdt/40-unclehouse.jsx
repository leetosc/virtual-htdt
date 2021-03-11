import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Button, Image, Input, Text } from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";
import { useAppState } from "@/context/state";
import ShowAnswerButton from "@/components/ShowAnswerButton/ShowAnswerButton";

export default function UncleHouse() {
  const router = useRouter();
  const [typingDone, setTypingDone] = useState(false);
  const [puzzleInput, setPuzzleInput] = useState("");
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
            <Image
              src="/saigon/saigonhouses2.jpg"
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
              You arrive at your uncle&apos;s house. It looks like you need a
              password to get in.
            </Typist>
          </Box>
          <Box w="100%" display="flex" pt={2}>
            Find your uncle
          </Box>
          <Box p={2}>
            {typingDone && (
              <>
                <Text>Enter the password:</Text>
                <Input
                  my={2}
                  backgroundColor="white"
                  placeholder="Password"
                  value={puzzleInput}
                  onChange={(e) => setPuzzleInput(e.target.value)}
                />

                <Button
                  colorScheme="cyan"
                  isDisabled={puzzleInput.toLowerCase() !== "don bosco"}
                  onClick={() => router.push("/htdt/40a-inside")}
                >
                  Enter
                </Button>
                {appState.SHOW_ANSWERS && (
                  <ShowAnswerButton answer="don bosco" />
                )}
              </>
            )}
          </Box>
        </Hud>
      </GameLayout>
    </>
  );
}
