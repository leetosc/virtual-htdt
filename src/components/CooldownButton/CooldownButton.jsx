import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "@chakra-ui/react";

const CooldownButton = ({
  validate,
  cooldown,
  clickAction,
  children,
  ...props
}) => {
  const [coolingDown, setCoolingDown] = useState(false);
  return (
    <Button
      {...props}
      disabled={coolingDown}
      isLoading={coolingDown}
      loadingText="Incorrect"
      onClick={() => {
        if (validate()) {
          clickAction();
        } else {
          setCoolingDown(true);
          setTimeout(() => {
            setCoolingDown(false);
          }, cooldown * 1000);
        }
      }}
    >
      {children}
    </Button>
  );
};

CooldownButton.propTypes = {
  cooldown: PropTypes.number,
  clickAction: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
  children: PropTypes.node,
};

CooldownButton.defaultProps = {
  cooldown: 5,
  children: null,
};

export default CooldownButton;
