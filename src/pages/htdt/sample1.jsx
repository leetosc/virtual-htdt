import React, { useState } from "react";
import Head from "next/head";
import { Box, Heading, Text, Button, Image } from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import { MapInteractionCSS } from "react-map-interaction";

export default function Sample1() {
  const [testActions, setTestActions] = useState([]);
  const [testActions2, setTestActions2] = useState([]);
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

        <Box
          //   display="flex"
          //   justifyContent="center"
          h="100%"
          //   w="100%"
          position="relative"
          overflow="auto"
        >
          <MapInteractionCSS>
            <Image src="/sample1.jpg" useMap="#image-map" maxW="unset" />

            <Box
              position="absolute"
              left="28.37%"
              top="23.08%"
              width="6.49%"
              height="35.68%"
              backgroundColor="green.500"
              onClick={(e) => {
                console.log(
                  !e.defaultPrevented ? "dragged" : "chi loan clicked"
                );
                if (!e.defaultPrevented) {
                  const newtestactions = [...testActions2, "Hi"];
                  setTestActions2(newtestactions);
                }
              }}
              _hover={{ cursor: "pointer" }}
            >
              {testActions2.map((i, index) => (
                <Text key={index}>{i}</Text>
              ))}
            </Box>
            <Box
              position="absolute"
              left="41.5%"
              top="19.71%"
              width="12.6%"
              height="45.86%"
              backgroundColor="green.500"
              onClick={(e) => {
                console.log(e.defaultPrevented ? "dragged" : "kevin clicked");
                if (!e.defaultPrevented) {
                  const newtestactions = [...testActions, "Hi"];
                  setTestActions(newtestactions);
                }
              }}
              _hover={{ cursor: "pointer" }}
            >
              {testActions.map((i, index) => (
                <Text key={index}>{i}</Text>
              ))}
            </Box>
          </MapInteractionCSS>
        </Box>
      </Box>
    </GameLayout>
  );
}
