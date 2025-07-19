import { useState, useRef, FC, useEffect } from "react";

// Define the type for the component's props
interface TextScrambleProps {
  enterText: string;
}

const TextScramble: FC<TextScrambleProps> = ({ enterText }) => {
  const chars = "!@#$%&*)_+-]{}<>?";
  const [textHover, setTextHover] = useState<string>(enterText);

  // Use useRef to store the interval ID across re-renders
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Cleanup interval on component unmount to prevent memory leaks
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    let iterations = 0;

    // Clear any previously running interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Assign the new interval to the ref
    intervalRef.current = setInterval(() => {
      setTextHover(
        enterText
          .split("")
          .map((_, index) => {
            // Reveal one character at a time
            if (index < iterations) {
              return enterText[index];
            }
            // Otherwise, return a random scramble character
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      // Stop the interval when all characters are revealed
      if (iterations >= enterText.length) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      }

      // This controls the speed of the character reveal.
      // A smaller increment makes the animation slower.
      iterations += 1 / 3;
    }, 50); // This is the update frequency (in ms). A higher number makes the scramble appear slower.
  };

  return (
    <span onMouseEnter={handleMouseEnter} className="scramble-container ">
      {textHover}
    </span>
  );
};

export default TextScramble;