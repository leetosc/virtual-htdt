import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Text, Button, Image } from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";
import { useAppState } from "@/context/state";

export default function Giay() {
  const router = useRouter();
  const [typingDone, setTypingDone] = useState(false);
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
            <Image src="/sapa/giay.jpg" maxW="unset" h="100%" maxH="100%" />
          </Box>
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            <Typist
              cursor={{ hideWhenDone: true, blink: true }}
              avgTypingDelay={5}
              onTypingDone={() => setTypingDone(true)}
            >
              &quot;Hi I’m Thao. I am part of the Giay people, one of the more
              prominent minority groups within Sa Pa. Welcome to our traditional
              wedding, something that has been passed down from generation to
              generation. We’re happy that you can be here with us today, and
              allow us to be the last part of your hike in Sa Pa.&quot;
              <br />
              <br />
              *Your group watches the Giay Wedding, and talk to the people
              afterwards.
              <br />
              <br />
              &quot;A little bit about us, you may have talked to other minority
              groups within Sa Pa, so you must know that we worship the same
              concepts as they do, though in much more key different aspects.
              Firstly, we worship the God of Kitchen, Heaven and Earth, which is
              very similar to the Tay people, as well as the Hmong people,
              though we worship different gods of different things. However,
              like the other minority groups, family is extremely important to
              us, and our ancestors and their teachings are something that we
              hold near and dear to our hearts. We hope that those teachings, at
              least, resonate with tourists, to always keep family first, as
              they will always be there for you.&quot;
            </Typist>
          </Box>
          <Box w="100%" pt={2}>
            Talk to the Giay people
          </Box>
          <Box p={2}>
            {typingDone && (
              <>
                <Text my={2}>
                  That concludes the tour of Sa Pa. You decide to stop by the
                  market before leaving.
                </Text>
                <Button
                  colorScheme="cyan"
                  onClick={() => router.push("/htdt/18d-market")}
                >
                  Continue
                </Button>
              </>
            )}
            {appState.SHOW_ANSWERS && (
              <Button
                colorScheme="red"
                onClick={() => router.push("/htdt/18d-market")}
              >
                Continue
              </Button>
            )}
          </Box>
        </Hud>
      </GameLayout>
    </>
  );
}
