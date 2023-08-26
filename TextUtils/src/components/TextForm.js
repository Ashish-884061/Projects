import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success")
    }
    const handleRClick = () => {
        let newText = text + "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum qui eos ea rerum hic labore nesciunt dolores magnam omnis pariatur accusamus minima atque cumque adipisci obcaecati, possimus recusandae quidem tempora ut aut dicta tempore. Aperiam, quod sunt! Eaque, rem nemo. Pariatur, eius sed quasi corporis exercitationem suscipit quisquam quas autem error atque enim nulla voluptatibus quia inventore et debitis vitae, soluta consequatur deleniti aliquid neque? Nostrum omnis laudantium error soluta doloribus blanditiis in provident excepturi sed asperiores! Eveniet sunt velit sed. Enim voluptas facere illum iure repudiandae quae sint, architecto quaerat illo distinctio, nihil veniam quo labore earum perspiciatis obcaecati!";
        setText(newText)
        props.showAlert("Random text Generated!", "success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared!", "success")
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied To Clipboard!", "success")
    }

    const handleExtraSpaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(","))
        props.showAlert("Extra Spaces Removed!", "success")
    }



    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'Black' }}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#13466e', color: props.mode === 'dark' ? 'white' : 'Black' }} value={text} onChange={handleOnChange} id="my-box" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-success mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleRClick}>Generate Random Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Clear Extra Spaces</button>


            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'Black' }}>
                <h2>Your text Summary</h2>
                <p><b>{text.split(" ").filter((element) => { return element.length !== 0 }).length}</b> words and <b>{text.length}</b> char</p>
                <p>Can be read in <b>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length}</b> minutes</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>

    )
}


