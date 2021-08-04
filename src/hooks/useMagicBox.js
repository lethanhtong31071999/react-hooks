import { useState, useEffect, useRef } from "react";

function randomColor(previousColor) {
  const colorList = ["green", "red", "yellow"];
  let randomIndex = Math.trunc(Math.random() * colorList.length);
  const previousIndex = colorList.indexOf(previousColor);
  while (randomIndex === previousIndex) {
    randomIndex = Math.trunc(Math.random() * colorList.length);
  }
  console.log(colorList[randomIndex]);
  return colorList[randomIndex];
}

function useMagicBox() {
  const [color, setColor] = useState("transparent");
  const colorRef = useRef("transparent");
  useEffect(() => {
    const colorInterval = setInterval(function () {
      const newColor = randomColor(colorRef.current);
      setColor(newColor);
      colorRef.current = newColor;
    }, 1000);

    return () => {
      clearInterval(colorInterval);
    };
  }, []);

  return { color };
}

export default useMagicBox;
