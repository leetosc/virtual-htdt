import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  Box,
  Text,
  Button,
  Image,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import { useAppState } from "@/context/state";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";
import ShowAnswerButton from "@/components/ShowAnswerButton/ShowAnswerButton";

export default function Mountaintop() {
  const router = useRouter();

  const [puzzleInput, setPuzzleInput] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

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
              src="/sapa/sapa-mountaintop.jpg"
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
            >
              You reach the mountaintop. It is a beautiful view. <br />
              <br />
            </Typist>
          </Box>
          <Box w="100%" pt={2}>
            <Text my={2}>&quot;Who are you looking for?&quot;</Text>
            <Input
              backgroundColor="white"
              value={puzzleInput}
              onChange={(e) => setPuzzleInput(e.target.value)}
            />
            <Button
              mt={2}
              colorScheme="cyan"
              onClick={() => {
                if (!puzzleInput.toLowerCase().includes("queen of sapa")) {
                  toast({
                    title: "Wrong",
                    description: `"Sorry, I don't know who that is. Let's go back down the mountain"`,
                    status: "warning",
                    duration: 10000,
                    isClosable: true,
                  });
                  router.push("/htdt/15-sapaclimb");
                } else {
                  onOpen();
                }
              }}
            >
              Submit
            </Button>
            {appState.SHOW_ANSWERS && (
              <ShowAnswerButton answer="queen of sapa" />
            )}
          </Box>
          <Box p={2}>
            <Button
              colorScheme="teal"
              mr={3}
              onClick={() => router.push("/htdt/15-sapaclimb")}
            >
              Go back down the mountain
            </Button>
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
          <ModalHeader>Guide</ModalHeader>
          <ModalCloseButton />
          <ModalBody overflow="auto" maxH="100%">
            <Image src="/sapa/guide.png" h={28} m={2} float="left" />
            <Text>
              Oh, the Queen of Sapa! I know her. I will take you to her.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="teal"
              mr={3}
              onClick={() => router.push("/htdt/17-queen")}
            >
              Go
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
