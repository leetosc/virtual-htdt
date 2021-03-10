import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Text, Button, Image, Input, useToast } from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import { useAppState } from "@/context/state";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";
import ShowAnswerButton from "@/components/ShowAnswerButton/ShowAnswerButton";

export default function Queen() {
  const router = useRouter();

  const [puzzleInput, setPuzzleInput] = useState("");
  const [puzzleCorrect, setPuzzleCorrect] = useState(false);
  const toast = useToast();

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
            <Image src="/sapa/queen.jpeg" maxW="unset" h="100%" maxH="100%" />
          </Box>
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            <Typist
              cursor={{ hideWhenDone: true, blink: true }}
              avgTypingDelay={5}
            >
              &quot;They call me the Queen of Sapa. I&apos;m not actually a
              queen, I&apos;m just in charge of this village here. Uncle Tiền
              liked to come to my village to get away from the hustle and bustle
              of city life. Before I tell you any more, I need the code
              word.&quot; <br />
              <br />
            </Typist>
          </Box>
          <Box w="100%" pt={2}>
            <Text my={2}>What is the code word?</Text>
            <Input
              backgroundColor="white"
              value={puzzleInput}
              placeholder="Code word"
              onChange={(e) => setPuzzleInput(e.target.value)}
            />
            <Button
              mt={2}
              colorScheme="cyan"
              onClick={() => {
                if (!puzzleInput.toLowerCase() === "ascent") {
                  toast({
                    title: "Wrong",
                    description: `"Sorry, you will have to leave."`,
                    status: "warning",
                    duration: 10000,
                    isClosable: true,
                  });
                  router.push("/htdt/15-sapaclimb");
                } else {
                  setPuzzleCorrect(true);
                }
              }}
            >
              Submit
            </Button>
            {appState.SHOW_ANSWERS && <ShowAnswerButton answer="ascent" />}
          </Box>
          <Box p={2}>
            {puzzleCorrect && (
              <>
                <Text my={2}>
                  &quot;Great. I will take you to my village.&quot;
                </Text>
                <Button
                  colorScheme="cyan"
                  onClick={() => router.push("/htdt/17b-peoples")}
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
