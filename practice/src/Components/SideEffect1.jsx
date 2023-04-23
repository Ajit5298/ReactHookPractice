import { useState, useEffect } from "react";


function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000); //millisecond 1000millisecon=1second
  });

  return <h1>I've rendered {count} times!</h1>;
}
export default Timer;