import languages from "./data/languages";
import { useState } from "react";

export default function AppMain(){

    const [currentTextId, setCurrentTextId] = useState(1);

    console.log(setCurrentTextId);
    
    //cerca oggetto
    const getObj = languages.find(language => {
        return currentTextId == language.id
    })
    console.log(getObj.id);

    function handleClick(id){
        console.log("ciao", id);
        // const currentlyClickedItem = e.target.getAttribute('data-id');
        // console.log(currentlyClickedItem);
        setCurrentTextId(id);
        
    }
    return(
        <>
        <div className="buttons">
        {languages.map(singleLanguage => (           
            <button key = {singleLanguage.id} onClick={()=>handleClick(singleLanguage.id)}>{singleLanguage.title} </button>            
        ))}
        </div>


       {            
        <div key={getObj.id}>
            <h2>{getObj.title}</h2>
            <p>{getObj.description}</p>
        </div> 
        }



        </>
    )

}