import React from "react";

const button = (props) => {
    return (<button disabled={props.disabled} onClick={props.clicked} type="button" className="btn btn-dark">Submit</button>);
}

export default button;