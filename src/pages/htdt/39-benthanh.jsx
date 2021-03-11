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

export default function BenThanh() {
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
                  ? "/saigon/benthanh.jpg"
                  : "/saigon/benthanhinside.jpg"
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
              The next place your cousin takes you is the historic Ben Thanh
              Market (Chợ Bến Thành). The market is one of the earliest
              surviving structures in Saigon and an important symbol of the
              city.
              <br />
              <br />
              When night falls, restaurants around the perimeter of the market
              open their doors creating a vibrant street side scene filling the
              air with the scents of wok-fried noodles, barbecued fish and
              meats.
            </Typist>
          </Box>
          <Box w="100%" pt={1}>
            <Text textColor="gray.800" fontSize="sm" mb={3}>
              Click the image to see inside.
            </Text>
            {imageClicked && (
              <>
                <Text>
                  While you are here you decide to buy some more ingredients.
                </Text>
                <Button
                  my={2}
                  colorScheme="cyan"
                  disabled={modalOpened}
                  onClick={() => {
                    setModalOpened(true);
                    stateContext.setInventory([
                      ...appState.inventory,
                      "Noodles",
                      "Rice Flour",
                      "Bread",
                      "White Rice Flour",
                      "Rice Flour",
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
              <>
                <Text>
                  After hanging out in the city, your cousin takes you to your
                  uncle&apos;s house.{" "}
                </Text>
                <Button
                  colorScheme="cyan"
                  onClick={() => router.push("/htdt/40-unclehouse")}
                >
                  Go
                </Button>
              </>
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
              <Icon as={GiCook} h={6} w={6} /> Pho and Bun Bo Hue use different
              types of noodles.
            </Text>
            <Text my={2}>
              <Icon as={GiCook} h={6} w={6} /> You need two types of flour for
              Banh Xeo.
            </Text>
            <Text my={2}>
              <Icon as={GiCook} h={6} w={6} /> Rice flour is important in Banh
              Beo to mix with the starch.
            </Text>
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
