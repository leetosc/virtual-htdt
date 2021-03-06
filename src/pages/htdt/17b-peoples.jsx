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
import { Carousel } from "react-responsive-carousel";

export default function Peoples() {
  const router = useRouter();
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
              src="/sapa/sapapeoplesmain.jpg"
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
              Let me introduce you to the different peoples who live in this
              region.
            </Typist>
          </Box>
          <Box w="100%" pt={2}>
            <Button
              mt={2}
              colorScheme="cyan"
              onClick={() => {
                setModalOpened(true);
                onOpen();
              }}
            >
              Talk to the people
            </Button>
          </Box>
          <Box p={2}>
            {modalOpened && (
              <>
                <Text my={2}>
                  &quot;You must be tired after climbing the mountain. Here is
                  the house your uncle liked to stay at when he visited. Get
                  some rest!&quot;
                </Text>
                <Button
                  colorScheme="cyan"
                  onClick={() => router.push("/htdt/18-cabin")}
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
          <ModalHeader>Peoples of Sa Pa</ModalHeader>
          <ModalCloseButton />
          <ModalBody overflow="auto" maxH="100%">
            <Carousel showThumbs={false} infiniteLoop={true}>
              <Box maxH="100%" display="flex" flexDir="column">
                <Image src="/sapa/hmong.jpg" maxW="unset" maxH="100%" />
                <Box textColor="white" textAlign="left" px={2} mt={2} mb={4}>
                  <Text fontSize="sm">
                    Hmong People: Worship their ancestors, the god of the house,
                    the good of the kitchen, and even the god of the door. There
                    are also different symbols that are custom only to them,
                    such as a green tree branch at the front door meaning that
                    an entrance is forbidden.
                  </Text>
                </Box>
              </Box>
              <Box maxH="100%" display="flex" flexDir="column">
                <Image src="/sapa/dao.jpg" maxW="unset" maxH="100%" />
                <Box textColor="white" textAlign="left" px={2} mt={2} mb={4}>
                  <Text fontSize="sm">
                    Yao (Dao) People: Mixes elements of Confucianism, Buddhism,
                    and Taoism. They also worship their family’s ancestry, but
                    also a man named Ban Vuong who is known as the earliest
                    ancestor of the Dao people.
                  </Text>
                </Box>
              </Box>
              <Box maxH="100%" display="flex" flexDir="column">
                <Image src="/sapa/tay.jpg" maxW="unset" maxH="100%" />
                <Box textColor="white" textAlign="left" px={2} mt={2} mb={4}>
                  <Text fontSize="sm">
                    Tay People: They believe in gods of their natural
                    environments, as well as worship and praying for their
                    ancestors
                  </Text>
                </Box>
              </Box>
              <Box maxH="100%" display="flex" flexDir="column">
                <Image src="/sapa/giay.jpg" maxW="unset" maxH="100%" />
                <Box textColor="white" textAlign="left" px={2} mt={2} mb={4}>
                  <Text fontSize="sm">
                    Giay People: They worship the God of Kitchen, Heaven and
                    Earth, as well as their family ancestors.{" "}
                  </Text>
                </Box>
              </Box>
            </Carousel>
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
