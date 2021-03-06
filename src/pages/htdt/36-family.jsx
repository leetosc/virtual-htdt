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
import YouTube from "react-youtube";
import Typing from "react-typing-animation";
import ReactPlayer from "react-player";

export default function SaigonFamily() {
  const router = useRouter();
  const [typingDone, setTypingDone] = useState(false);
  const [puzzleInput, setPuzzleInput] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalOpened, setModalOpened] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  const { appState } = useAppState();

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
              src="/saigon/quanpho.jpg"
              maxW="unset"
              h="100%"
              maxH="100%"
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
              You family is happy to see you and take you out to get some
              delicious local pho. They ask you about life in America, and you
              ask them about life in Vietnam and about some of the holidays and
              festivals that they like to celebrate.
            </Typist>
          </Box>
          <Box w="100%" pt={1}>
            <Stack>
              <Text>
                Your cousins each have a favorite festival. Click to learn more.
              </Text>
              <Button
                colorScheme="cyan"
                isDisabled={appState.locationsVisited.includes(
                  "/htdt/37a-teacherday1"
                )}
                onClick={() => router.push("/htdt/37a-teacherday1")}
              >
                Ngày Nhà Giáo
              </Button>
              <Button
                colorScheme="cyan"
                isDisabled={appState.locationsVisited.includes(
                  "/htdt/37c-trungthu1"
                )}
                onClick={() => router.push("/htdt/37c-trungthu1")}
              >
                Tết Trung Thu
              </Button>
              <Button
                colorScheme="cyan"
                isDisabled={appState.locationsVisited.includes(
                  "/htdt/37e-tet1"
                )}
                onClick={() => router.push("/htdt/37e-tet1")}
              >
                Tết Nguyên Đán
              </Button>
            </Stack>
            {appState.SHOW_ANSWERS && (
              <Button
                mt={2}
                colorScheme="red"
                onClick={() => router.push("/storyline/finish")}
              >
                Continue
              </Button>
            )}
          </Box>
          <Box p={2}>
            {appState.locationsVisited.includes("/htdt/37a-teacherday1") &&
              appState.locationsVisited.includes("/htdt/37c-trungthu1") &&
              appState.locationsVisited.includes("/htdt/37e-tet1") && (
                <>
                  <Text>
                    After telling you about their favorite festivals, your
                    cousins want to take you around the city.
                  </Text>
                  <Button
                    mt={2}
                    colorScheme="cyan"
                    onClick={() => router.push("/storyline/finish")}
                  >
                    Go
                  </Button>
                </>
              )}
          </Box>
        </Hud>
      </GameLayout>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
        size="lg"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Man in the shadows</ModalHeader>
          <ModalCloseButton />
          <ModalBody overflow="auto" maxH="100%">
            <Image src="/halong/halongphi2.png" h={96} m={2} float="left" />

            <Text>"What are you doing here?"</Text>
            <Text mt={6}>
              "Oh, you're looking for Uncle Tien? He spent some time at one of
              the floating villages. I can take you there."
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
