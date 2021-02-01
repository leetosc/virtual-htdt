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

export default function Sample6a() {
  const router = useRouter();
  const [typingDone, setTypingDone] = useState(true);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [puzzleInput1, setPuzzleInput1] = useState("");
  const [puzzleInput2, setPuzzleInput2] = useState("");

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
            <Image src="/planeboarding.jpeg" maxW="unset" maxH="100%" />
          </Box>
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            <Typist
              cursor={{ hideWhenDone: true, blink: true }}
              avgTypingDelay={20}
              onTypingDone={() => setTypingDone(true)}
            >
              As you are about to get on the plane, a man stops you and asks if
              you are looking for Uncle Tien. He demands demands two passwords
              before letting you on the plane.
            </Typist>
          </Box>
          <Box>
            <Text mb={1}>What are the passwords?</Text>
            <Input
              mb={2}
              backgroundColor="white"
              value={puzzleInput1}
              placeholder="From the Citadel"
              onChange={(e) => setPuzzleInput1(e.target.value)}
            />
            <Input
              backgroundColor="white"
              placeholder="From the Pagoda"
              value={puzzleInput2}
              onChange={(e) => setPuzzleInput2(e.target.value)}
            />
            <Button
              colorScheme="cyan"
              onClick={() => {}}
              isDisabled={
                puzzleInput1.toLowerCase() !== "hay yeu thuong" ||
                puzzleInput2.toLowerCase() !== "dan israel"
              }
            >
              Board Plane
            </Button>
          </Box>
          <Box>
            <Link href="/htdt/sample4">
              <a>Taxi</a>
            </Link>
          </Box>
        </Hud>
      </GameLayout>

      <Modal
        isOpen={isOpen}
        onClose={() => router.push("/htdt/sample1")}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Are you sure?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Uncle Tien left some clues where to go next. You should find them!
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="red"
              mr={3}
              onClick={() => router.push("/htdt/sample4")}
            >
              Leave
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
