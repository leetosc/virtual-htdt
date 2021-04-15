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
              Find the message in the boat.
            </Typist>
          </Box>
          <Box w="100%" pt={1}>
            <Text mt={3} fontSize="lg">
            Người bảo các ông: “Các anh hãy theo tôi, tôi sẽ làm cho các anh thành những kẻ lưới <b>người</b> như lưới <b>cá</b>” (Mt 4, 19)
              
            </Text>
            <Text my={4}>
         {`<message>`}
            </Text>
          </Box>
          <Box p={2}>
            <Text>With the knowledge of the message, you take the boat out to the hidden island.</Text>
            <Button
              colorScheme="cyan"
              onClick={() => router.push("/htdt/24a-island")}
            >
              Continue
            </Button>
          </Box>
        </Hud>
      </GameLayout>
    </>
  );
}
