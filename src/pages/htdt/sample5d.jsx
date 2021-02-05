import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Box,
  Heading,
  Text,
  Button,
  Image,
  Input,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import { MapInteractionCSS } from "react-map-interaction";
import { useAppState } from "@/context/state";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";
import YouTube from "react-youtube";

export default function Sample5d() {
  const router = useRouter();
  const [typingDone, setTypingDone] = useState(false);
  const [bowlClicked, setBowlClicked] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

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
              src={bowlClicked ? "/emptybowlmsg.png" : "/bbh.jpg"}
              maxW="unset"
              maxH="100%"
              onClick={() => setBowlClicked(true)}
              _hover={{ cursor: "pointer" }}
            />
          </Box>
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            <Typist
              cursor={{ hideWhenDone: true, blink: true }}
              avgTypingDelay={15}
              onTypingDone={() => setTypingDone(true)}
            >
              You sit down for a bowl of Bun Bo Hue. This shop owner says that a
              mysterious man was here earlier and then proceeds to tell you
              about his food.
              <br />
              <br />
              Bun Bo Hue (Hue beef noodle soup) was originally a dish in the old
              Hue royal court. Now, it has become a rustic dish of the people in
              the ancient capital. As time goes by, the ingredients and recipe
              of Bun Bo Hue changes. Still, the dish converges the quintessence
              of Hue cuisine: sophisticated, meticulous, unique.
            </Typist>
          </Box>
          <Box w="100%" display="flex" pt={4}>
            Eat the yummy bun
          </Box>
          <Box>
            <Link href="/htdt/sample4">
              <a>Back to Taxi</a>
            </Link>
          </Box>
        </Hud>
      </GameLayout>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Hidden paper message</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              You go inside the pagoda and find a piece of paper hidden in a
              crack in the wall{" "}
            </Text>
            <br />
            <Text>
              Key: Ê-li con Mát-lát, Mát-lát con Lê-vi, Lê-vi con Man-ki, Man-ki
              con Gian-nai, Gian-nai con Giô-xếp. Giô-xếp con Mát-tít-gia,
              Mát-tít-gia con A-mốt, A-mốt con Na-khum, Na-khum con Khét-li,
              Khét-li con Nác-gai. Nác-gai con Ma-khát, Ma-khát con Mát-tít-gia,
              Mát-tít-gia con Sim-y, Sim-y con Giô-xếch, Giô-xếch con Giô-đa.
              Giô-đa con Giô-kha-nan, Giô-kha-nan con Rê-sa, Rê-sa con
              Dơ-rúp-ba-ven, Dơ-rúp-ba-ven con San-ti-ên. San-ti-ên con Nê-ri,
              Nê-ri con Man-ki, Man-ki con Át-đi, Át-đi con Cô-xam, Cô-xam con
              En-mơ-đam, En-mơ-đam con E (Lc 3, 24-28)
              <br />
              <br />
              Bản tin: Man-ki, Ê-li, Sim-y - Na-khum, Dơ-rúp-ba-ven, Rê-sa,
              Ê-li, Gian-nai, Ma-khát. /AR
            </Text>
            {/* solution: DAN ISRAEL */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
