import React, { useState } from "react";
import Head from "next/head";
import { Box, Text, Button } from "@chakra-ui/react";
import Typist from "react-typist";
import Link from "next/link";
import { useAppState } from "@/context/state";

export default function SampleNoHud() {
  const [typingDone, setTypingDone] = useState(false);

  const { appState } = useAppState();
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
          This is a sample of a page with no HUD, used for things like storyline
          and interludes.
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
          <Text fontWeight="semibold" fontSize="2xl" mt={2}>
            One person on your team will be the <b>main</b> player.
            <br />
            The main player will share their screen in the team Discord channel.
            <br />
            When needed, the main player can share the URL of the page they are
            on to the rest of the team to help find clues or solve puzzles, but
            the main player should only navigate using the buttons on the page.
          </Text>
          <Text fontWeight="bold" my={4} fontSize="2xl">
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
        {appState.SHOW_ANSWERS && (
          <Link href="/storyline/introduction">
            <Button
              colorScheme="red"
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
