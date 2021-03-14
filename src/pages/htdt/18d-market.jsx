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
  Icon,
} from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import { MapInteractionCSS } from "react-map-interaction";
import { GiCook } from "react-icons/gi";
import { FaCheck } from "react-icons/fa";
import { useAppState } from "@/context/state";
import Hud from "@/components/Hud/Hud";
import Typist from "react-typist";

export default function SapaMarket() {
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
      <Image src="/sapa/marketp1.png" h={28} m={2} float="left" />
      <Text>
        <Icon as={GiCook} h={6} w={6} /> Lemongrass has such a noticeable aroma,
        it is perfect in Bun Bo Hue.
      </Text>
    </Box>
  );

  const Person2Component = () => {
    return (
      <Box>
        <Image src="/sapa/marketp2.png" h={28} m={2} float="left" />
        <Text>
          <Icon as={GiCook} h={6} w={6} /> I love pickled carrots in my Banh Mi
          and Banh Beo. I also love how pineapples add sweetness to the Bun Bo
          Hue broth.
        </Text>
      </Box>
    );
  };

  const Person3Component = () => {
    return (
      <Box>
        <Image src="/sapa/marketp3.png" h={28} m={2} float="left" />
        <Text>
          <Icon as={GiCook} h={6} w={6} /> Lettuce is great with Banh Xeo!
        </Text>
      </Box>
    );
  };

  const Person4Component = () => {
    return (
      <Box>
        <Image src="/sapa/marketp4.png" h={28} m={2} float="left" />
        <Text>
          <Icon as={GiCook} h={6} w={6} /> Bean sprouts go in many dishes as a
          garnish, including Pho, Bun Bo Hue, and Banh Xeo.
        </Text>
      </Box>
    );
  };

  const Person5Component = () => (
    <Box>
      <Image src="/sapa/marketp5.png" h={28} m={2} float="left" />
      <Text>
        <Icon as={GiCook} h={6} w={6} /> Onions go well in all dishes, but I
        personally would never put them in Banh Xeo!
      </Text>
    </Box>
  );

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
              <Image src="/sapa/market.jpg" maxW="unset" />

              <Box
                position="absolute"
                left="4%"
                top="9%"
                width="14%"
                height="41%"
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
                    if (
                      !appState.inventory.some((i) => i.name === "Lemongrass")
                    ) {
                      stateContext.setInventory([
                        ...appState.inventory,
                        { name: "Lemongrass", image: "/items/lemongrass.png" },
                      ]);
                    }

                    onOpen();
                  }
                }}
                onTouchEnd={(e) => {
                  if (!e.defaultPrevented) {
                    setCurrentKid(1);
                    const newPersonClicked = [...personClicked];
                    newPersonClicked[0] = true;
                    setPersonClicked(newPersonClicked);
                    if (
                      !appState.inventory.some((i) => i.name === "Lemongrass")
                    ) {
                      stateContext.setInventory([
                        ...appState.inventory,
                        { name: "Lemongrass", image: "/items/lemongrass.png" },
                      ]);
                    }

                    onOpen();
                  }
                }}
              ></Box>
              <Box
                position="absolute"
                left="27%"
                top="6%"
                width="13%"
                height="38%"
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
                    if (!appState.inventory.some((i) => i.name === "Carrots")) {
                      stateContext.setInventory([
                        ...appState.inventory,
                        { name: "Carrots", image: "/items/carrot.svg" },
                        { name: "Pineapple", image: "/items/pineapple.svg" },
                      ]);
                    }

                    onOpen();
                  }
                }}
                onTouchEnd={(e) => {
                  if (!e.defaultPrevented) {
                    setCurrentKid(2);
                    const newPersonClicked = [...personClicked];
                    newPersonClicked[1] = true;
                    setPersonClicked(newPersonClicked);
                    if (!appState.inventory.some((i) => i.name === "Carrots")) {
                      stateContext.setInventory([
                        ...appState.inventory,
                        { name: "Carrots", image: "/items/carrot.svg" },
                        { name: "Pineapple", image: "/items/pineapple.svg" },
                      ]);
                    }

                    onOpen();
                  }
                }}
              ></Box>
              <Box
                position="absolute"
                left="43%"
                top="5%"
                width="13%"
                height="43%"
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
                    if (!appState.inventory.some((i) => i.name === "Lettuce")) {
                      stateContext.setInventory([
                        ...appState.inventory,
                        { name: "Lettuce", image: "/items/lettuce.svg" },
                      ]);
                    }

                    onOpen();
                  }
                }}
                onTouchEnd={(e) => {
                  if (!e.defaultPrevented) {
                    setCurrentKid(3);
                    const newPersonClicked = [...personClicked];
                    newPersonClicked[2] = true;
                    setPersonClicked(newPersonClicked);
                    if (!appState.inventory.some((i) => i.name === "Lettuce")) {
                      stateContext.setInventory([
                        ...appState.inventory,
                        { name: "Lettuce", image: "/items/lettuce.svg" },
                      ]);
                    }

                    onOpen();
                  }
                }}
              ></Box>
              <Box
                position="absolute"
                left="67%"
                top="39%"
                width="14%"
                height="43%"
                _hover={{
                  cursor: "pointer",
                  border: personClicked[3]
                    ? "2px solid green"
                    : "2px solid blue",
                }}
                onClick={(e) => {
                  if (!e.defaultPrevented) {
                    setCurrentKid(4);
                    const newPersonClicked = [...personClicked];
                    newPersonClicked[3] = true;
                    setPersonClicked(newPersonClicked);
                    if (
                      !appState.inventory.some((i) => i.name === "Bean Sprouts")
                    ) {
                      stateContext.setInventory([
                        ...appState.inventory,
                        {
                          name: "Bean Sprouts",
                          image: "/items/beansprouts.jpg",
                        },
                      ]);
                    }

                    onOpen();
                  }
                }}
                onTouchEnd={(e) => {
                  if (!e.defaultPrevented) {
                    setCurrentKid(4);
                    const newPersonClicked = [...personClicked];
                    newPersonClicked[3] = true;
                    setPersonClicked(newPersonClicked);
                    if (
                      !appState.inventory.some((i) => i.name === "Bean Sprouts")
                    ) {
                      stateContext.setInventory([
                        ...appState.inventory,
                        {
                          name: "Bean Sprouts",
                          image: "/items/beansprouts.jpg",
                        },
                      ]);
                    }
                    onOpen();
                  }
                }}
              ></Box>
              <Box
                position="absolute"
                left="85%"
                top="39%"
                width="14%"
                height="38%"
                _hover={{
                  cursor: "pointer",
                  border: personClicked[4]
                    ? "2px solid green"
                    : "2px solid blue",
                }}
                onClick={(e) => {
                  if (!e.defaultPrevented) {
                    setCurrentKid(5);
                    const newPersonClicked = [...personClicked];
                    newPersonClicked[4] = true;
                    setPersonClicked(newPersonClicked);
                    if (!appState.inventory.some((i) => i.name === "Onions")) {
                      stateContext.setInventory([
                        ...appState.inventory,
                        { name: "Onions", image: "/items/onion.svg" },
                        { name: "Garlic", image: "/items/garlic.png" },
                      ]);
                    }

                    onOpen();
                  }
                }}
                onTouchEnd={(e) => {
                  if (!e.defaultPrevented) {
                    setCurrentKid(5);
                    const newPersonClicked = [...personClicked];
                    newPersonClicked[4] = true;
                    setPersonClicked(newPersonClicked);
                    if (!appState.inventory.some((i) => i.name === "Onions")) {
                      stateContext.setInventory([
                        ...appState.inventory,
                        { name: "Onions", image: "/items/onion.svg" },
                        { name: "Garlic", image: "/items/garlic.png" },
                      ]);
                    }

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
              There are lots of fresh vegetables here. You decide to buy some
              for your journey.
            </Typist>
          </Box>

          <Box>
            <Text mb={2}>Talk to the 5 people in the market.</Text>

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
          </Box>

          <Box p={4}>
            {personClicked.every((i) => i === true) && (
              <Text my={2}>
                You got everything you need here. The vegetables are safely in
                your inventory.
              </Text>
            )}
            <Button
              colorScheme="cyan"
              isDisabled={!personClicked.every((i) => i === true)}
              onClick={() => {
                router.push("/htdt/19-sapabus");
              }}
            >
              Continue your journey
            </Button>
          </Box>
        </Hud>
      </GameLayout>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Villager</ModalHeader>
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
            ) : currentKid === 5 ? (
              <Person5Component />
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
