import { useState } from "react";


export default function MyComponent() {
    const [stateCount, setStateCount] = useState(0)
    let varCount = 0;
  
    console.log("COMPONENTE ESEGUITO!", stateCount, varCount)
  
    function handleClick() {
      setStateCount(stateCount+1)
      varCount++
    }
    return <div>
      <button onClick={handleClick}>Click me, {stateCount}, {varCount}</button>
    </div>
  }