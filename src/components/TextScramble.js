import { useState } from "react";

const TextScramble = ({ enterText }) => {
  const chars = "!@#$%&*)_+-]{}<>?";
  const [textHover, setTextHover] = useState(enterText);
  let interval = null;

  const handleMouseEnter = () => {
    let iterations = 0;
    clearInterval(interval);
    interval = setInterval(() => {
      setTextHover(
        enterText
          .split("")
          .map((_, i) =>
            i < iterations
              ? enterText[i]
              : chars[Math.floor(Math.random() * chars.length)]
          )
          .join("")
      );

      iterations++;
      if (iterations > enterText.length) clearInterval(interval);
    }, chars.length * 2);
  };

  return (
    <h1
      onMouseEnter={handleMouseEnter}>
      {textHover}
    </h1>
  );
};

export default TextScramble;