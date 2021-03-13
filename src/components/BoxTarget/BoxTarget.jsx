import { Box, Heading } from "@chakra-ui/react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../utils/items";
import { useContext } from "react";
import { CardContext } from "../../pages/htdt/41-kitchen";

const BoxTarget = (props) => {
  const { updateLocation, removeLocation } = useContext(CardContext);

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => updateLocation(item.id, props.food),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <Box
      ref={drop}
      m={2}
      p={3}
      boxShadow="sm"
      bg={isOver ? "gray.500" : "gray.300"}
      h={96}
      textAlign="center"
      w="100%"
      rounded="md"
      color="white"
      overflow="hidden"
    >
      <Heading fontSize="lg" textColor="black">
        {props.foodName}
      </Heading>
      <Box mt={2} overflow="auto" h="100%">
        {props.children}
      </Box>
    </Box>
  );
};

export default BoxTarget;
