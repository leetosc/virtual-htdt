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
  useDisclosure,
} from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";

export default function SapaMorning() {
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
              src="/sapa/sapa-rice.jpg"
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
              The next morning, you find a note that someone slid under your
              door.
            </Typist>
            {typingDone && (
              <Button
                onClick={() => {
                  setModalOpened(true);
                  onOpen();
                }}
                colorScheme="cyan"
              >
                Read note
              </Button>
            )}
          </Box>
          <Box w="100%" pt={2}>
            <Text>You decide to stop by the market before leaving.</Text>
          </Box>
          <Box p={2}>
            {modalOpened && (
              <>
                <Text my={2}></Text>
                <Button
                  colorScheme="cyan"
                  onClick={() => router.push("/htdt/18d-market")}
                >
                  Continue
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
          <ModalHeader>Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody overflow="auto" maxH="100%">
            <Text>
              <Image src="/sapa/fansipan.png" h={48} mb={3} />I was going to
              leave some clues for you at the top of <b>Fansipan</b> mountain,
              but since it is the tallest mountain in Southeast Asia at 10,312
              feet, it might be a tough climb.
              <br />
              Instead, you should visit one of the floating villages in Ha Long
              Bay. I left something for you there.
            </Text>
            <Text textAlign="right">-Uncle Tiền</Text>
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
