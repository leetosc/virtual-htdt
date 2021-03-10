import React, { useState } from "react";
import Head from "next/head";
import { Box, Button, Icon } from "@chakra-ui/react";
import Typist from "react-typist";
import Link from "next/link";
import { GiCook } from "react-icons/gi";
import { useAppState } from "@/context/state";

export default function Introduction() {
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
          An old Vietnamese man shows up at your door. &nbsp;&nbsp;
          <Typist.Delay ms={500} />
          You let him in.
          <Typist.Delay ms={1000} />
          <br />
          <br />
          &quot;My name is Tiền. I&apos;m your long-lost uncle. I was in charge
          of safeguarding our family treasure. It is worth millions of
          dollars!&quot;
          <Typist.Delay ms={1000} />
          <br />
          <br />
          &quot;My time has passed. I am entrusting the treasure to one of my
          nephews or nieces. The first person to find it gets to keep
          it!&quot;&nbsp;&nbsp;
          <Typist.Delay ms={1000} />
          <br />
          &quot;However, only the one who is familiar with our family history
          and culture will deserve to keep our Family Treasure!&quot;
          <br />
          &quot;Will it be you?&quot;
          <Typist.Delay ms={1000} />
          <br />
          <br />
          &quot;Oh, and if you talk to anyone about food
          <Icon as={GiCook} h={6} w={6} />, pay attention. I think I will want
          something good to eat later.&quot;
          <br />
          <br />
          &quot;Good luck!&quot;
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
        {appState.SHOW_ANSWERS && (
          <Link href="/htdt/01-hvmcc">
            <Button
              colorScheme="red"
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
