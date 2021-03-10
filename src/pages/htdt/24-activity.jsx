import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Text, Button, Image } from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";

import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";

export default function HaLongActivity() {
  const router = useRouter();

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
              src="/halong/fruitboat.jpg"
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
            >
              Follow the instructions to build the boat.
            </Typist>
          </Box>
          <Box w="100%" pt={1}>
            <Text mt={3} fontSize="sm">
              Open your Care Package and find the envelope marked &quot;Do not
              open until HTDT&quot;. Open it now.
            </Text>
            <Text my={4}>
              One person on your team will be the instruction-giver. Each other
              team member will try to follow the instructions as best they can
              to build the boat.
            </Text>
            <Text>
              Instruction-giver cannot use their hands and can only give verbal
              instructions.
            </Text>
          </Box>
          <Box p={2}>
            <Button
              colorScheme="cyan"
              onClick={() => router.push("/htdt/24a-island")}
            >
              Boat successfully built
            </Button>
          </Box>
        </Hud>
      </GameLayout>
    </>
  );
}
