import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Text, Button, Image } from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";

export default function SapaTour() {
  const router = useRouter();
  const [typingDone, setTypingDone] = useState(false);

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
            <Image src="/sapa/hiking1.jpg" maxW="unset" h="100%" maxH="100%" />
          </Box>
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            <Typist
              cursor={{ hideWhenDone: true, blink: true }}
              avgTypingDelay={5}
              onTypingDone={() => setTypingDone(true)}
            >
              &quot;Hi, I’m Binh. Welcome to Sa Pa, I’ll be your tour guide
              today. I hope you all had a peaceful time in your cabin sharing
              your experiences and comments with your group. Today, we’ll be
              going looking at different groups of people within Sa Pa, and how
              they live their own lives, as well as the different things that
              they worship and pray to, such as their ancestors, their gods, and
              most prominently, their family.&quot;
              <br />
              <br />
              &quot;Also keep in mind, some of the Hmong girls will hold your
              hands as we go hiking, so don’t mind them. But they’ll try to sell
              you their hand-crafted items when we’re done, so show your support
              to them if you want to.&quot;
            </Typist>
          </Box>
          <Box w="100%" pt={2}>
            <Text>
              &quot;So firstly, we’ll be seeing the Hmong people. They dress up
              very colorfully, and they participate in all sorts of events
              within themselves and other people. Let’s go say hi to them!&quot;
            </Text>
          </Box>
          <Box p={2}>
            {typingDone && (
              <>
                <Text my={2}></Text>
                <Button
                  colorScheme="cyan"
                  onClick={() => router.push("/htdt/18c2-hmong")}
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
