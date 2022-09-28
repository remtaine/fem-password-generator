import { useState } from "react";
import "./App.css";
import Bars from "./components/Bars";
import BarScore from "./components/BarScore";
import ChecklistItem from "./components/ChecklistItem";
import Slider from "./components/Slider";

function App() {
  const lettersUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lettersLowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "1234567890";
  const symbols = "~!@#$%^&*()-=_+[{]}\\|;':\",.<>/?";
  const characterPoolLengths = [26, 26, 10, 31];

  let characterPoolTotal =
    lettersUppercase + lettersLowercase + numbers + symbols;

  const [copyActive, setCopyActive] = useState(false);
  const [password, setPassword] = useState("P4$5W0rD!1");
  // TODO add password length from slider
  const [passwordLength, setPasswordLength] = useState(10);
  // TODO add hasCharacterPool from checkboxes
  const [hasCharacterPool, setHasCharacterPool] = useState([
    false,
    false,
    false,
    false,
  ]);

  // TODO setup context

  const flashCopy = function () {
    navigator.clipboard.writeText(password);
    // alert("Copied the text: " + password);

    setCopyActive(true);
    setTimeout(() => {
      setCopyActive(false);
    }, 1500);
  };

  // TODO setup password generator based on values
  const generatePassword = function () {
    if (passwordLength === 0 || characterPoolTotal.length === 0) return "";

    return "LEZGO";
  };

  const getPasswordStrength = function (passwordLength, hasCharacterPool) {
    // passwordLength is slider value
    // hasCharacterPool is based on checkboxes
    // characterPoolTotalLength is sum of characterPoolLength[i] * hasCharacterPool[i]

    // formula is:
    // entropy = passwordLength * log(characterPoolTotalLength) / log(2)
    let entropy =
      passwordLength === 0 || characterPoolTotal.length === 0
        ? 0
        : passwordLength * (Math.log(characterPoolTotal.length) / Math.log(2));

    // 25 identifies a poor password SCORE = 1
    // between 25 and 50 is a weak password SCORE = 2
    // For 50 to 75 we have a reasonable password SCORE = 3
    // 75 and 100 is a very good password SCORE = 4
    // Over 100 is an excellent password. SCORE = 4

    // return numb from 1 to 4
    const answer = Math.min(Math.floor(entropy / 25), 3) + 1;
    return answer;
  };

  return (
    <div className="App bg-fem-400 min-h-screen flex items-center justify-center selection:bg-fem-500 selection:text-fem-400">
      <main className="mx-1 flex flex-col gap-2 max-w-[360px] w-full text-fem-300 px-2">
        <h1 className="mx-auto text-fem-200 text-base">Password Generator</h1>
        <div className="bg-fem-100 flex justify-between pl-4 pr-2 items-center shadow ">
          <span className="">{password}</span>
          <button
            onClick={flashCopy}
            className="px-2 py-3 flex gap-2 items-center text-fem-500"
          >
            <span
              className={
                "uppercase text-xs duration-200" +
                " " +
                (copyActive ? "opacity-100" : "opacity-0")
              }
            >
              copied
            </span>
            <i className="fa-regular fa-copy "></i>
          </button>
        </div>
        <div className="bg-fem-100 shadow px-4 py-4 flex flex-col gap-3">
          <Slider />
          <div className="flex flex-col gap-1">
            <ChecklistItem>Include Uppercase Letters</ChecklistItem>
            <ChecklistItem>Include Lowercase Letters</ChecklistItem>
            <ChecklistItem>Include Numbers</ChecklistItem>
            <ChecklistItem>Include Symbols</ChecklistItem>
          </div>
          <div className="bg-fem-400 px-2 py-3 flex items-center justify-between">
            <span className="uppercase text-fem-200 text-xs">Strength</span>
            <div className="flex gap-1 items-center">
              <BarScore
                score={getPasswordStrength(passwordLength, hasCharacterPool)}
              />
              <Bars
                score={getPasswordStrength(passwordLength, hasCharacterPool)}
              />
            </div>
          </div>
          <button className="bg-fem-500 text-fem-400 hover:bg-fem-100 outline-fem-500 outline outline-1 duration-300 hover:text-fem-500 uppercase flex items-center justify-center w-full gap-2 py-1 px-2">
            <span className="text-xs py-2">Generate</span>
            <i className="fa-solid fa-arrow-right text-xs"></i>
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
