import { useState } from "react";
// Event Handling
const About=()=>{
    var[text,setText]=useState("");
    function handleText(e){
        setText(e.target.value)
    }
    return(
        <div>
             <h2>This is About Component.</h2>
             <h2>TextArea</h2>
             {/* <textarea value={text} onChange={(event=>setText(event.target.value))}/> */}
             <textarea value={text} onChange={handleText}></textarea>
             <p>The Text is {text}</p>
        </div>
    );
};

export default About;