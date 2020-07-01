import React from "react";

const keywords = (props) => {
    let result = <p> Please enter some text in the text box above and click submit </p>
    if (props.keywords) {
        result = <div className="card-body">
            <h5 className="card-title">Response from sentiment analysis</h5>
            <p className="card-text">Following Keywords were found:</p>
            <ul >
                <li style={{ listStyle: "none" }}>Item 1</li>
                <li style={{ listStyle: "none" }}>Item 2</li>
                <li style={{ listStyle: "none" }}>Item 3</li>
            </ul>

        </div>
    }
    return (<div className="card">
        <div style={{ height: "50px" }}></div>
        <h5 className="card-header">Sentiment Analysis Result</h5>
        {result}
    </div>);
}

export default keywords;