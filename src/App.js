import React, { Component } from "react";
import "./App.css";
//import Ge from "./Ge";
//import Morse from "./Morse";
//import Ul from "./Ul";
import Cezar from "./Cezar";
import Start from "./Start";

class App extends Component {
  state = {
    value: "",
  };
  handleOptionChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  selectValue = () => {
    if (this.state.value === "0") {
      return <Cezar></Cezar>;
    } else if (this.state.value === "1") {
      return console.log("cezar"); //<Morse></Morse>;
    } else if (this.state.value === "2") {
      return console.log("ge"); //<Ge></Ge>;
    } else if (this.state.value === "3") {
      return console.log("ul"); //<Ul></Ul>;
    } else {
      return <Start></Start>;
    }
  };
  render() {
    return (
      <>
        <h1>Witaj w Aplikacji szyfrującej!</h1>
        <label>
          <select name="" id="" onChange={this.handleOptionChange}>
            <option value="0">Szyfr cezara</option>
            <option value="1">dupa</option>
            <option value="2">jasia</option>
            <option value="3">ww</option>
            <option value="4">aaa</option>
          </select>
        </label>
        {this.selectValue()}
      </>
    );
  }
}

export default App;
