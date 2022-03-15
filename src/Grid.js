import { useState } from "react";
import "./Grid.css";
import "./Keyboard.css";
import words from "./words.json";

function Grid() {
  var [row, setRow] = useState("");
  var [attempt, setAttempt] = useState(0);
  var row1 = row.toUpperCase().split("");

  let randomNumber = new Date().getDate();
  var w = words.wordsData.find((item) => item.id === randomNumber);
  var dailyWord = w.value;

  function letterPressed(letter) {
    if (row.length < 5) {
      setRow(row + letter);
    }
  }

  function submitAttempt() {
    if (attempt < 5 && row.length === 5) {
      if (attempt === 4) {
        document.getElementById("playingGrid").style.display = "none";
      }
      const rowView = document.createElement("div");
      rowView.classList = "row";

      for (var i = 0; i < row.length; i++) {
        const divInside = document.createElement("div");
        const h = document.createElement("h3");
        const textnode = document.createTextNode(row[i]);
        h.appendChild(textnode);
        divInside.appendChild(h);
        divInside.classList = "letter";

        rowView.appendChild(divInside);
        document.getElementById("grid").appendChild(rowView);
      }
      if (rowView.textContent === dailyWord.toUpperCase()) {
        document.getElementById("playingGrid").style.display = "none";
      }
      checkAnswer(rowView);
      setRow("");
    }
  }

  function checkAnswer(a) {
    var r = document.getElementsByClassName("row");
    var ro = r[attempt];

    for (let i = 0; i < 5; i++) {
      if (
        dailyWord.toUpperCase().includes(ro.childNodes[i].textContent) === true
      ) {
        ro.childNodes[i].classList = "letterYellow";
        keyboardColorHint(ro.childNodes[i].textContent, "yellow");
      } else {
        ro.childNodes[i].classList = "letterGray";
        keyboardColorHint(ro.childNodes[i].textContent, "gray");
      }
      if (ro.childNodes[i].textContent === dailyWord[i].toUpperCase()) {
        ro.childNodes[i].classList = "letterGreen";
        keyboardColorHint(ro.childNodes[i].textContent, "green");
      }
    }
    setAttempt((attempt += 1));
  }
  function keyboardColorHint(k, color) {
    var key = document.getElementsByClassName(k);
    key[0].classList = k + " keyboardLetter " + color;
  }

  function deleteLastLetter() {
    if (row.length > 0) {
      row = row.slice(0, -1);
      setRow(row);
    }
  }
  return (
    <div className="main">
      <div>
        <div className="grid" id="grid"></div>
        <div className="grid" id="playingGrid">
          <div className="row">
            <div className="letter">
              <h3>{row1[0]}</h3>
            </div>
            <div className="letter">
              <h3>{row1[1]}</h3>
            </div>
            <div className="letter">
              <h3>{row1[2]}</h3>
            </div>
            <div className="letter">
              <h3>{row1[3]}</h3>
            </div>
            <div className="letter">
              <h3>{row1[4]}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="kContainer">
        <div className="digitalKeyboard">
          <div className="keyboardRow">
            <button
              className="Q keyboardLetter"
              onClick={() => letterPressed("Q")}
            >
              Q
            </button>
            <button
              className="W keyboardLetter"
              onClick={() => letterPressed("W")}
            >
              W
            </button>
            <button
              className="E keyboardLetter"
              onClick={() => letterPressed("E")}
            >
              E
            </button>
            <button
              className="R keyboardLetter"
              onClick={() => letterPressed("R")}
            >
              R
            </button>
            <button
              className="T keyboardLetter"
              onClick={() => letterPressed("T")}
            >
              T
            </button>
            <button
              className="Y keyboardLetter"
              onClick={() => letterPressed("Y")}
            >
              Y
            </button>
            <button
              className="U keyboardLetter"
              onClick={() => letterPressed("U")}
            >
              U
            </button>
            <button
              className="I keyboardLetter"
              onClick={() => letterPressed("I")}
            >
              I
            </button>
            <button
              className="O keyboardLetter"
              onClick={() => letterPressed("O")}
            >
              O
            </button>
            <button
              className="P keyboardLetter"
              onClick={() => letterPressed("P")}
            >
              P
            </button>
          </div>
          <div className="keyboardRow">
            <button
              className="A keyboardLetter"
              onClick={() => letterPressed("A")}
            >
              A
            </button>
            <button
              className="S keyboardLetter"
              onClick={() => letterPressed("S")}
            >
              S
            </button>
            <button
              className="D keyboardLetter"
              onClick={() => letterPressed("D")}
            >
              D
            </button>
            <button
              className="F keyboardLetter"
              onClick={() => letterPressed("F")}
            >
              F
            </button>
            <button
              className="G keyboardLetter"
              onClick={() => letterPressed("G")}
            >
              G
            </button>
            <button
              className="H keyboardLetter"
              onClick={() => letterPressed("H")}
            >
              H
            </button>
            <button
              className="J keyboardLetter"
              onClick={() => letterPressed("J")}
            >
              J
            </button>
            <button
              className="K keyboardLetter"
              onClick={() => letterPressed("K")}
            >
              K
            </button>
            <button
              className="L keyboardLetter"
              onClick={() => letterPressed("L")}
            >
              L
            </button>
            <button
              className="Ñ keyboardLetter"
              onClick={() => letterPressed("Ñ")}
            >
              Ñ
            </button>
          </div>
          <div className="keyboardRow">
            <button className="keyboardLetter" onClick={() => submitAttempt()}>
              ENTER
            </button>
            <button
              className="Z keyboardLetter"
              onClick={() => letterPressed("Z")}
            >
              Z
            </button>
            <button
              className="X keyboardLetter"
              onClick={() => letterPressed("X")}
            >
              X
            </button>
            <button
              className="C keyboardLetter"
              onClick={() => letterPressed("C")}
            >
              C
            </button>
            <button
              className="V keyboardLetter"
              onClick={() => letterPressed("V")}
            >
              V
            </button>
            <button
              className="B keyboardLetter"
              onClick={() => letterPressed("B")}
            >
              B
            </button>
            <button
              className="N keyboardLetter"
              onClick={() => letterPressed("N")}
            >
              N
            </button>
            <button
              className="M keyboardLetter"
              onClick={() => letterPressed("M")}
            >
              M
            </button>
            <button
              className="keyboardLetter"
              onClick={() => deleteLastLetter()}
            >
              DEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid;
