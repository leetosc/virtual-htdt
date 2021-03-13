import React from "react";
import PropTypes from "prop-types";
import { Box, Text, Image, IconButton } from "@chakra-ui/react";
import { ItemTypes } from "../../utils/items";
import { useDrag } from "react-dnd";
import { MdRemove } from "react-icons/md";

const InventoryItemDraggable = ({
  image,
  name,
  id,
  removeLocation,
  showButton,
  location,
}) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: {
      id: id,
      name: name,
      image: image,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <Box
      ref={drag}
      display="flex"
      alignItems="center"
      backgroundColor="gray.100"
      maxW={72}
      opacity={isDragging ? "0.5" : "1"}
      rounded="md"
      m={1}
      _hover={{ cursor: "grab" }}
      cursor={isDragging ? "grabbing" : "unset"}
    >
      <Image
        src={image}
        h={12}
        p={1}
        m={1}
        borderRadius="md"
        backgroundColor="white"
      />
      <Box
        ml={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        w="100%"
        pr={3}
      >
        <Text textColor="gray.900" fontSize="lg">
          {name}
        </Text>
        {showButton && (
          <IconButton
            colorScheme="blackAlpha"
            size="sm"
            icon={<MdRemove />}
            onClick={() => {
              removeLocation(id, location);
            }}
          />
        )}
      </Box>
    </Box>
  );
};

InventoryItemDraggable.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
};

InventoryItemDraggable.defaultProps = {
  image: "/items/box.png",
  id: Math.floor(Math.random() * 1000).toString(),
};

export default InventoryItemDraggable;
