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

export default function Sample5b() {
  const router = useRouter();
  const [typingDone, setTypingDone] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);

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
            <Image src="/thienMuPagoda.jpg" maxW="unset" maxH="100%" />
          </Box>
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            <Typist
              cursor={{ hideWhenDone: true, blink: true }}
              avgTypingDelay={18}
              onTypingDone={() => setTypingDone(true)}
            >
              The name of the pagoda derives from a special legend. Long time
              ago, an old woman appeared on the hill where the pagoda stands
              today, telling local people that a Lord would come and build a
              Buddhist pagoda for the country’s prosperity. Lord Nguyen Hoang
              therefore ordered the construction of the pagoda the “Heaven Fairy
              Lady” or Thiên Mụ in Vietnamese (also called Linh Mụ). Thanks to
              such a mysterious history, the pagoda has attracted a great number
              of tourists from both inside and outside of the nation to come and
              explore the legend themselves.
            </Typist>
          </Box>
          <Box w="100%" display="flex" pt={4}>
            <Button
              colorScheme="teal"
              mt={2}
              onClick={() => {
                setModalOpened(true);
                onOpen();
              }}
            >
              Look inside the pagoda
            </Button>
          </Box>
          <Box>
            <Link href="/htdt/sample4">
              <a>Taxi</a>
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
