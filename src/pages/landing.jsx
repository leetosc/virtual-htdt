import React, { useState } from "react";
import Head from "next/head";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Typist from "react-typist";
import GameLayout from "@/components/Layouts/GameLayout";
import Link from "next/link";

export default function Landing() {
  const [typingDone, setTypingDone] = useState(false);
  return (
    <GameLayout>
      <Box
        w="100%"
        h="100%"
        backgroundColor="gray.900"
        textColor="white"
        display="flex"
      >
        <Head>
          <title>Virtual HTDT</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Box px={8} py={4} fontSize="xl">
          <Typist
            cursor={{ hideWhenDone: true, blink: true }}
            avgTypingDelay={40}
            onTypingDone={() => setTypingDone(true)}
          >
            Welcome to Virtual Camp 2021 Hanh Trinh Duc Tin!
            <Typist.Delay ms={500} />
            <br />
            <br />
            Are you ready to begin your journey?
            <Typist.Delay ms={1000} />
            <br />
            <br />
            Do you have everything you need?
            <Typist.Delay ms={1000} />
            <br />
            <br />
            Press Start to begin.
            <Typist.Delay ms={1000} />
          </Typist>
          {typingDone && (
            <Link href="/storyline/introduction">
              <Button
                colorScheme="cyan"
                textTransform="uppercase"
                size="lg"
                mt={4}
              >
                Start
              </Button>
            </Link>
          )}
        </Box>
      </Box>
    </GameLayout>
  );
}
