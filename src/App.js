import React, { Component } from 'react';
import axios from "axios";

import './App.css';
import Navbar from "./components/UI/Navbar";
import InputField from "./components/inputField/InputField";
import Button from "./components/UI/Button";
import Keywords from "./components/Sentiment-Result/Keywords";

class App extends Component {

  state = {
    inputText: "",
    keywords: null,
    sentiment: null,
  }

  getSentimentHandler = () => {
    axios.post("https://sentimentanalysis-node-service.herokuapp.com/get-sentiment", {
      review: this.state.inputText
    }).then((response) => {
      console.log(response);
      this.setState({
        keywords: response.data.keywords,
        sentiment: response.data.sentiment
      })
    }).catch((err) => {
      console.log(err);
    });
  }

  onInputChangedHandler = (event) => {
    this.setState({
      inputText: event.target.value,
      disableButton: false
    });
  }


  render() {
    let disableButton = true;
    if (this.state.inputText.length > 0) {
      disableButton = false;
    }

    return (
      <div className="App">
        <Navbar />
        <InputField changed={this.onInputChangedHandler} />
        <Button clicked={this.getSentimentHandler} disabled={disableButton} />
        <Keywords keywords={this.state.keywords} sentiment={this.state.sentiment} />
      </div>
    );
  }
}

export default App;
