import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  Box,
  Text,
  Image,
  Input,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";

import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";
import { useAppState } from "@/context/state";
import ShowAnswerButton from "@/components/ShowAnswerButton/ShowAnswerButton";
import CooldownButton from "@/components/CooldownButton/CooldownButton";

export default function Map() {
  const router = useRouter();
  const [typingDone, setTypingDone] = useState(false);
  const [puzzleInput, setPuzzleInput] = useState("");
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
            <Image
              src="/begin/planewindow.jpg"
              maxW="unset"
              h="100%"
              maxH="100%"
            />
            <Box
              backgroundColor="white"
              color="black"
              w="100%"
              position="absolute"
              top="0"
              left="0"
              opacity={0.9}
              p={4}
              mt={6}
            >
              <Text fontWeight="semibold">
                States are abbreviated by two letters. Both are important, but
                if we can&apos;t decide, let&apos;s just alternate the letters
                starting with the first.
              </Text>
              <OrderedList>
                <ListItem>
                  State with best TNTT doan in USA and the only state to be an
                  independent nation for a period of time.
                  <ListItem>
                    Known as Hoosier State, also the birth place of the
                    &quot;King of Pop&quot;
                  </ListItem>
                </ListItem>
                <ListItem>
                  Earned it&apos;s nickname &quot;Volunteer State&quot; during
                  the War of 1812. It is also home to the largest underground
                  lake in USA.
                </ListItem>
                <ListItem>
                  Home of Glacier National Park, this state has the grizzly bear
                  as it&apos;s state animal
                </ListItem>
                <br />
                <ListItem>
                  The Sunshine State, the only place where you can find
                  crocodiles and alligators together in the wild
                </ListItem>
                <ListItem>
                  Home of many first including; first public park, first subway
                  system, and first police force in USA.
                </ListItem>
                <ListItem>
                  Nick name of &quot;Land of 10,000 Lakes&quot;, and has the
                  largest network of skyways due it&apos;s winters
                </ListItem>
                <ListItem>
                  Known as Auto state, it is the home of GM, Chysler, and Ford.
                  It is also the only state made of 2 penisulas.
                </ListItem>
                <ListItem>
                  Filled with French Influence, this state bears it&apos;s name
                  from the major land purchase from the French in 1803.
                </ListItem>
                <ListItem>
                  Home of the oldest derby that bears it&apos;s name, this is
                  also where Post It Notes are made.
                </ListItem>
              </OrderedList>
            </Box>
          </Box>
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            <Typist
              cursor={{ hideWhenDone: true, blink: true }}
              avgTypingDelay={5}
              onTypingDone={() => setTypingDone(true)}
            >
              You are leaving the country. Let&apos;s take a few minutes to
              reflect on what we know about the USA before we get to Vietnam.
            </Typist>
          </Box>
          <Box w="100%" pt={2}>
            Solve the Mat Thu
          </Box>
          <Box p={2}>
            {typingDone && (
              <>
                <Input
                  my={2}
                  backgroundColor="white"
                  placeholder="Answer"
                  value={puzzleInput}
                  onChange={(e) => setPuzzleInput(e.target.value)}
                />

                <CooldownButton
                  colorScheme="cyan"
                  validate={
                    puzzleInput.toLowerCase().replace(/\s/g, "") ===
                    "tnttfamily"
                  }
                  clickAction={() => router.push("/htdt/07-map")}
                >
                  Submit
                </CooldownButton>
              </>
            )}
            {appState.SHOW_ANSWERS && <ShowAnswerButton answer="tntt family" />}
          </Box>
        </Hud>
      </GameLayout>
    </>
  );
}
