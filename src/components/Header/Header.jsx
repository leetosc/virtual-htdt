import React, { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { useRouter } from "next/router";
import NextLink from "next/link";
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  Link as ChakraLink,
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
import { GiLightBackpack } from "react-icons/gi";
import { useAppState } from "@/context/state";

const Header = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: inventoryOpen,
    onOpen: inventoryOnOpen,
    onClose: inventoryOnClose,
  } = useDisclosure();

  const stateContext = useAppState();
  const { appState } = stateContext;

  const handleToggle = () => {
    setShow(!show);
  };

  const MenuItem = ({ href, children }) => (
    <NextLink href={href} passHref>
      <Text
        as="a"
        _hover={{ textDecor: "none", color: "teal.100" }}
        fontSize={{ base: "lg", md: "md" }}
        textAlign={{ base: "center", sm: "left" }}
        py={{ base: 1, md: 0 }}
        mx={{ base: 0, md: 4 }}
        mt={{ base: 2, md: 0 }}
        onClick={() => setShow(false)}
        w={{ base: "100%", md: "auto" }}
      >
        {children}
      </Text>
    </NextLink>
  );

  MenuItem.propTypes = {
    href: PropTypes.string,
    children: PropTypes.node,
  };

  return (
    <>
      <Flex
        as="nav"
        alignItems="center"
        justify="space-between"
        flexWrap="wrap"
        px={{ base: 2, sm: 4, md: 6 }}
        py={3}
        position="fixed"
        zIndex={3}
        bg="cyan.900"
        w="100%"
      >
        <Flex
          alignItems="center"
          mr={2}
          onClick={onOpen}
          _hover={{ cursor: "pointer" }}
        >
          <Image src="/dblogo.png" width={34} height={34} alt="Logo" />

          <Heading size="md" pl={2} color="white">
            Virtual Camp - HTDT
          </Heading>
        </Flex>
        <Button
          variant="ghost"
          size="sm"
          display={{ base: "block" }}
          _hover={{ backgroundColor: "cyan.900" }}
          onClick={inventoryOnOpen}
        >
          <Icon as={GiLightBackpack} h={8} w={8} color="white" />
          {/* {show ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              height="1rem"
              width="1rem"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <title>Close</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              fill="white"
              height="1rem"
              width="1rem"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path
                d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                strokeWidth={4}
              />
            </svg> 
          )} */}
        </Button>

        {/* <Box
        w={{ base: "100%", md: "auto" }}
        grow="grow"
        display={{ base: show ? "flex" : "none", md: "flex" }}
        justify="flex-end"
        mt={{ base: 3, md: 0 }}
        color="teal.50"
        fontWeight="medium"
        flexDir={{ base: "column", md: "row" }}
      >
        <MenuItem href="/users">Users</MenuItem>

        <>
          <MenuItem href="/login">Log In</MenuItem>
          <MenuItem href="/register">Register</MenuItem>
        </>
      </Box> */}
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Return to homepage?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>You will lose all your progress.</ModalBody>

          <ModalFooter>
            <Button
              colorScheme="cyan"
              mr={3}
              onClick={() => {
                onClose();
                router.push("/");
              }}
            >
              Go
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={inventoryOpen} onClose={inventoryOnClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Inventory</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {appState.inventory.length > 0 ? (
              appState.inventory.map((i) => <Text key={i}>{i}</Text>)
            ) : (
              <Text>Inventory is empty</Text>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={inventoryOnClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Header;
