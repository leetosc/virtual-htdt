import React from "react";
import PropTypes from "prop-types";
import { Box } from "@chakra-ui/react";
import Hud from "@/components/Hud/Hud";

const GameLayout = (props) => {
  return (
    <>
      <Box h="100vh" pb={64} pt={14}>
        <Box as="main" h="100%" display="flex" flexDir="column">
          {props.children}
        </Box>
        {/* <Hud /> */}
      </Box>
    </>
  );
};

GameLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GameLayout;
