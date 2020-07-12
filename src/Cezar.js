import React, { Component } from "react";
import "./App.css";
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
    } else if (this.state.number === null) {
      return alert("nie podales szyfru !");
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
  render() {
    return (
      <>
        <h1>Na czym polega szyfr cezara zwany też szyfrem przesuwającym?</h1>
        <p>
          W szyfrach tego typu litera tekstu jawnego (niezaszyfrowanego)
          zastępowana jest inną, oddaloną od niej o stałą liczbę pozycji w
          alfabecie.
        </p>
        <br />
        <label>
          Tutaj wpisz wiadomość :
          <br />
          <textarea
            className="label"
            value={this.state.value}
            onChange={this.handleChange}
          ></textarea>
        </label>
        <br />
        <label>
          Tutaj wybierz "przesunięcie" pomiedzy -13 a 13 :<br></br>
          <input
            type="number"
            onChange={this.handleNumberChange}
            className="label"
          />
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
        <div className="solution">
          {this.state.msg ? `Rozwiązanie :` : null}
          <br />
          {this.state.msg ? this.state.msg : null}
        </div>
      </>
    );
  }
}

export default App;
