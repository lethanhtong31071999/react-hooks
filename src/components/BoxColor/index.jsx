import React, { useState } from "react";
import "./style.scss";

ColorBox.propTypes = {};

function getRandomColor() {
  const listColor = ["blue", "purple", "black", "deeppink", "green"];
  const randomIndex = Math.trunc(Math.random() * (listColor.length - 1));
  const color = listColor[randomIndex];
  return color;
}

function ColorBox(props) {
  const [color, setColor] = useState(function () {
    const initState = localStorage.getItem("color-box") || "deeppink";
    return initState;
  });
  const styles = {
    backgroundColor: color,
  };

  function handleBoxClick() {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("color-box", newColor);
  }

  return (
    <div className="color-box" style={styles} onClick={handleBoxClick}>
      COLOR BOX is {color}
    </div>
  );
}

export default ColorBox;
