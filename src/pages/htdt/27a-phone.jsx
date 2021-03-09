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
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";

export default function Phone() {
  const router = useRouter();
  const [typingDone, setTypingDone] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);

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
              src="/lavang/sleeperbus.jpg"
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
              You are almost to Hue when you get a text message from your mom.
            </Typist>
            {typingDone && (
              <Button
                mt={2}
                colorScheme="cyan"
                onClick={() => {
                  setModalOpened(true);
                  onOpen();
                }}
              >
                Open phone
              </Button>
            )}
          </Box>
          <Box w="100%" pt={2}></Box>
          <Box p={2}>
            {modalOpened && (
              <>
                <Text my={2}></Text>
                <Button
                  colorScheme="cyan"
                  onClick={() => router.push("/htdt/27b-map")}
                >
                  Tell bus driver to make a detour
                </Button>
              </>
            )}
          </Box>
        </Hud>
      </GameLayout>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={true}
        size="lg"
      >
        <ModalOverlay />
        <ModalContent background="none">
          <ModalBody overflow="auto" maxH="100%">
            <Box
              // w={{ base: "400px", sm: "469px" }}
              // h={{ base: "800px", sm: "942px" }}
              w="400px"
              h="800px"
              position="relative"
              backgroundImage="url(/lavang/phone.png)"
              backgroundRepeat="no-repeat"
              backgroundSize="contain"
              // backgroundSize={{ base: "contain", sm: "inherit" }}
            >
              <Image
                src="/lavang/texts.gif"
                // w={{ base: "342px", sm: "400px" }}
                // h={{ base: "607px", sm: "710px" }}
                w="342px"
                h="607px"
                position="absolute"
                // left={{ base: "30px", sm: "36px" }}
                // top={{ base: "100px", sm: "116px" }}
                left="30px"
                top="100px"
              />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
