"use client";
import { useRef,useState } from "react";

const AUseRef = () => {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  const handleUr = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
  };

  const handleUs = () => {
    const updatedCount = count + 1;
    console.log(`Clicked ${updatedCount} times`);
    setCount(updatedCount);
  };

  console.log("I rendered!");

  return (
    <>
      <button onClick={handleUr}>Click me UseRef</button>
      <button onClick={handleUs}>Click me UseState</button>
      <p>useRef is a React Hook that lets you reference a value that’s not needed for rendering. That is it’s used to store a mutable value that does not cause a re-render when updated.</p>
    </>
  );
};

export default AUseRef;
