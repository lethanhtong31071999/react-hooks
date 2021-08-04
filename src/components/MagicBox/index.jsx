import React from "react";
import useMagicBox from "../../hooks/useMagicBox";
import "./style.scss";

MagicBox.propTypes = {};

function MagicBox(props) {
  const { color } = useMagicBox();

  const style = {
    backgroundColor: color,
  };
  return <div className="magic-box" style={style}></div>;
}

export default MagicBox;
