import { useState } from "react";

export default function MyComponent2() {
    const [stateCount, setStateCount] = useState(0)
    let varCount = 0;
  
    console.log("COMPONENTE ESEGUITO!", stateCount, varCount)
  
    function handleClick() {
      setStateCount(stateCount+1)
      varCount++
    }
  
    function otherClick() {
      varCount++;
    }
  
    return <div>
      <button onClick={handleClick}>Click me, {stateCount}, {varCount}</button>
      <button onClick={otherClick}>Another broken click, {stateCount}, {varCount}</button>
    </div>
  }