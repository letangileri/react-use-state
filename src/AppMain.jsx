import languages from "./data/languages";
import { useState } from "react";

export default function AppMain(){

    const [currentTextId, setCurrentTextId] = useState(1);

    console.log(setCurrentTextId);
    
    const idLanguage = languages[currentTextId].id;
    const titleLanguage = languages[currentTextId].title;
    const descriptionLanguage = languages[currentTextId].description;

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
            <button key = {singleLanguage.id} onClick={()=>handleClick(singleLanguage.id)} data-id={singleLanguage.id}>{singleLanguage.title} </button>            
        ))}
        </div>

        {currentTextId == idLanguage &&              
        <div key={idLanguage}>
            <h2>{titleLanguage}</h2>
            <p>{descriptionLanguage}</p>
        </div> 
        }



        </>
    )

}