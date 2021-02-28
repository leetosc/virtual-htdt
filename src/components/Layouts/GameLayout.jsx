import React from "react";
import PropTypes from "prop-types";
import { Box } from "@chakra-ui/react";

const GameLayout = (props) => {
  return (
    <>
      <Box h="100vh" pb={64} pt={14}>
        <Box as="main" h="100%" display="flex" flexDir="column">
          {props.children}
        </Box>
      </Box>
    </>
  );
};

GameLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GameLayout;
