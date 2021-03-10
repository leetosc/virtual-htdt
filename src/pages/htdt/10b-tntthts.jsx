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
import { useAppState } from "@/context/state";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";
import ReactPlayer from "react-player";

export default function Tntt1() {
  const router = useRouter();
  const [typingDone, setTypingDone] = useState(false);
  const { isOpen, onClose } = useDisclosure();

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

          <Box h="100%" position="relative" overflow="auto" w="100%">
            <Box
              // overlay to prevent clicking video
              opacity={0}
              h="100%"
              w="100%"
              position="absolute"
              top={0}
              left={0}
            />

            <ReactPlayer
              url="https://youtu.be/xao5thOUCvo"
              controls={false}
              muted={true}
              playing={true}
              playbackRate={1.25}
              loop={true}
              config={{
                youtube: {
                  playerVars: {
                    start: 10,
                  },
                },
              }}
              width="100%"
              height="100%"
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
              One of the HTs comes up to you. <br />
              <br />
              &quot;Uncle Tiền? I know him. He was fond of visiting Sa Pa. You
              should go there and check it out! You will need a password though.
              Maybe you can find that in the market, Uncle Tiền spent a lot of
              time there.&quot;
            </Typist>
          </Box>
          <Box w="100%" display="flex" pt={2}></Box>
          <Box p={2}>
            {typingDone && (
              <>
                <Button
                  colorScheme="cyan"
                  onClick={() => {
                    stateContext.setLocationsVisited([
                      ...appState.locationsVisited,
                      "09-stjoseph",
                    ]);
                    router.push("/htdt/08-cyclo");
                  }}
                >
                  Return to cyclo driver
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
          <ModalHeader>Tr. Tony</ModalHeader>
          <ModalCloseButton />
          <ModalBody overflow="auto" maxH="100%">
            <Image src="/trtony.png" h={28} m={2} float="left" />
            <Text>
              The Vietnamese Eurcharistic Youth Movement in Vietnam started in
              Hanoi in 1929, and was initiated by Priests Léon Paliard and Paul
              Urureau from the St. Sulpice religious order. In the beginning, it
              was called the Eucharistic Crusade or Nghĩa Binh Thánh Thể.
              <br />
              <br />
              In the years following its creation, the Eucharistic Crusade
              (Nghĩa Binh Thánh Thể) spread to parishes throughout Vietnam. In
              1965, the name was changed to the Vietnamese Eucharistic Youth
              Movement (Thiếu nhi Thánh Thể Việt Nam), with emphasis on the
              mission of educating the youth.
              <br />
              <br />
              After the fall of Saigon in 1975, waves of Vietnamese spanned
              across the globe seeking refuge. Subsequently, the Vietnamese
              Eucharistic Youth Movement flourished and developed spectacularly
              within Vietnamese Catholic communities throughout the world, such
              as France, Canada, Australia, and the United States.
              <br />
              <br />
              In 1984, prominent TNTT leaders gathered in Louisiana and
              officially started Thieu Nhi Thanh The in the United States.
              Today, there are over 136 TNTT chapters spread across 110 cities
              and 35 States. We have over 25,000 registered members and over
              2500 Huynh Truongs.
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
