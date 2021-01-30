import Head from "next/head";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <Box
      w="100%"
      h="100vh"
      backgroundColor="gray.800"
      textColor="white"
      display="flex"
      alignItems="center"
    >
      <Head>
        <title>Virtual HTDT</title>
        <meta name="title" content="DB Virtual HTDT" />
        <meta
          name="description"
          content="Virtual Hành Trình Đức Tin for Đoàn Don Bosco Austin Virtual Camp 2021"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://virtualhtdt.ga" />
        <meta property="og:title" content="DB Virtual HTDT" />
        <meta
          property="og:description"
          content="Virtual Hành Trình Đức Tin for Đoàn Don Bosco Austin Virtual Camp 2021"
        />
        <meta property="og:image" content="https://virtualhtdt.ga/dblogo.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://virtualhtdt.ga/" />
        <meta property="twitter:title" content="DB Virtual HTDT" />
        <meta
          property="twitter:description"
          content="Virtual Hành Trình Đức Tin for Đoàn Don Bosco Austin Virtual Camp 2021"
        />
        <meta
          property="twitter:image"
          content="https://virtualhtdt.ga/dblogo.png"
        />

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
  );
}
