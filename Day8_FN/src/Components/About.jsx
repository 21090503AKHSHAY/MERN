//Event Handling

import React,{useState} from 'react'


const About = () => {
  const [text,setText] = useState("akhshay")
  const handleText = (event) =>{
    setText(event.target.value)
  }
  
  return (
    <div className='about'>
        <h1>About Us</h1>
      <h3> 
      Welcome to Coco Website, your ultimate destination for all things chocolate! Explore a world of delightful treats, from rich handcrafted truffles to gourmet chocolate bars, 
      and indulge in the art of fine chocolate-making. Let your sweet cravings be satisfied with every click!</h3>
      <h2>TextArea :</h2>
      <textarea value = {text} onChange={handleText}></textarea>
      <p>The text is {text}</p>
    </div>
  )
}

export default About