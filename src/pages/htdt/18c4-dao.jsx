import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Text, Button, Image } from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";

export default function Dao() {
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
            <Image src="/sapa/dao.jpg" maxW="unset" h="100%" maxH="100%" />
          </Box>
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            <Typist
              cursor={{ hideWhenDone: true, blink: true }}
              avgTypingDelay={5}
              onTypingDone={() => setTypingDone(true)}
            >
              &quot;Hi there, I’m Thuy. You probably don’t know much about our
              people, the Dao people, so I hope that I can help you understand
              more about our culture. We, along with the Hmong people, were
              rebels against the Ming Dynasty about 800 years ago, and we left
              China, and eventually came here.
              <br />
              <br />
              Our culture is a mix of a lot of different religions, but one
              thing that is near and dear to our heart is our ancestry and
              family line. Our earliest ancestor was a man named Ban Vuong, and
              we also pray to him for guidance.&quot;
            </Typist>
          </Box>
          <Box w="100%" pt={2}>
            Talk to the Dao people
          </Box>
          <Box p={2}>
            {typingDone && (
              <>
                <Text my={2}></Text>
                <Button
                  colorScheme="cyan"
                  onClick={() => router.push("/htdt/18c5-hiking3")}
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
