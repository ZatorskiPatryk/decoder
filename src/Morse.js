import React, { Component } from "react";
import "./App.css";

class Morse extends Component {
  state = {
    value: "",
    msg: null,
  };
  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  decode(str) {
    let string = str.split(" ");
    for (let i = 0; i < string.length; i++) {
      switch (string[i]) {
        case ".-":
          string[i] = "a";
          break;
        case "-...":
          string[i] = "b";
          break;
        case "|":
          string[i] = " ";
          break;
        case "-.-.":
          string[i] = "c";
          break;
        case "-..":
          string[i] = "d";
          break;
        case ".":
          string[i] = "e";
          break;
        case "..-.":
          string[i] = "f";
          break;
        case "--.":
          string[i] = "g";
          break;
        case "....":
          string[i] = "h";
          break;
        case "..":
          string[i] = "i";
          break;
        case ".---":
          string[i] = "j";
          break;
        case "-.-":
          string[i] = "k";
          break;
        case ".-..":
          string[i] = "l";
          break;
        case "--":
          string[i] = "m";
          break;
        case "-.":
          string[i] = "n";
          break;
        case "---":
          string[i] = "o";
          break;
        case ".--.":
          string[i] = "p";
          break;
        case "--.-":
          string[i] = "q";
          break;
        case ".-.":
          string[i] = "r";
          break;
        case "...":
          string[i] = "s";
          break;
        case "-":
          string[i] = "t";
          break;
        case "..-":
          string[i] = "u";
          break;
        case "...-":
          string[i] = "v";
          break;
        case ".--":
          string[i] = "w";
          break;
        case "-..-":
          string[i] = "x";
          break;
        case "-.--":
          string[i] = "y";
          break;
        case "--..":
          string[i] = "z";
          break;
        case ".----":
          string[i] = "1";
          break;
        case "..---":
          string[i] = "2";
          break;
        case "...--":
          string[i] = "3";
          break;
        case "....-":
          string[i] = "4";
          break;
        case ".....":
          string[i] = "5";
          break;
        case "-....":
          string[i] = "6";
          break;
        case "--...":
          string[i] = "7";
          break;
        case "---..":
          string[i] = "8";
          break;
        case "----.":
          string[i] = "9";
          break;
        case "-----":
          string[i] = "0";
          break;
      }
    }
    string = string.join("");
    this.setState({
      msg: string,
    });
  }
  code(str) {
    str = str.toLowerCase();
    let string = str.split("");
    for (let i = 0; i < string.length; i++) {
      switch (string[i]) {
        case "a":
          string[i] = ".-";
          break;
        case "b":
          string[i] = "-...";
          break;
        case " ":
          string[i] = "|"; // spacja nie działa nie znaju pomeczu , ja nie podumal
          break;
        case "c":
          string[i] = "-.-.";
          break;
        case "d":
          string[i] = "-..";
          break;
        case "e":
          string[i] = ".";
          break;
        case "f":
          string[i] = "..-.";
          break;
        case "g":
          string[i] = "--.";
          break;
        case "h":
          string[i] = "....";
          break;
        case "i":
          string[i] = "..";
          break;
        case "j":
          string[i] = ".---";
          break;
        case "k":
          string[i] = "-.-";
          break;
        case "l":
          string[i] = ".-..";
          break;
        case "m":
          string[i] = "--";
          break;
        case "n":
          string[i] = "-.";
          break;
        case "o":
          string[i] = "---";
          break;
        case "p":
          string[i] = ".--.";
          break;
        case "q":
          string[i] = "--.-";
          break;
        case "r":
          string[i] = ".-.";
          break;
        case "s":
          string[i] = "...";
          break;
        case "t":
          string[i] = "-";
          break;
        case "u":
          string[i] = "..-";
          break;
        case "v":
          string[i] = "...-";
          break;
        case "w":
          string[i] = ".--";
          break;
        case "x":
          string[i] = "-..-";
          break;
        case "y":
          string[i] = "-.--";
          break;
        case "z":
          string[i] = "--..";
          break;
        case "1":
          string[i] = ".----";
          break;
        case "2":
          string[i] = "..---";
          break;
        case "3":
          string[i] = "...--";
          break;
        case "4":
          string[i] = "....-";
          break;
        case "5":
          string[i] = ".....";
          break;
        case "6":
          string[i] = "-....";
          break;
        case "7":
          string[i] = "--...";
          break;
        case "8":
          string[i] = "---..";
          break;
        case "9":
          string[i] = "----.";
          break;
        case "0":
          string[i] = "-----";
          break;
      }
    }
    string = string.join(" ");
    this.setState({
      msg: string,
    });
  }
  render() {
    return (
      <>
        <h1>Alfabet Morsa:</h1>
        <p>
          To jeden z najpopularniejszych sposobów kodowania wiadomości za pomocą
          kresek i kropek. Każdej literze odpowiada konkretny ciąg kresek i
          kropek właśnie.
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
            this.decode(this.state.value);
          }}
        >
          Odszyfruj wiadomość
        </button>
        <br />
        <button
          onClick={() => {
            this.code(this.state.value);
          }}
        >
          Zaszyfruj wiadomość
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

export default Morse;
