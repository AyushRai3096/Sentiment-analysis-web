import React, { Component } from 'react';
import axios from "axios";

import './App.css';
import Navbar from "./components/UI/Navbar";
import InputField from "./components/inputField/InputField";
import Button from "./components/UI/Button";
import Keywords from "./components/Sentiment-Result/Keywords";

class App extends Component {

  state = {
    inputText: null,
    keywords: null,
    sentiment: null
  }

  getSentimentHandler = () => {
    axios.post("https://sentimentanalysis-node-service.herokuapp.com/get-sentiment", {
      review: this.state.inputText
    }).then((response) => {
      console.log(response);
    }).catch((err) => {
      console.log(err);
    });
  }

  onInputChangedHandler = (event) => {
    this.setState({
      inputText: event.target.value
    });
  }


  render() {
    return (
      <div className="App">
        <Navbar />
        <InputField changed={this.onInputChangedHandler} />
        <Button clicked={this.getSentimentHandler} />
        <Keywords />
      </div>
    );
  }
}

export default App;
