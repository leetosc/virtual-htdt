import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Button, Image } from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";

import Hud from "@/components/Hud/Hud";

export default function OnePillarPagoda() {
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
          alignItems="center"
          justifyContent="center"
        >
          <Head>
            <title>Virtual HTDT</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Box h="100%" position="relative" overflow="auto">
            <Image
              src="/hanoi/hanoi-pagoda.jpg"
              maxW="unset"
              maxH="100%"
              h="100%"
            />
          </Box>
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            Rising from one pillar in the centre of an elegantly square shaped
            lotus pond, The One Pillar Pagoda is said to represent a lotus
            flower growing up out of the water.
            <br />
            <br />
            Built between the years of 1028 and1054 during the reign of Emperor
            Ly Thai Tong of the Ly Dynasty, the One Pillar Pagoda is one of
            Vietnam’s most iconic temples.
            <br />
            <br />
            The One Pillar Pagoda is specially designed to resemble a lotus
            blossom, one of the reasons why it was chosen as a symbol of
            Vietnam. Lotus is Vietnam’s national flower and has been seen as an
            emblem of purity, serenity since it rises above the muddy water and
            still maintains such exquisite beauty. Similarly, the pagoda is
            located on a muddy pond, rests on one single pillar, with four
            corners stretch out – a perfect demonstration of a giant lotus. The
            pillar is 1.25 m in diameter, supporting the whole pagoda above,
            which is used as a space for Buddha worshipping.
          </Box>
          <Box w="100%" pt={1}>
            It doesn&apos;t look like your uncle left any clues here.
          </Box>
          <Box>
            <Button
              my={2}
              colorScheme="cyan"
              onClick={() => {
                router.push("/htdt/08-cyclo");
              }}
            >
              Return to cyclo
            </Button>
          </Box>
        </Hud>
      </GameLayout>
    </>
  );
}
