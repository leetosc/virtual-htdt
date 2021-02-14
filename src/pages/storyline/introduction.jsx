import React, { useState } from "react";
import Head from "next/head";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Typist from "react-typist";
import Link from "next/link";

export default function Introduction() {
  const [typingDone, setTypingDone] = useState(true);
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
          Knock Knock.
          <Typist.Delay ms={500} />
          <br />
          <br />
          An old Vietnamese man is at your door. &nbsp;&nbsp;
          <Typist.Delay ms={500} />
          You let him in.
          <Typist.Delay ms={1000} />
          <br />
          <br />
          "My name is Tiền. I'm your long-lost uncle. I was in charge of
          safeguarding our family treasure. It is worth millions of dollars!"
          <Typist.Delay ms={1000} />
          <br />
          <br />
          "My time has passed. I am entrusting the treasure to one of my nephews
          or nieces. The first person to find it gets to keep it!"&nbsp;&nbsp;
          <Typist.Delay ms={1000} />
          <br />
          "However, only the one who is familiar with our family history and
          culture will deserve to keep our Family Treasure!"
          <br />
          "Will it be you?"
          <Typist.Delay ms={1000} />
          <br />
          <br />
          "Good luck!"
        </Typist>
        {typingDone && (
          <Link href="/htdt/01-hvmcc">
            <Button
              colorScheme="cyan"
              textTransform="uppercase"
              size="lg"
              mt={4}
            >
              {typingDone
                ? `Go to first location`
                : `Skip and Go to first location`}
            </Button>
          </Link>
        )}
      </Box>
    </Box>
  );
}
