import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Button, Image } from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";

export default function TeacherDay1() {
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
            <Image
              src="/saigon/ttj_ngaynhagiao.png"
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
              Fruits, flowers, and clothes are just some of the many gifts which
              students offer to teachers on this day. Many alumni will also
              visit their past teachers to reminisce over some old memories.
              Ultimately, this celebration is not restricted to solely those who
              teach in classrooms, but it recognizes people who have helped
              build your moral education or aided in your development.
            </Typist>
          </Box>
          <Box w="100%" display="flex" pt={4}>
            Listen to your cousin&apos;s story
          </Box>
          <Box p={2}>
            {typingDone && (
              <>
                <Button
                  colorScheme="cyan"
                  onClick={() => router.push("/htdt/36-family")}
                >
                  Back to family
                </Button>
              </>
            )}
          </Box>
        </Hud>
      </GameLayout>
    </>
  );
}
