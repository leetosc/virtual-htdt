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
  Icon,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import { MapInteractionCSS } from "react-map-interaction";
import { useAppState } from "@/context/state";
import { GiCook } from "react-icons/gi";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";
import YouTube from "react-youtube";

export default function ThienMu() {
  const router = useRouter();
  const [typingDone, setTypingDone] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const stateContext = useAppState();
  const { appState } = stateContext;

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
              src="/hue/hue-thienmu2.jpg"
              maxW="unset"
              maxH="100%"
              h="100%"
            />
          </Box>
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            <Typist
              cursor={{ hideWhenDone: true, blink: true }}
              avgTypingDelay={10}
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
              colorScheme="cyan"
              mt={2}
              onClick={() => {
                setModalOpened(true);
                stateContext.setInventory([
                  ...appState.inventory,
                  "Coriander Seeds",
                  "Star Anise",
                  "Fennel Seeds",
                  "Cinnamon",
                  "Peppercorn",
                ]);
                onOpen();
              }}
            >
              Look inside the pagoda
            </Button>
          </Box>
          <Box p={2}>
            {modalOpened && (
              <>
                <Text>You put the ingredients in your backpack.</Text>
                <Button
                  colorScheme="cyan"
                  mt={2}
                  onClick={() => router.push("/htdt/30-hue")}
                >
                  Return to city
                </Button>
              </>
            )}
          </Box>
        </Hud>
      </GameLayout>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Hidden note</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb={3}>
              You go inside the pagoda and find a piece of paper hidden in a
              crack in the wall along with a bag of spices.
            </Text>
            <Text my={2}>
              "These special ingriedients are for you: Coriander Seeds, Star
              Anise, Fennel Seeds, Cinnamon, and Peppercorn."
            </Text>
            <Text my={2}>
              <Icon as={GiCook} h={6} w={6} /> These spices are needed to make
              the flavor of Pho.
            </Text>
            <Text textAlign="right">-Uncle Tien</Text>
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
