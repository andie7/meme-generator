import React from "react";
import './Meme.css'
import memesData from './memesData'

export default function Meme(){

const [memeImage, setMemeImage] = React.useState("");

function getMemeImage(){
       const memesArray = memesData.data.memes;
       // It generates a random number between 0 and the length of the memesArray. Let's say the random number is 3. Then, it stores the URL of the meme at the index 3 of the memesArray into the url variable. So, the code selects a random meme from the memesArray and gets its URL.
       const randomNumber = Math.floor(Math.random() * memesArray.length)
       setMemeImage( memesArray[randomNumber].url)
    
    }



    
    return(
        
            <main>

            <div className="form">
           
                <input type="text"  placeholder="shut up" className="form-input" />

                <input type="text" placeholder="and take my money" className="form-input"/>
              
                <button onClick={getMemeImage} className="form-button">Get a new meme image</button>
                
           </div>
   
    
            </main>)
        
}   