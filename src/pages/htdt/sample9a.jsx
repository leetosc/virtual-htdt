import React, { useState, useEffect, useRef } from "react";
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
import { AiFillSound } from "react-icons/ai";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";
import sound1 from "../../../public/hanoi-onetakenonestay.mp3";
import useSound from "use-sound";
import YouTube from "react-youtube";

export default function Sample9a() {
  const router = useRouter();
  const [typingDone, setTypingDone] = useState(false);
  const [imageClicked, setImageClicked] = useState(false);
  const [clickCounter, setClickCounter] = useState(1);

  const [playKey] = useSound(sound1);
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
              src={
                clickCounter % 2 === 0
                  ? "/hanoi-hoankiem2.jpg"
                  : "/hanoi-hoankiem.jpg"
              }
              maxW="unset"
              maxH="100%"
              onClick={() => {
                setClickCounter(clickCounter + 1);
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
              The Legend of the lake:
              <br />
              On the Chu River in Thanh Hóa Province lived a fisherman named Lê
              Thận. One night, Thận hauled up his fishing net. It felt heavy and
              Thận was filled with joy thinking he was going to have a big
              catch. Pulling the net to the boat side, though, Thận saw the
              “catch” to be nothing but an iron bar resembling a blunt knife
              without a handle. “Ah me,” Thận sighed, “the only catch for the
              whole night and it turns out to be this worthless piece of iron.”
              Thận threw it away.the iron bar appeared to Thận in the following
              nights too and on the third evening, he picked it up and realized
              it was the blade of a sword.
              <br />
              <br />
              It was the early 1400s and the Ming Chinese had taken over this
              part of Vietnam. To help with the rebellion, Thận joined the
              insurgent army led by Lê Lợi, who then found a shining sword hilt
              that matched the blade perfectly. With this sword, Lê Lợi emerged
              victorious and eventually became king. One day, while boating at
              the lake in the center of his capital, a giant tortoise swam
              towards him and bowed.
              <br />
              <br />
              “Now that peace has been restored to the nation,” it said, “please
              return the sword to our God of Waters. Lê Lợi surrendered the
              sword but its radiance remained on the surface of the water. Since
              then, it was called Restored Sword Lake or, in Vietnamese, Hồ Hoàn
              Kiếm.
            </Typist>
          </Box>
          <Box w="100%" pt={1}>
            <Text>
              You find a small capsule floating on the water. You pick it up and
              find a piece of paper inside.
            </Text>
            <Button my={2} colorScheme="cyan" onClick={onOpen}>
              Open the capsule
            </Button>
          </Box>
          <Box>
            <Link href="/htdt/sample8">
              <a>Back to Cyclo</a>
            </Link>
          </Box>
        </Hud>
      </GameLayout>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Floating capsule</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="semibold">Chìa khoá : A1 = a ; E5 = y</Text>

            <Text mt={2}>
              A4 – A4 – A1 – E4 - / A4 – A4 – A5 – A5 – C4 – D4 - / C4 – C5 – E3
              – B4 / D3 – C5 – C5 – B4 – B1 /AR
            </Text>
            {/* solution: Đã đến nơi rồi. */}
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
