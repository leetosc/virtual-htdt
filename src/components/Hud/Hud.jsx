import React, { useState, useEffect } from "react";
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
import { useAppState } from "@/context/state";

const Hud = ({ children }) => {
  //   const {
  //     appState,
  //     setInformation,
  //     setLocations,
  //     setObjective,
  //   } = useAppState();

  //   const { information, objective, locations } = appState;

  const boxTitles = ["Locations", "Objectives", "Information"];

  return (
    <Flex
      //   alignItems="center"
      justify="space-between"
      flexWrap="wrap"
      px={{ base: 2, sm: 4, md: 6 }}
      py={2}
      position="fixed"
      left={0}
      bottom={0}
      zIndex={10}
      bg="cyan.900"
      w="100%"
      h={64}
      overflow="auto"
    >
      {/* <Box flex={1} flexDir="column" h="100%" pb={12} mx={2}>
        <Heading textColor="white" textAlign="center">
          Locations
        </Heading>
        <Box
          backgroundColor="cyan.100"
          rounded="lg"
          height="100%"
          overflow="auto"
          py={1}
          px={2}
        >
          {locations}
        </Box>
      </Box>
      <Box flex={1} flexDir="column" h="100%" pb={12} mx={2}>
        <Heading textColor="white" textAlign="center">
          Objectives
        </Heading>
        <Box
          backgroundColor="cyan.100"
          rounded="lg"
          height="100%"
          overflow="auto"
          py={1}
          px={2}
        >
          {objectives}
        </Box>
      </Box>
      <Box flex={1} flexDir="column" h="100%" pb={12} mx={2}>
        <Heading textColor="white" textAlign="center">
          Information
        </Heading>
        <Box
          backgroundColor="cyan.100"
          rounded="lg"
          height="100%"
          overflow="auto"
          py={1}
          px={2}
        >
          {information}
        </Box>
      </Box> */}
      {children.map((child, index) => (
        <Box key={index} flex={1} flexDir="column" h="100%" pb={12} mx={2}>
          <Heading textColor="white" textAlign="center">
            {boxTitles[index]}
          </Heading>
          <Box
            backgroundColor="cyan.100"
            rounded="lg"
            height="100%"
            overflow="auto"
            py={1}
            px={2}
          >
            {child}
          </Box>
        </Box>
      ))}
    </Flex>
  );
};

export default Hud;
