import React from "react";

import "./InputField.css";

const inputField = (props) => {
    return (<div className="form-group InputFieldMargin container">
        <label htmlFor="exampleFormControlTextarea1">Enter the text here</label>
        <textarea onChange={(event)=>props.changed(event)} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>);
}

export default inputField;