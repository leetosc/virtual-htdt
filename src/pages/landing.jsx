import React, { useState } from "react";
import Head from "next/head";
import { Box, Text, Button } from "@chakra-ui/react";
import Typist from "react-typist";
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
          avgTypingDelay={5}
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
          <Text fontWeight="semibold">
            One person on your team will be the <b>main</b> player. The main
            player can share the URL of the page they are on to the rest of the
            team to help find clues or solve puzzles, but should only navigate
            using the buttons on the page.
          </Text>
          <Text fontWeight="bold" my={2}>
            Main player: Do NOT refresh the page or go back and forth using the
            browser back/forward buttons. ONLY navigate using the buttons on the
            page.
          </Text>
          <br />
          <br />
          When everyone is ready, press Start to begin.
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
