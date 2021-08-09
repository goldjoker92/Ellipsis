import React, { useState } from 'react'
import './Ellipsis.css'


const Ellipsis = () => {

  const [text, setText] = useState('');
  const [fullText, setFullText] = useState(false);
  const [formattedText, setFormattedText] = useState(undefined);
  const [length, setLength] = useState(0);

 

  const handleChange = (e) => {
    setText(e.target.value);
    setLength(e.target.value.length);
    if(length >= 20) {
      setFormattedText( text.split('').slice(0,16).concat(['.','.','.']).join(''))
    } else {
      setFormattedText(undefined)
    }
    
  }
    const handleClick = () => {
 if(formattedText) {
   setFullText(!fullText);
 }
    }
    const part1 = text.split('').slice(0,16);
    const part2 = text.split('').slice(20,text.length);
    const full = part1.concat(part2).join('');

        return (
           
        <div>
            <div className= "container-ellipsis">
            <h1>Text with Ellipsis</h1>
            </div>

            <div className ="form">
               <label htmlFor="text"
                      className="form-label">
                        Text
                </label>

                
                <input 
                      type="text" 
                      placeholder="Enter your text" 
                      value = {(formattedText && !fullText) ? formattedText : text}  
                      onChange={handleChange}
                      onClick={handleClick}        
                />
            </div>  
            <br />
{formattedText && (
            <div>
{full}
            </div>
           )} 
        </div>     
    )
}


export default Ellipsis