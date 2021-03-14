import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import PropTypes from "prop-types";
import Header from "../components/Header/Header";
import { ProvideAppState } from "../context/state";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
// import {
//   DndProvider as MultiDndProvider,
//   MultiBackend,
// } from "react-dnd-multi-backend";
import MultiBackend, {
  TouchTransition,
  MouseTransition,
} from "react-dnd-multi-backend";

const HTML5toTouch = {
  backends: [
    {
      id: "html5",
      backend: HTML5Backend,
      transition: MouseTransition,
    },
    {
      id: "touch",
      backend: TouchBackend,
      options: { enableMouseEvents: true },
      preview: true,
      transition: TouchTransition,
    },
  ],
};


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <DndProvider backend={MultiBackend} options={HTML5toTouch}>
        {/* <MultiDndProvider options={HTML5toTouch}> */}

        <ProvideAppState>
          <Header />
          <Component {...pageProps} />
        </ProvideAppState>
        {/* </MultiDndProvider> */}
      </DndProvider>
    </ChakraProvider>
  );
}
MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.any,
};

export default MyApp;
