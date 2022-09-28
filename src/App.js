import { useState } from "react";
import "./App.css";
import Bars from "./components/Bars";
import BarScore from "./components/BarScore";
import ChecklistItem from "./components/ChecklistItem";
import Slider from "./components/Slider";

function App() {
  const [copyActive, setCopyActive] = useState(false);
  const [password, setPassword] = useState("P4$5W0rD!1");
  const flashCopy = function () {
    setCopyActive(true);
    setTimeout(() => {
      setCopyActive(false);
    }, 1500);
  };

  const generatePassword = function () {
    const lettersUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lettersLowercase = "abcdefghijklmnopqrstuvwxyz";
    const letters = "abcdefghijklmnopqrstuvwxyz";
    return false;
  };

  return (
    <div className="App bg-fem-400 min-h-screen flex items-center justify-center selection:bg-fem-500 selection:text-fem-400">
      <main className="mx-1 flex flex-col gap-2 max-w-[360px] w-full text-fem-300 px-2">
        <h1 className="mx-auto text-fem-200 text-base">Password Generator</h1>
        <div className="bg-fem-100 flex justify-between pl-4 pr-2 items-center shadow ">
          <span className="">{password}</span>
          {/* TODO make copy pasting work https://www.reddit.com/r/learnjavascript/comments/sobm0d/trying_to_copy_a_link_to_a_users_clipboard/ */}
          <button
            onClick={flashCopy}
            className="px-2 py-3 flex gap-2 items-center text-fem-500"
          >
            <span
              className={
                "uppercase text-xs duration-200 ease-in-out" +
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
          {/* TODO add custom slider that changes number */}
          <div className="flex flex-col gap-1">
            {/* TODO add custom checkbox components */}
            <ChecklistItem>Include Uppercase Letters</ChecklistItem>
            <ChecklistItem>Include Lowercase Letters</ChecklistItem>
            <ChecklistItem>Include Numbers</ChecklistItem>
            <ChecklistItem>Include Symbols</ChecklistItem>
          </div>
          <div className="bg-fem-400 px-2 py-3 flex items-center justify-between">
            <span className="uppercase text-fem-200 text-xs">Strength</span>
            {/* TODO create text reponsive to strength level */}
            {/* TODO create bar component */}
            <div className="flex gap-1 items-center">
              <BarScore />
              <Bars />
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
