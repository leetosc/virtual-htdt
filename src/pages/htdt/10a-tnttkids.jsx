import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  Box,
  Heading,
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
  Link as ChakraLink,
  Icon,
} from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import { MapInteractionCSS } from "react-map-interaction";
import { FaCheck } from "react-icons/fa";
import { useAppState } from "@/context/state";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";

export default function Tnttkids() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [currentKid, setCurrentKid] = useState(undefined);
  const [correctAnswers, setCorrectAnswers] = useState([
    false,
    false,
    false,
    false,
  ]);

  const Kid1Component = () => (
    <Box>
      <Image src="/hanoi-tntt-kid1.png" h={28} m={2} float="left" />
      <Text>
        Do you know why we are wearing pink khăn? In Vietnam, little kids wear
        pink before going to Au Nhi where they wear green.
      </Text>
    </Box>
  );

  const Kid2Component = () => {
    const [puzzle1Input, setPuzzle1Input] = useState("");

    return (
      <Box>
        <Image src="/hanoi-tntt-kid3.png" h={28} m={2} float="left" />
        <Text>
          How many unique <b>chapters</b> of TNTT are there in the USA?
        </Text>
        <Input
          backgroundColor="white"
          value={puzzle1Input}
          onChange={(e) => setPuzzle1Input(e.target.value)}
        />
        <Button
          mt={2}
          colorScheme="cyan"
          isDisabled={puzzle1Input !== "136"}
          onClick={() => {
            const newAnswers = [...correctAnswers];
            newAnswers[0] = true;
            setCorrectAnswers(newAnswers);
            onClose();
          }}
        >
          Submit
        </Button>
      </Box>
    );
  };

  const Kid3Component = () => {
    const [puzzle2Input, setPuzzle2Input] = useState("");

    return (
      <Box>
        <Image src="/hanoi-tntt-kid5.png" h={28} m={2} float="left" />
        <Text>
          How many unique <b>cities</b> in the USA have TNTT Doans?
        </Text>
        <Input
          backgroundColor="white"
          value={puzzle2Input}
          onChange={(e) => setPuzzle2Input(e.target.value)}
        />
        <Button
          mt={2}
          colorScheme="cyan"
          isDisabled={puzzle2Input !== "114"}
          onClick={() => {
            const newAnswers = [...correctAnswers];
            newAnswers[1] = true;
            setCorrectAnswers(newAnswers);
            onClose();
          }}
        >
          Submit
        </Button>
      </Box>
    );
  };

  const Kid4Component = () => {
    const [puzzle3Input, setPuzzle3Input] = useState("");

    return (
      <Box>
        <Image src="/hanoi-tntt-kid4.png" h={28} m={2} float="left" />
        <Text>
          How many unique <b>states</b> in the USA have TNTT Doans?
        </Text>
        <Input
          backgroundColor="white"
          value={puzzle3Input}
          onChange={(e) => setPuzzle3Input(e.target.value)}
        />
        <Button
          mt={2}
          colorScheme="cyan"
          isDisabled={puzzle3Input !== "35"}
          onClick={() => {
            const newAnswers = [...correctAnswers];
            newAnswers[2] = true;
            setCorrectAnswers(newAnswers);
            onClose();
          }}
        >
          Submit
        </Button>
      </Box>
    );
  };

  const Kid5Component = () => {
    const [puzzle4Input, setPuzzle4Input] = useState("");

    return (
      <Box>
        <Image src="/hanoi-tntt-kid2.png" h={28} m={2} float="left" />
        <Text>
          How many total registered members were there in the 2019-2020 school
          year?
        </Text>
        <Input
          backgroundColor="white"
          value={puzzle4Input}
          onChange={(e) => setPuzzle4Input(e.target.value)}
        />
        <Button
          mt={2}
          colorScheme="cyan"
          isDisabled={puzzle4Input !== "19377"}
          onClick={() => {
            const newAnswers = [...correctAnswers];
            newAnswers[3] = true;
            setCorrectAnswers(newAnswers);
            onClose();
          }}
        >
          Submit
        </Button>
      </Box>
    );
  };

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

          <Box h="100%" position="relative" overflow="auto" width="100%">
            <MapInteractionCSS
              showControls
              defaultValue={{ scale: 1, translation: { x: 0, y: 0 } }}
            >
              <Image src="/hanoi-tnttkids.png" maxW="unset" />

              <Box
                position="absolute"
                left="7.97%"
                top="39.22%"
                width="14.84%"
                height="52.1%"
                _hover={{
                  border: "2px solid blue",
                  cursor: "pointer",
                }}
                onClick={(e) => {
                  if (!e.defaultPrevented) {
                    setCurrentKid(1);
                    onOpen();
                  }
                }}
                onTouchEnd={(e) => {
                  if (!e.defaultPrevented) {
                    setCurrentKid(1);
                    onOpen();
                  }
                }}
              ></Box>
              <Box
                position="absolute"
                left="53.13%"
                top="57.98%"
                width="13.59%"
                height="40.62%"
                _hover={{
                  border: "2px solid blue",
                  cursor: "pointer",
                }}
                onClick={(e) => {
                  if (!e.defaultPrevented) {
                    setCurrentKid(2);
                    onOpen();
                  }
                }}
                onTouchEnd={(e) => {
                  if (!e.defaultPrevented) {
                    setCurrentKid(2);
                    onOpen();
                  }
                }}
              ></Box>
              <Box
                position="absolute"
                left="89.22%"
                top="15.69%"
                width="10.16%"
                height="31.93%"
                _hover={{
                  cursor: "pointer",
                  border: "2px solid blue",
                }}
                onClick={(e) => {
                  if (!e.defaultPrevented) {
                    setCurrentKid(3);
                    onOpen();
                  }
                }}
                onTouchEnd={(e) => {
                  if (!e.defaultPrevented) {
                    setCurrentKid(3);
                    onOpen();
                  }
                }}
              ></Box>
              <Box
                position="absolute"
                left="74.84%"
                top="21.59%"
                width="10.78%"
                height="31.93%"
                _hover={{
                  cursor: "pointer",
                  border: "2px solid blue",
                }}
                onClick={(e) => {
                  if (!e.defaultPrevented) {
                    setCurrentKid(4);
                    onOpen();
                  }
                }}
                onTouchEnd={(e) => {
                  if (!e.defaultPrevented) {
                    setCurrentKid(4);
                    onOpen();
                  }
                }}
              ></Box>
              <Box
                position="absolute"
                left="24.38%"
                top="52.38%"
                width="12.19%"
                height="47.34%"
                _hover={{
                  cursor: "pointer",
                  border: "2px solid blue",
                }}
                onClick={(e) => {
                  if (!e.defaultPrevented) {
                    setCurrentKid(5);
                    onOpen();
                  }
                }}
                onTouchEnd={(e) => {
                  if (!e.defaultPrevented) {
                    setCurrentKid(5);
                    onOpen();
                  }
                }}
              ></Box>
            </MapInteractionCSS>
          </Box>
        </Box>

        <Hud>
          <Box whiteSpace="pre-line">
            <Typist
              cursor={{ hideWhenDone: true, blink: true }}
              avgTypingDelay={5}
            >
              The kids are really interested to hear about TNTT in the USA. They
              ask you some questions. <br />
              <Text fontSize="sm">
                You can find the answers by looking around on{" "}
                <ChakraLink
                  href="https://veym.net"
                  isExternal
                  color="blue.500"
                  textDecor="underline"
                >
                  veym.net
                </ChakraLink>
                . You wouldn't want to give these kids the wrong info!
              </Text>
            </Typist>
          </Box>

          <Box>
            <Text mb={2}>Talk to the kids and answer their questions.</Text>
            <Text mb={2}>Correct Answers:</Text>
            {correctAnswers.map((i) =>
              i === true ? (
                <Icon as={FaCheck} w={8} h={8} color="green.500" mx={1} />
              ) : null
            )}

            <Text textColor="red.500">
              ANSWERS: 19377 registered members, 114 cities, 136 chapters, 35
              states
            </Text>
          </Box>

          <Box p={4}>
            {correctAnswers.every((i) => i === true) && (
              <Text>Great! You have satisfied the kids' curiosity.</Text>
            )}
            <Button
              colorScheme="cyan"
              isDisabled={!correctAnswers.every((i) => i === true)}
              onClick={() => {
                router.push("/htdt/10b-tntthts");
              }}
            >
              Continue
            </Button>
          </Box>
        </Hud>
      </GameLayout>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Curious TNTT kid</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {currentKid === 1 ? (
              <Kid1Component />
            ) : currentKid === 2 ? (
              <Kid2Component />
            ) : currentKid === 3 ? (
              <Kid3Component />
            ) : currentKid === 4 ? (
              <Kid4Component />
            ) : currentKid === 5 ? (
              <Kid5Component />
            ) : null}
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
