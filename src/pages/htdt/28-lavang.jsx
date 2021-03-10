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
import { Carousel } from "react-responsive-carousel";
import ReactPlayer from "react-player";

export default function LaVang() {
  const router = useRouter();
  const [typingDone, setTypingDone] = useState(false);
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

          {videoEnded ? (
            <Box h="100%" position="relative" overflow="auto">
              <Image
                src="/lavang/NhaThoLaVang-31.JPG"
                maxW="unset"
                h="100%"
                maxH="100%"
              />
            </Box>
          ) : (
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
                url="https://youtu.be/RYLJSKdvZfI"
                controls={false}
                muted={true}
                playing={true}
                playbackRate={1.25}
                onProgress={({ playedSeconds }) => {
                  if (playedSeconds > 232) {
                    setVideoEnded(true);
                  }
                }}
                config={{
                  youtube: {
                    playerVars: {
                      start: 171,
                    },
                  },
                }}
                width="100%"
                height="100%"
              />
            </Box>
          )}
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            <Typist
              cursor={{ hideWhenDone: true, blink: true }}
              avgTypingDelay={5}
              onTypingDone={() => setTypingDone(true)}
            >
              At the end of the 18th century, the advisors of Canh Thinh feared
              the spread of Catholicsm in the country and had King Thinh to
              issue an anti-Catholic edict in which persecution of the Catholics
              was the order. More than 100,000 Vietnamese Catholics died. All
              Catholic churches and seminaries were ordered to be destroyed.
              <br />
              <br />
              The edict resulted in the fleeing of many families to the rain
              forest of La Vang in the Quang Tri Province in central Vietnam.
              Many suffered from the bitter cold weather, jungle sickness and
              starvation and fell ill. While hiding, the Catholics gathered
              nightly at the foot of a banyan tree to pray the Rosary to seek
              courage and find comfort in their distress. One night an
              apparition appeared. It was a woman dressed in the traditional
              Vietnamese áo dài dress, holding a child and surrounded by two
              angels. Those present interpreted the vision as the Virgin Mother
              and the infant Jesus. They said that the Lady comforted them and
              told them to boil leaves to provide medicine to cure the illness.
              She assured them that their prayers were being heard and promised
              them her protection and relief from their plight. <br />
              <br />
              In the early 1800’s, the Catholics began to return to their
              villages, passing on the story of the apparition in the La Vang
              forest and its messages. As the story spread, the site became a
              pilgrimage site where many came to pray and offer incense. In
              1820, a chapel was built, later destroyed and rebuilt. In July
              1999, Pope John Paul II publically recognized the importance of
              Our Lady of La Vang in his message for the conclusion of the
              Marian Year in La Vang, Vietnam.
            </Typist>
          </Box>
          <Box w="100%" pt={1}>
            <Text>Read about Our Lady of La Vang</Text>
            {typingDone && (
              <Button
                onClick={() => {
                  setModalOpened(true);
                  onOpen();
                }}
                colorScheme="cyan"
                mt={3}
              >
                See more
              </Button>
            )}
          </Box>
          <Box p={2}>
            {videoEnded && modalOpened && (
              <>
                <Text>
                  Before continuing, each team member share one thing you would
                  like your team to pray for. Then say one Hail Mary together as
                  a team.
                </Text>
                <Text my={2}>Đức Mẹ La Vang</Text>
                <Text my={1}>Cầu cho chúng con</Text>
                <Button
                  mt={2}
                  colorScheme="cyan"
                  onClick={() => router.push("/htdt/29-map")}
                >
                  Continue
                </Button>
              </>
            )}
            {appState.SHOW_ANSWERS && (
              <Button
                colorScheme="red"
                onClick={() => router.push("/htdt/29-map")}
              >
                Continue
              </Button>
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
          <ModalHeader>La Vang</ModalHeader>
          <ModalCloseButton />
          <ModalBody overflow="auto" maxH="100%">
            <Carousel showThumbs={false} infiniteLoop={true}>
              <Box maxH="100%" display="flex" flexDir="column">
                <Image
                  src="/lavang/lavangchurchold.jpg"
                  maxW="unset"
                  maxH="100%"
                />

                <Box textColor="white" textAlign="left" px={2} mt={2} mb={4}>
                  <Text fontSize="sm">
                    The Church of our Lady of La Vang was built in 1928
                  </Text>
                </Box>
              </Box>
              <Box maxH="100%" display="flex" flexDir="column">
                <Image
                  src="/lavang/NhaThoLaVang-17.JPG"
                  maxW="unset"
                  maxH="100%"
                />
                <Box textColor="white" textAlign="left" px={2} mt={2} mb={4}>
                  <Text fontSize="sm">
                    The Church was destroyed in 1972 during the war, and only
                    the front remains standing today.
                  </Text>
                </Box>
              </Box>
              <Box maxH="100%" display="flex" flexDir="column">
                <Image src="/lavang/minhlavang.jpg" maxW="unset" maxH="100%" />
                <Box textColor="white" textAlign="left" px={2} mt={2} mb={4}>
                  <Text fontSize="sm">
                    The site a popular pilgrimage location, and thousands of
                    people come every year to pray.
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
