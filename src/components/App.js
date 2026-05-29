
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [input,setInput]=useState("");
  return (
    <div>
        {/* Do not remove the main div */}
        {/* App */}
        <label htmlFor="name">Enter your name:</label><br></br>
    <input type="text" name="name" id="name" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
    
    {
      input.length==0 ? (<h3></h3>):(<h3>Hello {input}</h3>)
    }
    </div>
  )
}

export default App
