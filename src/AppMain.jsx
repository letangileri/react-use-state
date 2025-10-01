import languages from "./data/languages";
import { useState } from "react";

export default function AppMain(){

    const [currentTextId, setCurrentTextId] = useState(1);

    console.log(setCurrentTextId);
    
    function handleClick(e){
        console.log("ciao", e);
        const currentlyClickedItem = e.target.getAttribute('data-id');
        console.log(currentlyClickedItem);
        setCurrentTextId(currentlyClickedItem);
        
    }
    return(
        <>
        <div className="buttons">
        {languages.map(singleLanguage => (           
            <button key = {singleLanguage.id} onClick={handleClick} data-id={singleLanguage.id}>{singleLanguage.title} </button>            
        ))}
        </div>

       {languages.map(singleLanguage => (
            console.log(currentTextId),
            console.log(singleLanguage.id),
                
            currentTextId == singleLanguage.id &&              
                <div key={singleLanguage}>
                    <h2>{singleLanguage.title}</h2>
                    <p>{singleLanguage.description}</p>
                </div> 
            

       ))} 

        </>
    )

}