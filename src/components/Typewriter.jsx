import { useEffect, useState } from "react";

export default function Typewriter({ text = "", speed = 20, onDone }) {
  const [out, setOut] = useState("");

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setOut(text.slice(0, i++));
      if (i > text.length) {
        clearInterval(id);
        onDone && onDone();
      }
    }, speed);
    return () => clearInterval(id);
  }, [text, speed, onDone]);

  return <span>{out}</span>;
}
