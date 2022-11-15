import { React, useEffect, useState } from "react";

export default function Meme() {      
    
     const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemes, setAllMemes] = useState([])

    /**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */

    useEffect(()=> {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json()
            .then(data => setAllMemes(data.data.memes)))

        /*fetching data using async/await*/

        // async function getMemes () {
        //     const res = await fetch("https://api.imgflip.com/get_memes")
        //     const data = await res.json()
        //     setAllMemes(data.data.memes)
        // }
        // getMemes()

        /*fetching data using async/await*/
    }, [])
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    return (
        <div className="form">
            <div className="form-text">
                <input 
                type = "Text" 
                placeholder="Top text"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
                />
                <input 
                type = "Text" 
                placeholder="Bottom text"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                />                
            </div>  
            <div className="memeButtonContainer">
                <button onClick={getMemeImage} className="button">Get a new meme image</button>
            </div>
            <div className="meme-container">
                <img src = {meme.randomImage} alt = "generated-meme"/>
                <h2 className="meme--text">{meme.topText}</h2>
                <h2 className="meme--text">{meme.bottomText}</h2>
            </div>         
        </div>
               
    )
}