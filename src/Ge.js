import React, { Component } from "react";
import "./App.css";

class Ge extends Component {
  state = {
    value: "",
    key: null,
    msg: null,
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  handleKeyChange = (e) => {
    this.setState({
      key: e.target.value,
    });
  };
  codeGe = (str, Cipher) => {
    if (Cipher.length > 25) {
      return alert("za dlugi szyfr");
    }
    if (
      Cipher.length % 2 === 0 &&
      Cipher.length !== 2 &&
      Cipher.length !== 8 &&
      Cipher.length !== 14 &&
      Cipher.length !== 20
    ) {
      return alert(
        'nieprawidlowy szyfr! pamietaj aby pary liter oddzielic "-"!'
      );
    }
    let string = str.split(""); //string is array of sings now;
    let cipher = Cipher.split("-");
    cipher = cipher.join("");
    cipher = cipher.split(""); // cipher is a array of sings now, without "-";
    for (let i = 0; i < string.length; i++) {
      for (let n = 0; n < cipher.length; n += 2) {
        if (string[i] === cipher[n]) {
          string[i] = cipher[n + 1];
        } else if (string[i] === cipher[n + 1]) {
          string[i] = cipher[n];
        }
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
        <h1>Stwórz własny szyfr typu GA-DE-RY-PO-LU-KI :</h1>
        <p>
          Wyraz zostaje podzielony na części, w których każda składa się z dwóch
          kolejnych liter np: GA - DE - RY - PO - LU - KI. Jeśli jakieś litery
          występują w kluczu obok siebie - zostają zastąpione na sąsiadującą,
          jeśli nie występuje - pozostaje bez zmian. Deszyfrowanie jest procesem
          odwrotnym.
        </p>
        <p>Pzykład: Klucz GA-DE-RY-PO-LU-KI Wiadomość: Orzechy=pyzdchr </p>

        <label>
          Tutaj wpisz wiadomość :<br></br>
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
          ></textarea>
        </label>
        <br />
        <label>
          Tutaj wpisz klucz do szyfru(pamiętaj, litery nie mogą się powtarzać!)
          :<br></br>
          <input type="tekst" onChange={this.handleKeyChange} />
        </label>
        <br />
        <button
          onClick={() => {
            this.codeGe(this.state.value, this.state.key);
          }}
        >
          Zakoduj/Odkoduj wiadomość !
        </button>
        <br />
        <div>{this.state.msg}</div>
      </>
    );
  }
}

export default Ge;
