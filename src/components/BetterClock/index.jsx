import React from "react";
import PropTypes from "prop-types";
import useClock from "../UseClock";

BetterClock.propTypes = {};

function BetterClock(props) {
  const { timeString } = useClock();
  useClock();
  return (
    <div>
      <p>{timeString}</p>
    </div>
  );
}

export default BetterClock;
