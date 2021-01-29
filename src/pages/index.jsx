import Head from "next/head";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import GameLayout from "@/components/Layouts/GameLayout";

export default function Home() {
  return (
    <GameLayout>
      <Box
        w="100%"
        h="100%"
        backgroundColor="gray.800"
        textColor="white"
        display="flex"
        alignItems="center"
      >
        <Head>
          <title>Virtual HTDT</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Box mx="auto" textAlign="center">
          <Heading mb={4}>Welcome to Virtual Camp 2021 HTDT!</Heading>
          <Link href="/landing">
            <Button colorScheme="cyan" textTransform="uppercase" size="lg">
              Start
            </Button>
          </Link>
        </Box>
      </Box>
    </GameLayout>
  );
}
