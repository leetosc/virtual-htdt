import "../styles/globals.css";
import { ChakraProvider, Box } from "@chakra-ui/react";
import Header from "../components/Header/Header";
import Hud from "../components/Hud/Hud";
import { ProvideAppState } from "../context/state";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { DragDropContext } from "react-beautiful-dnd";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ProvideAppState>
        <DragDropContext>
          <Header />
          <Component {...pageProps} />
        </DragDropContext>
      </ProvideAppState>
    </ChakraProvider>
  );
}

export default MyApp;
