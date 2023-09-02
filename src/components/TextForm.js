import React, { useState }  from 'react'


export default function TextForm(props) {
  
  const [text , setText] = useState("textt");
    let y = text.split(" ").length;


  const handleUpClick = ()=>{
      console.log("btn clicked" + text);
      let newTXT = text.toUpperCase();
      setText(newTXT);
  }
  const handleDownClick = ()=>{
    console.log("btn clicked" + text);
      let lowerTxt = text.toLowerCase();
      setText(lowerTxt);
  }

  const handleSpaceClick = ()=>{
    console.log("btn clicked" + text);
      let trimmedTxt = text.trim();
      setText(trimmedTxt);
  }
  const handleClearClick = ()=>{
    
    let clearTxt = '';
      setText(clearTxt);
      y = 0;
      
      
  }
  const handleCopy = ()=>{
    console.log("Copy tect clicked");
    let x = document.getElementById("text")
    x.select();
    x.setSelectionRange(0,999);
    navigator.clipboard.writeText(x.value)

  }

  const handleChange= (event)=>{
    console.log("change");
    setText(event.target.value);
  }

    

    // function change(val) {
    //   setText(val);
    // }
    


   


    
  return (
    <>
    <div className="container">

            <h1>{props.heading}</h1>
                
            <div className="mb-3">
            
            <textarea className="form-control" value={text} onChange={handleChange}  id="text" rows="10"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert To UpperCase</button>
            <button className="btn btn-primary" id ="btn2" onClick={handleDownClick}>Convert To LowerCase</button>
            <button className="btn btn-primary" id ="btn3" onClick={handleSpaceClick}>Remove Spaces</button>
            <button className="btn btn-primary mx-1 " id ="btn5" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-danger mx-1 " id ="btn4" onClick={handleClearClick}>Clear</button>
            
    </div>

    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>total characters : {text.length}</p>
        <p>total words : {y}</p>
    </div>
</>
  )
}
