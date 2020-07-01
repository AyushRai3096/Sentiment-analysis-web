import React from "react";

const keywords = (props) => {
    let result = <p> Please enter some text in the text box above and click submit </p>
    if (props.keywords && props.sentiment) {
        let convertedSentiment = (JSON.parse(props.sentiment));
        convertedSentiment = convertedSentiment.sentiment;
        console.log(typeof (convertedSentiment));
        result = <div className="card-body">
            <h5 className="card-title">Response after sentiment analysis is {convertedSentiment}</h5>
            <p className="card-text">Following Keywords were found:</p>
            <ul >
                {props.keywords.map((keyword, index) => {
                    return <li key={index} style={{ listStyle: "none" }}>{keyword}</li>
                })}

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