import { Box, Heading, Image } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../utils/items";
import { useContext } from "react";
import { CardContext } from "../../pages/htdt/41-kitchen";

const BoxTarget = ({ foodName, food, children, image }) => {
  const { updateLocation } = useContext(CardContext);

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => updateLocation(item.id, food),
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
      backgroundImage={`url(${image})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Box
        backgroundColor="white"
        h={8}
        rounded="md"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Heading fontSize="lg" textColor="black">
          {foodName}
        </Heading>
      </Box>
      <Box mt={2} overflow="auto" h="100%">
        {/* {children.length > 0 ? children : <Image src={image} w="100%" />} */}
        {children}
      </Box>
    </Box>
  );
};

BoxTarget.propTypes = {
  foodName: PropTypes.string,
  food: PropTypes.string,
  children: PropTypes.node,
  image: PropTypes.string,
};

BoxTarget.defaultProps = {
  foodName: "",
  food: "",
  children: null,
  image: null,
};

export default BoxTarget;
