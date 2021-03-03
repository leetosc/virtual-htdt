import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "@chakra-ui/react";

const ShowAnswerButton = ({ answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <Button colorScheme="red" onClick={() => setShowAnswer(!showAnswer)}>
      {showAnswer ? answer : "Show Answer"}
    </Button>
  );
};

ShowAnswerButton.propTypes = {
  answer: PropTypes.string,
};

ShowAnswerButton.defaultProps = {
  answer: "",
};

export default ShowAnswerButton;
