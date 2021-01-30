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

export default function Sample2() {
  const router = useRouter();
  const [typingDone, setTypingDone] = useState(true);

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
            <Image src="/sample2.jpg" maxW="unset" maxH="100%" />
          </Box>
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            <Typist
              cursor={{ hideWhenDone: true, blink: true }}
              avgTypingDelay={20}
              onTypingDone={() => setTypingDone(true)}
            >
              You arrive at the airport. You make it through security and check
              the ticket, but the destination is scratched out. You check the
              departures and see there are 4 flights to Vietnam today.
            </Typist>
          </Box>
          <Box>
            {typingDone && (
              <>
                <Text mb={1}>Where is your destination?</Text>
                <Stack>
                  <Button colorScheme="cyan" onClick={onOpen}>
                    Ha Noi
                  </Button>
                  <Button
                    colorScheme="cyan"
                    onClick={() => router.push("/htdt/sample3")}
                  >
                    Hue
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
            <Link href="/htdt/sample1">
              <a>Camp</a>
            </Link>
            <Text>Airport</Text>
          </Box>
        </Hud>
      </GameLayout>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Wrong</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            You present the ticket at the flight, but it does not scan. It is
            the wrong flight. Airport security kicks you out of the airport.
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="red"
              mr={3}
              onClick={() => router.push("/htdt/sample1")}
            >
              Leave
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
