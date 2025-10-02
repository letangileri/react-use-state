import languages from "./data/languages";
import { useState } from "react";

export default function AppMain(){

    const [currentTextId, setCurrentTextId] = useState(0);
    const [active, setActive] = useState(false);


    console.log(setCurrentTextId);
    
    //cerca oggetto
    const getObj = languages.find(language => {
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


       {currentTextId == 0 ? <p> Nessun linguaggio selezionato </p> :         
        <div key={getObj.id}>
            <h2>{getObj.title}</h2>
            <p>{getObj.description}</p>
        </div> 
        }



        </>
    )

}