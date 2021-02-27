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

export default function StJoseph() {
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
                  ? "/hanoi-cathdral-inside.gif"
                  : "/hanoi-cathedral.gif"
              }
              maxW="unset"
              maxH="100%"
              h="100%"
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
              avgTypingDelay={15}
              onTypingDone={() => setTypingDone(true)}
            >
              St. Joseph’s Cathedral is one of the most famous landmarks of the
              colonial era in Hanoi. The neo-Gothic church was modeled after
              Paris’s Notre-Dame Cathedral and sits on the west side of Lake
              Hoan Kiem. The church dates from 1886, making it the oldest church
              in the capital city. After the Viet Minh took control of North
              Vietnam in 1954, following the Geneva Accords, Catholic leaders
              and institutions were repressed and St. Joseph’s was closed for
              decades. In 1990, services resumed, and now several masses take
              place each day, sometimes drawing more worshipers than can fit in
              the building.
            </Typist>
          </Box>
          <Box w="100%" pt={1}>
            <Text>Good timing! You arrive just in time for Mass!</Text>
            <Button my={2} colorScheme="cyan" onClick={onOpen}>
              Attend Mass
            </Button>
          </Box>
          <Box>
            {/* <Link href="/htdt/sample8">
              <a>Back to Cyclo</a>
            </Link> */}
          </Box>
        </Hud>
      </GameLayout>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New friends!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              During mass you see a bunch of people in TNTT uniforms so you go
              sit with them. After mass they invite you to sinh hoat with them.
            </Text>
            <Image src="/hanoi-tntt.jpg" maxH="100%" mt={2} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="cyan" mr={3} onClick={onClose}>
              Go
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
