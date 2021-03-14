import { Box, Heading, Image, Button, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../utils/items";
import { RESPONSE_TYPES } from "../../utils/kitchen";
import { useContext, useState } from "react";
import { CardContext } from "../../pages/htdt/41-kitchen";
import { GiCookingPot } from "react-icons/gi";

const BoxTarget = ({ foodName, food, children, image }) => {
  const { updateLocation, checkAnswer } = useContext(CardContext);

  const [status, setStatus] = useState(RESPONSE_TYPES.blank);

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => {
      setStatus(RESPONSE_TYPES.blank);
      updateLocation(item.id, food);
    },
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
        backgroundColor={
          isOver
            ? "gray.400"
            : status === RESPONSE_TYPES.blank
            ? "white"
            : status !== RESPONSE_TYPES.correct
            ? "red.100"
            : status === RESPONSE_TYPES.correct
            ? "green.100"
            : "white"
        }
        h={12}
        rounded="md"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px={4}
      >
        <Heading fontSize="lg" textColor="black">
          {foodName}
        </Heading>
        <Text textColor="black" fontSize="sm">
          {status === RESPONSE_TYPES.tooHigh
            ? "Too many ingredients"
            : status === RESPONSE_TYPES.tooLow
            ? "Not enough ingredients"
            : status === RESPONSE_TYPES.incorrectItems
            ? "Incorrect ingredients"
            : status === RESPONSE_TYPES.correct
            ? "Correct"
            : ""}
        </Text>
        <Button
          rightIcon={<GiCookingPot />}
          colorScheme="cyan"
          size="sm"
          onClick={() => {
            setStatus(checkAnswer(food));
          }}
        >
          Cook
        </Button>
      </Box>
      <Box mt={2} overflow="auto" h="90%">
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
