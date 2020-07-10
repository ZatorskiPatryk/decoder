import React, { Component } from "react";
import "./App.css";
import Ge from "./Ge";
import Morse from "./Morse";
import Ul from "./Ul";
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
      return <Start></Start>;
    } else if (this.state.value === "1") {
      return <Cezar></Cezar>;
    } else if (this.state.value === "2") {
      return <Morse></Morse>;
    } else if (this.state.value === "3") {
      return <Ge></Ge>;
    } else if (this.state.value === "4") {
      return <Ul></Ul>;
    } else {
      return <Start></Start>;
    }
  };
  render() {
    return (
      <>
        <h2>Witaj w Aplikacji szyfrującej!</h2>
        <label>
          <select
            name=""
            id=""
            onChange={this.handleOptionChange}
            className="select"
          >
            <option value="0">Wybierz szyfr</option>
            <option value="1">Szyfr Cezara</option>
            <option value="2">Alfabet Morse'a</option>
            <option value="3">GA-DE-RY-PO-LU-KI</option>
            <option value="4">Szyfr Ułamkowy</option>
          </select>
        </label>
        {this.selectValue()}
      </>
    );
  }
}

export default App;
