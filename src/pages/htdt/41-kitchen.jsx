import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  Box,
  Text,
  Button,
  Input,
  Select,
  FormLabel,
  SimpleGrid,
} from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import Hud from "@/components/Hud/Hud";
import axios from "axios";
import InventoryItem from "@/components/InventoryItem/InventoryItem";

export default function Kitchen() {
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
        >
          <Head>
            <title>Virtual HTDT</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Box
            h="100%"
            position="relative"
            justifyContent="space-between"
            overflow="auto"
            p={6}
            w="100%"
          >
            <Text mb={4} fontSize="xl" fontWeight="semibold" textColor="white">
              Select your team and name below. Each person open this page URL on
              your own device.
            </Text>
            <InventoryItem />
          </Box>
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            <Box>
              <FormLabel>Select your team</FormLabel>
            </Box>
          </Box>
          <Box w="100%" pt={2}>
            <Text fontWeight="semibold">Each Team Member:</Text>
            <Text>
              Take 15 minutes to think about your virtual camp experience with
              your teammates so far. For each teammate, write something that you
              have learned or appreciate about them.
            </Text>
          </Box>
          <Box p={2}>
            <>
              <Text my={2}></Text>
              <Button
                colorScheme="cyan"
                onClick={() => router.push("/htdt/18c-morning")}
              >
                Return to journey
              </Button>
            </>
          </Box>
        </Hud>
      </GameLayout>
    </>
  );
}
