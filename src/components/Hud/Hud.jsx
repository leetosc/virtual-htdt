import React, { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import NextLink from "next/link";
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  Link as ChakraLink,
} from "@chakra-ui/react";

const Hud = () => {
  const [show, setShow] = useState(false);

  return (
    <Flex
      //   alignItems="center"
      justify="space-between"
      flexWrap="wrap"
      px={{ base: 2, sm: 4, md: 6 }}
      py={4}
      position="fixed"
      left={0}
      bottom={0}
      zIndex={10}
      bg="cyan.900"
      w="100%"
      h={64}
    >
      <Flex mr={2}>
        <NextLink href="/">
          <a>
            <Heading size="md" pl={3} color="white">
              hud
            </Heading>
          </a>
        </NextLink>
      </Flex>
    </Flex>
  );
};

export default Hud;
