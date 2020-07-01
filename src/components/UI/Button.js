import React from "react";

const button = (props) => {
    return (<button onClick={props.clicked} type="button" className="btn btn-dark">Submit</button>);
}

export default button;