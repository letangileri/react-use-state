import languages from "./data/languages";
import { useState } from "react";

export default function AppMain(){

    const [currentTextId, setCurrentTextId] = useState(1);

    console.log(setCurrentTextId);
    
    const idLanguage = languages[0].id;
    const titleLanguage = languages[0].title;
    const descriptionLanguage = languages[0].description;

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