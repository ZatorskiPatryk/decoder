import React, { Component } from "react";
import "./App.css";
class Ul extends Component {
  state = {
    value: "",
    msg: null,
  };
  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  codeFraction = (str) => {
    if (this.state.value === "") {
      alert("musisz wpisac wiadomosc !");
    }

    const arr1 = ["a", "b", "c", "d", "e"];
    const arr2 = ["f", "g", "h", "i", "j"];
    const arr3 = ["k", "l", "m", "n", "o"];
    const arr4 = ["p", "r", "s", "t", "u"];
    const arr5 = ["v", "w", "x", "y", "z"];
    const allarr = [arr1, arr2, arr3, arr4, arr5];
    let string = str.split("");

    for (let i = 0; i < allarr.length; i++) {
      for (let j = 0; j < allarr[i].length; j++) {
        for (let k = 0; k < string.length; k++) {
          if (string[k] === allarr[i][j]) {
            string[k] = j + 1 + "/" + (i + 1);
          }
        }
      }
    }
    string = string.join("");
    this.setState({
      msg: string,
    });
  };
  decodeFraction = (str) => {
    if (str.length % 3 === 0) {
      if (str.includes("/")) {
        // sprawadzanie czy szyfr ma odpowiednie znaki
        let string = str.split("");
        string = string.join("");
        string = string.split("");
        const arr1 = ["a", "b", "c", "d", "e"];
        const arr2 = ["f", "g", "h", "i", "j"];
        const arr3 = ["k", "l", "m", "n", "o"];
        const arr4 = ["p", "r", "s", "t", "u"];
        const arr5 = ["v", "w", "x", "y", "z"];
        const allarr = [arr1, arr2, arr3, arr4, arr5];
        let result = [];
        let i = 0;
        while (i < string.length) {
          result.push(allarr[string[i + 2] - 1][string[i] - 1]);
          i += 3;
        }

        result = result.join("");
        return result;
      } else {
        return alert("Nieprawidlowy szyfr! Nie użyłeś ułamka");
      }
    } else {
      alert("podales bledny szyfr sproboj jeszcze raz");
    }
  };
  decodeFractionBtn = (str) => {
    let array = str.split(" ");
    let result = [];
    let d;
    for (let i = 0; i < array.length; i++) {
      d = this.decodeFraction(array[i]);
      result[i] = d;
    }
    result = result.join(" ");
    this.setState({
      msg: result,
    });
  };
  render() {
    return (
      <>
        <h1>Szyfr Ulamkowy :</h1>
        <p>
          Każdy znak szyfru zapisuje się za pomocą ułamka zwykłego. Litery
          oddzielmy za pomocą dowolnego operatora matematycznego(Szyfry mogą się
          różnić ze względu na podział alfabetu).
        </p>
        <label>
          Tutaj wpisz wiadomość :<br></br>
          <textarea
            className="label"
            value={this.state.value}
            onChange={this.handleChange}
          ></textarea>
        </label>
        <br />
        <button
          onClick={() => {
            this.codeFraction(this.state.value);
          }}
        >
          Zakoduj wiadomość !
        </button>
        <br />
        <button
          onClick={() => {
            this.decodeFractionBtn(this.state.value);
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

export default Ul;
