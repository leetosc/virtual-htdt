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

const Header = () => {
  const [show, setShow] = useState(false);

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
    <Flex
      as="nav"
      alignItems="center"
      justify="space-between"
      flexWrap="wrap"
      px={{ base: 2, sm: 4, md: 6 }}
      py={2}
      position="fixed"
      zIndex={3}
      bg="cyan.900"
      w="100%"
    >
      <Flex alignItems="center" mr={2}>
        <NextLink href="/">
          <a>
            <Image src="/dblogo.png" width={34} height={34} alt="Logo" />
          </a>
        </NextLink>
        <NextLink href="/">
          <a>
            <Heading size="md" pl={2} color="white">
              Virtual Camp - HTDT
            </Heading>
          </a>
        </NextLink>
      </Flex>
      {/* <Button
        variant="ghost"
        size="sm"
        display={{ base: "block", md: "none" }}
        _hover={{ backgroundColor: "cyan.900" }}
        onClick={handleToggle}
      >
        {show ? (
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
        )}
      </Button> */}

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
  );
};

export default Header;
