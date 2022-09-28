import { useEffect, useState } from "react";
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
  const [passwordScore, setPasswordScore] = useState(3);

  useEffect(() => {
    setPasswordScore(getPasswordStrength());
  }, [password]);

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
    // TODO if (NO CHECKBOXES ARE CHECKED) return "";

    const answer = "ban";
    console.log(answer);
    return answer;
  };

  const getPasswordStrength = function () {
    console.log("checking password: " + password);
    // characterPoolTotalLength is sum of each characterPoolLength[i] if hasCharacterPool[i]

    // formula is:
    // entropy = passwordLength * log(characterPoolTotalLength) / log(2)
    // TODO change characterPool total based on hasCharacterPool based on MANUAL SEARCH NOT CHECKBOXES
    let hasCharacterPool = [false, false, false, false];

    let entropy =
      characterPoolTotal.length === 0
        ? 0
        : password.length * (Math.log(characterPoolTotal.length) / Math.log(2));

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
      <main className="font-JetBrains mx-1 flex flex-col gap-2 max-w-[360px] w-full text-fem-300 px-2">
        <h1 className="mx-auto text-fem-200 text-base">Password Generator</h1>
        <div className="bg-fem-100 flex pl-4 pr-2 items-center shadow ">
          <input
            type="text"
            className="bg-transparent accent-fem-300 shrink min-w-0"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            onClick={flashCopy}
            className="px-2 py-3 flex gap-2 items-center text-fem-500 flex-none"
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
              <BarScore score={passwordScore} />
              <Bars score={passwordScore} />
            </div>
          </div>
          <button
            onClick={() => {
              setPassword(generatePassword());
            }}
            className="bg-fem-500 text-fem-400 hover:bg-fem-100 outline-fem-500 outline outline-1 duration-300 hover:text-fem-500 uppercase flex items-center justify-center w-full gap-2 py-1 px-2"
          >
            <span className="text-xs py-2">Generate</span>
            <i className="fa-solid fa-arrow-right text-xs"></i>
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
