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

export default function Sample5a() {
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
            <Image src="/sample5-hue-aodai.jpg" maxW="unset" maxH="100%" />
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
          <Box w="100%" display="flex" pt={4}>
            <Button
              colorScheme="teal"
              mt={2}
              onClick={() => {
                setModalOpened(true);
                onOpen();
              }}
            >
              Talk to mysterious woman
            </Button>
          </Box>
          <Box>
            <Link href="/htdt/sample4">
              <a>Taxi</a>
            </Link>
          </Box>
        </Hud>
      </GameLayout>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Mysterious Woman</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src="/mysteriousWoman.png" h={28} m={2} float="left" />
            <Text>
              Are you looking for Uncle Tien? He told me to give you this
              message:
              <br />
              <br />
              Key: Vì ở đâu có hai ba người họp lại nhân danh Thầy, thì có Thầy
              ở đấy, giữa họ. (Mt 18, 20)
              <br />
              <br />
              Bản tin: T H I E U HA N H I YYE T H O A UTH M T H UO C B R NG .
              /AR
            </Text>
            {/* solution: HAY YEU THUONG */}
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
