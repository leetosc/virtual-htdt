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

export default function DongXuan() {
  const router = useRouter();
  const [, setTypingDone] = useState(false);
  const [imageClicked, setImageClicked] = useState(false);
  const [clickCounter, setClickCounter] = useState(1);

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
                  ? "/hanoi/Hanoi-dongxuan1.jpg"
                  : "/hanoi/Hanoi-dongxuan2.gif"
              }
              maxW="unset"
              maxH="100%"
              h="100%"
              onClick={() => {
                setClickCounter(clickCounter + 1);
                setImageClicked(true);
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
              Đồng Xuân Market is a market in the center district Hoàn Kiếm of
              Hanoi, Vietnam. Originally built by the French administration in
              1889, Đồng Xuân Market has been renovated several times with the
              latest in 1994 after a fire which almost destroyed the market.
              Nowadays, Đồng Xuân Market is the largest covered market of Hanoi
              where the wholesale traders sell everything from clothes,
              household goods to foodstuffs.
            </Typist>
          </Box>
          <Box w="100%" pt={1}>
            <Text textColor="gray.800" fontSize="sm" mb={3}>
              Click the image to see inside.
            </Text>
            {imageClicked && (
              <>
                <Text>The lady at the door waves to you.</Text>
                <Button my={2} colorScheme="cyan" onClick={onOpen}>
                  Talk to the lady
                </Button>
              </>
            )}
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
          <ModalHeader>Shopkeeper</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
              src="/hanoi/hanoi-dongxuanlady.png"
              h={32}
              m={2}
              float="left"
            />
            <Text>
              &quot;Uncle Tien was here just a while ago. He was talking to a
              lady in the meat market.&ouot;
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="cyan"
              mr={3}
              onClick={() => {
                router.push("/htdt/12a-dongxuanmeat");
              }}
            >
              Go inside
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
