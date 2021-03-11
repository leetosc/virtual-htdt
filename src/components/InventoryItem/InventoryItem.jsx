import React from "react";
import PropTypes from "prop-types";
import { Box, Text, Image } from "@chakra-ui/react";

const InventoryItem = ({ image, name }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      backgroundColor="gray.100"
      maxW={72}
      rounded="md"
      m={1}
    >
      <Image
        src={image}
        h={12}
        p={1}
        m={1}
        borderRadius="md"
        backgroundColor="white"
      />
      <Box ml={2}>
        <Text textColor="gray.900" fontSize="lg">
          {name}
        </Text>
      </Box>
    </Box>
  );
};

InventoryItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
};

InventoryItem.defaultProps = {
  image: "/items/box.png",
};

export default InventoryItem;
