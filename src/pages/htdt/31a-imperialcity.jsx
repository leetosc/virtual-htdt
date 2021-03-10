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
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import { GiCook } from "react-icons/gi";
import { useAppState } from "@/context/state";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";

export default function ImperialCity() {
  const router = useRouter();
  const [, setTypingDone] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const stateContext = useAppState();
  const { appState } = stateContext;

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
            <Image src="/hue/hue-aodai.jpg" maxW="unset" h="100%" maxH="100%" />
          </Box>
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            <Typist
              cursor={{ hideWhenDone: true, blink: true }}
              avgTypingDelay={10}
              onTypingDone={() => setTypingDone(true)}
            >
              The Hue Imperial Citadel, or Hoàng Thành Huế, is famous as one of
              the seven UNESCO World Heritage Sites of Vietnam. It was a walled
              fortress as well and palace belonging to Hue ancient city, which
              was the capital city of the Nguyen Dynasty for about 140 years
              since 1805.
            </Typist>
          </Box>
          <Box w="100%" pt={1}>
            <Text my={2}>There is a woman who seems to recognize you.</Text>
            <Button
              colorScheme="cyan"
              mt={2}
              disabled={modalOpened}
              onClick={() => {
                setModalOpened(true);
                stateContext.setInventory([
                  ...appState.inventory,
                  "Shrimp Sauce",
                ]);
                onOpen();
              }}
            >
              Talk to the woman
            </Button>
          </Box>
          <Box p={2}>
            {modalOpened && (
              <Button
                colorScheme="cyan"
                onClick={() => router.push("/htdt/30-hue")}
              >
                Return to city
              </Button>
            )}
          </Box>
        </Hud>
      </GameLayout>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Mysterious Woman</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src="/hue/mysteriousWoman.png" h={28} m={2} float="left" />
            <Text>
              &quot;Hi there. Uncle Tiền told me to give this to you.&quot;
            </Text>
            <Text my={2}>
              <Icon as={GiCook} h={6} w={6} /> This shrimp sauce adds flavor to
              Bun Bo Hue.
            </Text>
            <Text my={4} fontSize="sm">
              She gives you a bottle of shrimp sauce.
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
