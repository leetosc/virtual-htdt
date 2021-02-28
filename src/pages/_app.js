import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import PropTypes from "prop-types";
import Header from "../components/Header/Header";
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
MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.any,
};

export default MyApp;
