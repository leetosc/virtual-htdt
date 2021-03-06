import React, { useState } from "react";
import Head from "next/head";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Typist from "react-typist";
import Link from "next/link";

export default function Finish() {
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
          avgTypingDelay={20}
          onTypingDone={() => setTypingDone(true)}
        >
          that is the end of the story for now
        </Typist>
        {/* {typingDone && (
          <Link href="/htdt/sample1">
            <Button
              colorScheme="cyan"
              textTransform="uppercase"
              size="lg"
              mt={4}
            >
              Go to first location
            </Button>
          </Link>
        )} */}
      </Box>
    </Box>
  );
}
