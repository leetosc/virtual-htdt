import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  Box,
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
  Icon,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import { MapInteractionCSS } from "react-map-interaction";
import { GiCook } from "react-icons/gi";
import { FaCheck } from "react-icons/fa";
import { useAppState } from "@/context/state";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";
import ShowAnswerButton from "@/components/ShowAnswerButton/ShowAnswerButton";

export default function DongXuanMarket() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [currentKid, setCurrentKid] = useState(undefined);
  const [personClicked, setPersonClicked] = useState([
    false,
    false,
    false,
    false,
  ]);
  const stateContext = useAppState();
  const { appState } = stateContext;

  const Person1Component = () => (
    <Box>
      <Image src="/hanoi/hanoi-dongxuanmeat1.png" h={28} m={2} float="left" />
      <Text>
        <Icon as={GiCook} h={6} w={6} /> A lot of Vietnamese dishes have a beef
        broth base, like Pho and Bun Bo Hue. <br />
        Pork also adds a lot of flavor to Bun Bo Hue broth.
      </Text>
    </Box>
  );

  const Person2Component = () => {
    return (
      <Box>
        <Image src="/hanoi/hanoi-dongxuanmeat3.png" h={28} m={2} float="left" />
        <Text>
          <Icon as={GiCook} h={6} w={6} /> Grilled pork, sausaged pork, and pate
          are great for Banh Mi!
        </Text>
      </Box>
    );
  };

  const Person3Component = () => {
    return (
      <Box>
        <Image src="/hanoi/hanoi-dongxuanmeat4.png" h={28} m={2} float="left" />
        <Text>
          <Icon as={GiCook} h={6} w={6} /> Shrimp is sweet and light, great for
          Banh Beo and Banh Xeo
        </Text>
      </Box>
    );
  };

  const Person4Component = () => {
    const [puzzleInput, setPuzzleInput] = useState("");

    return (
      <Box>
        <Image src="/hanoi/hanoi-dongxuanmeat2.png" h={28} m={3} float="left" />
        <Text>
          &quot;Hey, are you Uncle Tiền&apos;s cháu? Here is the meat he
          ordered.&quot;
        </Text>
        <UnorderedList listStylePosition="inside">
          <ListItem>5kg Beef</ListItem>
          <ListItem>5kg Pork</ListItem>
          <ListItem>3kg Shrimp</ListItem>
          <ListItem>1kg Pate</ListItem>
        </UnorderedList>
        <Text my={2}>
          &quot;When you get on the bus, tell the driver how many pounds of meat
          you got.&quot;
        </Text>
        <Text fontSize="sm">
          Let me make sure you got it right. How much does it weigh? Round to
          the nearest pound
        </Text>
        <Input
          backgroundColor="white"
          value={puzzleInput}
          placeholder="Weight in pounds"
          onChange={(e) => setPuzzleInput(e.target.value)}
        />
        <Button
          mt={2}
          colorScheme="cyan"
          isDisabled={puzzleInput !== "31"}
          onClick={() => {
            const newPersonClicked = [...personClicked];
            newPersonClicked[3] = true;
            setPersonClicked(newPersonClicked);
            stateContext.setInventory([
              ...appState.inventory,
              "5kg Beef",
              "5kg Pork",
              "3kg Shrimp",
              "1kg Pate",
            ]);

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
              <Image src="/hanoi/hanoi-dongxuanmeat.jpg" maxW="unset" />

              <Box
                position="absolute"
                left="2.08%"
                top="4.1%"
                width="17.19%"
                height="50.59%"
                _hover={{
                  border: personClicked[0]
                    ? "2px solid green"
                    : "2px solid blue",
                  cursor: "pointer",
                }}
                onClick={(e) => {
                  if (!e.defaultPrevented) {
                    setCurrentKid(1);
                    const newPersonClicked = [...personClicked];
                    newPersonClicked[0] = true;
                    setPersonClicked(newPersonClicked);
                    onOpen();
                  }
                }}
                onTouchEnd={(e) => {
                  if (!e.defaultPrevented) {
                    setCurrentKid(1);
                    const newPersonClicked = [...personClicked];
                    newPersonClicked[0] = true;
                    setPersonClicked(newPersonClicked);
                    onOpen();
                  }
                }}
              ></Box>
              <Box
                position="absolute"
                left="62.63%"
                top="48.44%"
                width="7.94%"
                height="20.7%"
                _hover={{
                  border: personClicked[1]
                    ? "2px solid green"
                    : "2px solid blue",
                  cursor: "pointer",
                }}
                onClick={(e) => {
                  if (!e.defaultPrevented) {
                    setCurrentKid(2);
                    const newPersonClicked = [...personClicked];
                    newPersonClicked[1] = true;
                    setPersonClicked(newPersonClicked);
                    onOpen();
                  }
                }}
                onTouchEnd={(e) => {
                  if (!e.defaultPrevented) {
                    setCurrentKid(2);
                    const newPersonClicked = [...personClicked];
                    newPersonClicked[1] = true;
                    setPersonClicked(newPersonClicked);
                    onOpen();
                  }
                }}
              ></Box>
              <Box
                position="absolute"
                left="87.24%"
                top="43.16%"
                width="6.64%"
                height="15.23%"
                _hover={{
                  cursor: "pointer",
                  border: personClicked[2]
                    ? "2px solid green"
                    : "2px solid blue",
                }}
                onClick={(e) => {
                  if (!e.defaultPrevented) {
                    setCurrentKid(3);
                    const newPersonClicked = [...personClicked];
                    newPersonClicked[2] = true;
                    setPersonClicked(newPersonClicked);

                    onOpen();
                  }
                }}
                onTouchEnd={(e) => {
                  if (!e.defaultPrevented) {
                    setCurrentKid(3);
                    const newPersonClicked = [...personClicked];
                    newPersonClicked[2] = true;
                    setPersonClicked(newPersonClicked);

                    onOpen();
                  }
                }}
              ></Box>
              <Box
                position="absolute"
                left="42.97%"
                top="19.92%"
                width="19.66%"
                height="40.82%"
                _hover={{
                  cursor: "pointer",
                  border: personClicked[3]
                    ? "2px solid green"
                    : "2px solid blue",
                }}
                onClick={(e) => {
                  if (!personClicked[3]) {
                    if (!e.defaultPrevented) {
                      setCurrentKid(4);
                      onOpen();
                    }
                  }
                }}
                onTouchEnd={(e) => {
                  if (!personClicked[3]) {
                    if (!e.defaultPrevented) {
                      setCurrentKid(4);
                      onOpen();
                    }
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
              The market has great prices and a large selection. You should get
              some meat for your travels here.
            </Typist>
          </Box>

          <Box>
            <Text mb={2}>Talk to the 4 people in the market.</Text>

            {personClicked.map((i, index) =>
              i === true ? (
                <Icon
                  key={index}
                  as={FaCheck}
                  w={8}
                  h={8}
                  color="green.500"
                  mx={1}
                />
              ) : null
            )}

            {appState.SHOW_ANSWERS && <ShowAnswerButton answer="31" />}
          </Box>

          <Box p={4}>
            {personClicked.every((i) => i === true) && (
              <Text my={2}>
                You got everything you need here. The meat is safely in your
                inventory.
              </Text>
            )}
            <Button
              colorScheme="cyan"
              isDisabled={!personClicked.every((i) => i === true)}
              onClick={() => {
                router.push("/htdt/08-cyclo");
              }}
            >
              Return to Cyclo
            </Button>
          </Box>
        </Hud>
      </GameLayout>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Meat market seller</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {currentKid === 1 ? (
              <Person1Component />
            ) : currentKid === 2 ? (
              <Person2Component />
            ) : currentKid === 3 ? (
              <Person3Component />
            ) : currentKid === 4 ? (
              <Person4Component />
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
