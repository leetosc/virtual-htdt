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
import { Carousel } from "react-responsive-carousel";

export default function Sample5c() {
  const router = useRouter();
  const [typingDone, setTypingDone] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const [puzzleInput, setPuzzleInput] = useState("");

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
            <Carousel showThumbs={false} infiniteLoop={true}>
              <Box maxH="100%">
                <Image src="/dongba1.webp" maxW="unset" maxH="100%" />
              </Box>
              <Box maxH="100%">
                <Image src="/dongba2.webp" maxW="unset" maxH="100%" />
              </Box>
              <Box maxH="100%">
                <Image src="/dongba3.webp" maxW="unset" maxH="100%" />
              </Box>
              <Box maxH="100%">
                <Image src="/dongba4.webp" maxW="unset" maxH="100%" />
              </Box>
              <Box maxH="100%">
                <Image src="/dongba5.jpg" maxW="unset" maxH="100%" />
              </Box>
            </Carousel>
          </Box>
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            <Typist
              cursor={{ hideWhenDone: true, blink: true }}
              avgTypingDelay={18}
              onTypingDone={() => setTypingDone(true)}
            >
              Hue‘s Dong Ba market (Cho Dong Ba)–like so many of the markets
              around the world in places people rely on markets for their
              day-to-day food and merchandise needs–is a bustling, crowded
              affair with things for sale crammed into every available space.
            </Typist>
          </Box>
          <Box w="100%">
            <Box>
              One USD is equal to 23,000 dong (VND). You see a delicious mango
              listed for 11,500 VND, and after some haggling she agrees to sell
              it to you for half the price. How much did you pay her?
              <Input
                my={2}
                backgroundColor="white"
                value={puzzleInput}
                placeholder="Price in USD"
                onChange={(e) => setPuzzleInput(e.target.value)}
              />
              <Button
                colorScheme="cyan"
                isDisabled={Number(puzzleInput) !== 0.25}
                onClick={onOpen}
              >
                Submit
              </Button>
            </Box>
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
          <ModalHeader>Market rules</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Before leaving the market, you see a sign on the wall.</Text>
            <br />
            <Text size="lg" textTransform="uppercase">
              To be deserving of the family treasure, you must know the favorite
              fruit of all team members.
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
