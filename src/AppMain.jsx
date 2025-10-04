import languages from "./data/languages";
import { useState } from "react";

export default function AppMain(){








    const [currentTextId, setCurrentTextId] = useState(0);
    const [active, setActive] = useState(false);


    console.log(setCurrentTextId);
    
    //cerca oggetto
    const getObj = languages.find(language => {
        console.log(currentTextId);
        
        return currentTextId == language.id
    })
    // console.log(getObj.id);

    function handleClick(id){
        console.log("ciao", id);
        console.log(currentTextId);
        // const currentlyClickedItem = e.target.getAttribute('data-id');
        // console.log(currentlyClickedItem);
        setCurrentTextId(id);
        console.log(currentTextId);
        
        setActive(!active);
        
    }

    return(
        <>
        <div className="buttons">
        {languages.map(singleLanguage => (           
            <button key = {singleLanguage.id} onClick={()=>handleClick(singleLanguage.id)} style={{ backgroundColor: active && currentTextId == singleLanguage.id ? "yellow" : "white" }}>{singleLanguage.title} </button>            
        ))}
        </div>


       {!getObj && currentTextId == 0 ? <p> Nessun linguaggio selezionato </p> :         
        <div key={getObj.id}>
            <h2>{getObj.title}</h2>
            <p>{getObj.description}</p>
        </div> 
        }



        </>
    )

}


function MyComponent() {
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