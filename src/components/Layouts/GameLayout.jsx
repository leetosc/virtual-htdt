import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAppState } from "@/context/state";

import PropTypes from "prop-types";
import { Box } from "@chakra-ui/react";

const GameLayout = (props) => {
  const router = useRouter();
  const stateContext = useAppState();
  const { appState } = stateContext;

  console.log(appState.locationsVisited);

  useEffect(() => {
    if (!appState.locationsVisited.includes(router.pathname)) {
      stateContext.setLocationsVisited([
        ...appState.locationsVisited,
        router.pathname,
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
