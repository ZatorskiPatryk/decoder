import React, { Component } from "react";
import "./App.css";
//import Ge from "./Ge";
//import Morse from "./Morse";
//import Ul from "./Ul";
//import Cezar from "./Cezar";
const alfabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
class App extends Component {
  state = {
    value: "",
    number: null,
    msg: null,
  };
  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  handleNumberChange = (e) => {
    this.setState({
      number: e.target.value,
    });
  };

  codeCesar = (x) => {
    let number = this.state.number;
    number = number * x;
    if (number > 13 || number < -13) {
      return alert("zły zakres kodowania");
    } else if (typeof number === "string") {
      return alert("przesuniecie musi byc liczbą !");
    }
    let string = this.state.value.split("");
    let arr = [];
    for (let i = 0; i < string.length; i++) {
      let x;
      x = alfabet.indexOf(string[i]);
      x = x + number;
      if (x > 25) {
        x = x - 26;
      } else if (x < 0) {
        x = x + 26;
      }
      if (alfabet.indexOf(string[i]) === -1) {
        arr.push(" ");
      } else {
        arr.push(x);
        string[i] = alfabet[arr[i]];
      }
    }
    string = string.join("");
    this.setState({
      msg: string,
    });
  };
  handleClick1 = () => {
    this.codeCesar(1);
  };
  handleClick2 = () => {
    this.codeCesar(-1);
  };
  render() {
    return (
      <>
        <h1>szyfr cezara polega na :</h1>
        <label>
          Tutaj wpisz wiadomość :<br></br>
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
          ></textarea>
        </label>
        <label>
          Tutaj wybierz "przesuniecie" pomiedzy -13 a 13 :<br></br>
          <input type="number" onChange={this.handleNumberChange} />
        </label>
        <br />
        <button
          onClick={() => {
            this.codeCesar(1);
          }}
        >
          Zakoduj wiadomość !
        </button>
        <br />
        <button
          onClick={() => {
            this.codeCesar(-1);
          }}
        >
          Dekoduj wiadomość !
        </button>
        <div>{this.state.msg}</div>
      </>
    );
  }
}

export default App;
