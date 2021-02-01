import React, { useState } from "react";
import Head from "next/head";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Typist from "react-typist";
import GameLayout from "@/components/Layouts/GameLayout";
import Hud from "@/components/Hud/Hud";
import Link from "next/link";

export default function Landing() {
  const [typingDone, setTypingDone] = useState(false);
  return (
    <Box
      w="100%"
      h="100vh"
      backgroundColor="gray.900"
      textColor="white"
      display="flex"
      pt={14}
    >
      <Head>
        <title>Virtual HTDT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box px={8} py={4} fontSize="xl">
        <Typist
          cursor={{ hideWhenDone: true, blink: true }}
          avgTypingDelay={25}
          onTypingDone={() => setTypingDone(true)}
        >
          Welcome to Virtual Camp 2021 Hanh Trinh Duc Tin!
          <Typist.Delay ms={500} />
          <br />
          <br />
          Are you ready to begin your journey?
          <br />
          <br />
          Get all team members into your team Discord channel.
          <br />
          <br />
          Note: This site is best viewed on a desktop.
          <br />
          <br />
          When everyone is ready, press Start to begin.
          <Typist.Delay ms={500} />
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
  );
}
