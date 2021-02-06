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

export default function Sample9b() {
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
              src="/hanoi-pagoda.jpg"
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
              Rising from one pillar in the centre of an elegantly square shaped
              lotus pond, The One Pillar Pagoda is said to represent a lotus
              flower growing up out of the water.
              <br />
              <br />
              Built between the years of 1028 and1054 during the reign of
              Emperor Ly Thai Tong of the Ly Dynasty, the One Pillar Pagoda is
              one of Vietnam’s most iconic temples.
              <br />
              <br />
              The One Pillar Pagoda is specially designed to resemble a lotus
              blossom, one of the reasons why it was chosen as a symbol of
              Vietnam. Lotus is Vietnam’s national flower and has been seen as
              an emblem of purity, serenity since it rises above the muddy water
              and still maintains such exquisite beauty. Similarly, the pagoda
              is located on a muddy pond, rests on one single pillar, with four
              corners stretch out – a perfect demonstration of a giant lotus.
              The pillar is 1.25 m in diameter, supporting the whole pagoda
              above, which is used as a space for Buddha worshipping.
            </Typist>
          </Box>
          <Box w="100%" pt={1}>
            <Button my={2} colorScheme="cyan" onClick={onOpen}>
              Go inside
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
          <ModalHeader>Inside the pagoda</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="semibold">
              Chìa khóa: Tập hợp các Đội trưởng lại nghe lệnh.
            </Text>

            <Text mt={2}>
              Bản tin:
              <br />
              Đến gặp trai trưởng ở nhà
              <br />
              Nhà anh ở tận cuối làng
              <br />
              Thờ ông thờ bà kính tôn
              <br />
              Để cho anh ấy hướng dẫn
              <br />
              Dư cuộc họp mặt vui chơi
              <br />
              Lễ mừng kính bổn mạng anh
              <br />
            </Text>
            {/* solution: Đến nhà thờ để dự lễ. */}
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
