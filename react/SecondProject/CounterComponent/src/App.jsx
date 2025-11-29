import { useState } from "react";
import { Counter } from "./Counter";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Counter
        value={count}
        onChange={setCount}
        step={1}
        min={0}
        max={10}
      />
      <p>Current: {count}</p>
    </div>
  );
}
