import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log(" Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");

    }
    const handleLowerClick = () => {
        // console.log(" Lowercase was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success");

    }
    const handleClearClick = () => {
        // console.log(" Lowercase was clicked: " + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!","success");

    }
    const handleOnClick = (event) => {
        // console.log("On click");
        setText(event.target.value);//when we use a onChange event we get a free event to listen and by this we will be able change or write text in textarea

    }
    {/*const handleCopy =()=>{
        console.log("I am copy");
        var text = document.getElementById("myBox")
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!","success");
    }*/}
    const [text, setText] = useState("Enter text here");
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 className='mb-4' >{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleOnClick} value={text} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-3" disabled={text.length===0} onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleLowerClick}>Covert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 " onClick={handleClearClick}>Clear</button>
                {/* <button className="btn btn-primary my-2 mx-2"  onClick={handleCopy}>Copy</button> */}
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text Summary</h1>
                {/* <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>  ---->>> This using regular expression*/}
                <p>{text.split(" ").filter((element)=>{ return element.length!==0}).length} words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{ return element.length!==0}).length} Mintues read</p>
                <h2>Priview</h2>
                <p>{text.length > 0 ? text : 'Nothing to preview!'}</p>
            </div>
        </>
    )
}
