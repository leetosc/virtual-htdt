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

export default function Cabin() {
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
              src="/sapa/sapa-cabin.jpg"
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
              It is a nice cozy cabin. Time to rest before continuing your
              journey.
            </Typist>
          </Box>
          <Box w="100%" pt={2}>
            <Button
              colorScheme="cyan"
              onClick={() => {
                setModalOpened(true);
                onOpen();
              }}
            >
              Read the reflection on Sa Pa
            </Button>
            <Text></Text>
          </Box>
          <Box p={2}>
            {modalOpened && (
              <>
                <Text my={2}></Text>
                <Button
                  colorScheme="cyan"
                  onClick={() => router.push("/htdt/18b-activity")}
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
          <ModalHeader>Reflection</ModalHeader>
          <ModalCloseButton />
          <ModalBody overflow="auto" maxH="100%">
            <Text>
              Sa Pa is a very secluded area, at least compared to the rest of
              the world. They have a difficult time meeting face to face with
              people outside of their region without ACTIVELY going out of their
              way to do so. Because of this, everyone who lives in Sa Pa feels
              like they are in their own big family, even if their heritage,
              personalities, etc. are very different from one another. <br />{" "}
              <br />
              This is very similar to TNTT, in that whenever we go to Thieu Nhi,
              our problems go away, and we are apart of our own Thieu Nhi
              family, even if we may come from different backgrounds, we can all
              bond with each other through our joy and our goal to spread God’s
              love. This sense of family also allows us to relate to other
              people who are in different Doans, in that we are sharing our love
              of Thieu Nhi, as well as our love of God with other people, and we
              are able to bond with them because of it, even if we live hundreds
              to even thousands miles away.
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
