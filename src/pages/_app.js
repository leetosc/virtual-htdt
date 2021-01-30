import "../styles/globals.css";
import { ChakraProvider, Box } from "@chakra-ui/react";
import Header from "../components/Header/Header";
import Hud from "../components/Hud/Hud";
import { ProvideAppState } from "../context/state";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ProvideAppState>
        <Header />
        {/* <Box as="main" h="100vh" pt={14} pb={64} display="flex" flexDir="column"> */}
        <Component {...pageProps} />
        {/* <Hud /> */}
        {/* </Box> */}
      </ProvideAppState>
    </ChakraProvider>
  );
}

export default MyApp;
