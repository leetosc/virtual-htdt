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

export default function Sample6() {
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
            <Image src="/hueAirport.jpg" maxW="unset" maxH="100%" h="100%" />
          </Box>
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            <Typist
              cursor={{ hideWhenDone: true, blink: true }}
              avgTypingDelay={20}
              onTypingDone={() => setTypingDone(true)}
            >
              You arrive at the airport. Hue is a beautiful city. Maybe you will
              visit again one day.
            </Typist>
          </Box>
          <Box>
            {typingDone && (
              <>
                <Text mb={1}>Where is your destination?</Text>
                <Stack>
                  <Button
                    colorScheme="cyan"
                    onClick={() => router.push("/htdt/sample6a")}
                  >
                    Ha Noi
                  </Button>
                  <Button colorScheme="cyan" onClick={onOpen}>
                    Nha Trang
                  </Button>
                  <Button colorScheme="cyan" onClick={onOpen}>
                    Ho Chi Minh City
                  </Button>
                </Stack>
              </>
            )}
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
