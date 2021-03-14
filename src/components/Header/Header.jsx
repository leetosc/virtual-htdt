import React from "react";
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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Textarea,
  useDisclosure,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import { GiLightBackpack } from "react-icons/gi";
import { AiOutlineReload } from "react-icons/ai";
import { TiEdit } from "react-icons/ti";
import { useAppState } from "@/context/state";
import InventoryItem from "../InventoryItem/InventoryItem";
import { fullInventory } from "../../utils/kitchen";

const Header = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: inventoryOpen,
    onOpen: inventoryOnOpen,
    onClose: inventoryOnClose,
  } = useDisclosure();

  const {
    isOpen: notesOpen,
    onOpen: notesOnOpen,
    onClose: notesOnClose,
  } = useDisclosure();

  const stateContext = useAppState();
  const {
    appState,
    setUserNotes,
    setLocationsVisited,
    setInventory,
  } = stateContext;

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
        {appState.SHOW_ANSWERS && (
          <Flex alignItems="center">
            <Heading size="md" pl={2} color="red.500">
              {`HUYNH TRUONG MODE`}
            </Heading>
          </Flex>
        )}
        <Box display="flex">
          {appState.SHOW_ANSWERS && (
            <>
              <Button
                variant="ghost"
                size="sm"
                display={{ base: "block" }}
                _hover={{ backgroundColor: "cyan.900" }}
                onClick={() => {
                  setInventory([]);
                  setLocationsVisited([]);
                }}
                title="Clear locations and inventory"
              >
                <Icon as={AiOutlineReload} h={6} w={6} color="red.500" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                display={{ base: "block" }}
                _hover={{ backgroundColor: "cyan.900" }}
                onClick={() => {
                  setInventory(fullInventory);
                }}
                title="Fill Inventory"
              >
                <Icon as={GiLightBackpack} h={8} w={8} color="red.500" />
              </Button>
            </>
          )}
          <Button
            variant="ghost"
            size="sm"
            display={{ base: "block" }}
            _hover={{ backgroundColor: "cyan.900" }}
            onClick={notesOnOpen}
            title="Your Notes"
          >
            <Icon as={TiEdit} h={8} w={8} color="white" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            display={{ base: "block" }}
            _hover={{ backgroundColor: "cyan.900" }}
            onClick={inventoryOnOpen}
            title="Inventory"
          >
            <Icon as={GiLightBackpack} h={8} w={8} color="white" />
          </Button>
        </Box>
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
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={1}>
              {appState.inventory.length > 0 ? (
                appState.inventory.map((i) =>
                  typeof i === "object" ? (
                    <InventoryItem key={i.name} name={i.name} image={i.image} />
                  ) : (
                    <InventoryItem name={i} key={i} />
                  )
                )
              ) : (
                <Text>Inventory is empty</Text>
              )}
            </SimpleGrid>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={inventoryOnClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={notesOpen} onClose={notesOnClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Notes</ModalHeader>
          <ModalCloseButton />
          <ModalBody minH="50vh">
            <Textarea
              size="xs"
              value={appState.userNotes}
              h="100%"
              placeholder="Jot down any notes here"
              rows={20}
              onChange={(e) => setUserNotes(e.target.value)}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={notesOnClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Header;
