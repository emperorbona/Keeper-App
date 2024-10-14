import React, { useState } from "react";

function CreateArea(props) {

    const [inputText, setInputText] = useState({
        title : "",
        content : ""
    })

    function handleChange(e){
        const {name, value} = e.target
        setInputText((prevValue)=>{
            return{
                ...prevValue,
                [name] : value
            }
        })
    
    }

    function handleSubmit(e){
        props.onAdd(inputText)
        setInputText({
            title : "",
            content : ""
        })
        e.preventDefault()
    }

  return (
    <div>
      <form>
        <input name="title"
         placeholder="Title" 
         value={inputText.title}
         onChange={handleChange}
         />
        <textarea name="content"
         placeholder="Take a note..."
         rows="3" 
         value={inputText.content}
         onChange={handleChange}
         />
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
