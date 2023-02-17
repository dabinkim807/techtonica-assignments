//imported useState from react
import { useState } from "react";

const Counter = () => {
  // create initial state of 0
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* displays the state count */}
      <div> Count = {count}</div>
      {/* created buttons copy paste and changed details */}
      {/* since state was a numerical value we accessed state 
      using count in setState function and added or subtracted 1 or set to 0 again */}
      <button onClick={() => setCount(count + 1)}>Plus 1</button>
      <button onClick={() => setCount(count - 1)}>Minus 1</button>
      <button onClick={() => setCount(0)}>Reset Count</button>
    </div>
  );
};

export default Counter;
