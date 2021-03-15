import React, { useState } from "react";
import Head from "next/head";
import { Box, Button } from "@chakra-ui/react";
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
          avgTypingDelay={5}
          onTypingDone={() => setTypingDone(true)}
        >
          You have reached the end of the journey. Although it would be very
          cliché to say something like &quot;Maybe the real treasure was the
          friends we made along the way&quot;, it is true in this case.
          <br />I hope that through this journey you had a chance to enjoy the
          company of your teammates and get to know each other better, as well
          as gain an appreciation for our homeland. I hope each of you has a
          chance to visit Vietnam someday (if you haven&apos;t already).
          <br />
          <br />
          We will now find out which team is the most deserving of the family
          treasure. Open the Twitch stream and stand by for the Kahoot code. I
          hope you took good notes!
          <br />
          <br />
          In the envelope marked &quot;Do not open until HTDT&quot; there is a
          small envelope. You can open it now, it is a small treasure for you! I
          hope you enjoyed the journey!
          <br />
          <br />
          -Tr. Denny
          <br />
        </Typist>
        {typingDone && (
          <Link href="/">
            <Button
              colorScheme="cyan"
              textTransform="uppercase"
              size="lg"
              mt={4}
            >
              Home
            </Button>
          </Link>
        )}
      </Box>
    </Box>
  );
}
