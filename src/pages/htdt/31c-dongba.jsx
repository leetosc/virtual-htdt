import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  Box,
  Text,
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import Hud from "@/components/Hud/Hud";
import { GiCook } from "react-icons/gi";
import Typist from "react-typist";
import { useAppState } from "@/context/state";

export default function DongBa() {
  const router = useRouter();
  const [, setTypingDone] = useState(false);
  const [imageClicked, setImageClicked] = useState(false);
  const [clickCounter, setClickCounter] = useState(0);
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
              src={
                clickCounter % 2 === 0
                  ? "/hue/dongba1.webp"
                  : "/hue/dongbainside.jpg"
              }
              maxW="unset"
              maxH="100%"
              h="100%"
              onClick={() => {
                setClickCounter(clickCounter + 1);
                setImageClicked(true);
              }}
              _hover={{ cursor: "pointer" }}
            />
          </Box>
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            <Typist
              cursor={{ hideWhenDone: true, blink: true }}
              avgTypingDelay={5}
              onTypingDone={() => setTypingDone(true)}
            >
              Hue‘s Dong Ba market (Cho Dong Ba)–like so many of the markets
              around the world in places people rely on markets for their
              day-to-day food and merchandise needs–is a bustling, crowded
              affair with things for sale crammed into every available space.
            </Typist>
          </Box>
          <Box w="100%" pt={1}>
            <Text textColor="gray.800" fontSize="sm" mb={3}>
              Click the image to see inside.
            </Text>
            {imageClicked && (
              <>
                <Text>
                  This looks like a good place to buy some more food ingredients
                  that you might need.
                </Text>
                <Button
                  my={2}
                  colorScheme="cyan"
                  disabled={modalOpened}
                  onClick={() => {
                    setModalOpened(true);
                    stateContext.setInventory([
                      ...appState.inventory,
                      "Coconut Milk",
                      "Corn Starch",
                      "Tapioca Starch",
                      "Mayonnaise",
                    ]);
                    onOpen();
                  }}
                >
                  Buy food
                </Button>
              </>
            )}
          </Box>
          <Box p={2}>
            {modalOpened && (
              <Button
                colorScheme="cyan"
                onClick={() => router.push("/htdt/30-hue")}
              >
                Return to city
              </Button>
            )}
          </Box>
        </Hud>
      </GameLayout>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Shopkeeper</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text my={2}>
              <Icon as={GiCook} h={6} w={6} /> This corn starch and tapioca
              starch will be good for banh beo.
            </Text>
            <Text my={2}>
              <Icon as={GiCook} h={6} w={6} /> Coconut milk will be good for
              banh xeo.
            </Text>
            <Text my={2}>
              <Icon as={GiCook} h={6} w={6} /> Take this mayonnaise too, you can
              use it for banh mi.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="cyan"
              mr={3}
              onClick={() => {
                router.push("/htdt/12a-dongxuanmeat");
              }}
            >
              Go inside
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
