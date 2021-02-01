import React from "react";
import PropTypes from "prop-types";
import { Box, Heading, Flex } from "@chakra-ui/react";

const Hud = ({ children }) => {
  const boxTitles = ["Information", "Objectives", "Locations"];

  return (
    <Flex
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
      {children.map((child, index) => (
        <Box
          key={index}
          flex={1}
          minW="xs"
          flexDir="column"
          h="100%"
          pb={12}
          mx={2}
        >
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

Hud.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};

export default Hud;
