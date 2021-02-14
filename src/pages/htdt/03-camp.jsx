import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { Box, Heading, Text, Button, Image, Input } from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import { MapInteractionCSS } from "react-map-interaction";
import { useAppState } from "@/context/state";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";

export default function Camp() {
  const [chiLoanClicked, setChiLoanClicked] = useState(false);
  const [puzzleInput, setPuzzleInput] = useState("");

  const [information, setInformation] = useState("");

  return (
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
          <MapInteractionCSS
            showControls
            defaultValue={{ scale: 0.8, translation: { x: -250, y: -150 } }}
          >
            <Image src="/sample1.jpg" maxW="unset" />

            <Box
              position="absolute"
              left="28.37%"
              top="23.08%"
              width="6.49%"
              height="35.68%"
              //   backgroundColor="green.500"
              onClick={(e) => {
                if (!e.defaultPrevented) {
                  setChiLoanClicked(true);
                  setInformation(`Chi Loan: I have a plane ticket that I don't need anymore.  I think I remember the flight number.  
                  It was the year Doan Don Bosco was founded.  
                  What a coincidence.`);
                }
              }}
              _hover={{
                cursor: "pointer",
                opacity: 0.15,
                backgroundColor: "gray.900",
              }}
              onTouchEnd={(e) => {
                if (!e.defaultPrevented) {
                  setChiLoanClicked(true);
                  setInformation(`Chi Loan: I have a plane ticket that I don't need anymore.  I think I remember the flight number.  
                  It was the year Doan Don Bosco was founded.  
                  What a coincidence.`);
                }
              }}
            ></Box>
            <Box
              position="absolute"
              left="41.5%"
              top="19.71%"
              width="12.6%"
              height="45.86%"
              //   backgroundColor="green.500"
              onClick={(e) => {
                if (!e.defaultPrevented) {
                  setInformation(
                    `Tr. Kevin: I saw an old man here earlier.  He said he had some important business in the capital city of Vietnam.  I wonder what that was all about.`
                  );
                }
              }}
              onTouchEnd={(e) => {
                if (!e.defaultPrevented) {
                  setInformation(
                    `Tr. Kevin: I saw an old man here earlier.  He said he had some important business in the capital city of Vietnam.  I wonder what that was all about.`
                  );
                }
              }}
              _hover={{
                cursor: "pointer",
                opacity: 0.15,
                backgroundColor: "gray.900",
              }}
            ></Box>
          </MapInteractionCSS>
        </Box>
      </Box>

      <Hud>
        <Box whiteSpace="pre-line">
          <Typist
            key={information}
            cursor={{ hideWhenDone: true, blink: true }}
            avgTypingDelay={15}
          >
            {information}
          </Typist>
        </Box>
        <Box>
          Talk to the HTs to find out where to go.
          {chiLoanClicked && (
            <Box mt={2}>
              What is the ticket number?
              <Input
                my={2}
                backgroundColor="white"
                value={puzzleInput}
                onChange={(e) => setPuzzleInput(e.target.value)}
              />
              <Link href="/htdt/04-map">
                <Button colorScheme="cyan" isDisabled={puzzleInput !== "1993"}>
                  Submit
                </Button>
              </Link>
            </Box>
          )}
        </Box>
        <Box></Box>
      </Hud>
    </GameLayout>
  );
}
