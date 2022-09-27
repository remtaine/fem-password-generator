import "./App.css";
import ChecklistItem from "./components/ChecklistItem";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="App bg-fem-400 min-h-screen flex items-center justify-center selection:bg-fem-500 selection:text-fem-400">
      <main className="mx-4 flex flex-col gap-2 max-w-[360px] w-full text-fem-300 px-2">
        <h1 className="mx-auto text-fem-200 text-2xl">Password Generator</h1>
        <div className="bg-fem-100 flex justify-between pl-4 pr-2 items-center shadow ">
          <span className="">P4$5W0rD!1</span>
          <button className="p-2">
            <i className="fa-regular fa-copy text-fem-500"></i>
          </button>
        </div>
        <div className="bg-fem-100 shadow px-4 py-4 flex flex-col gap-2">
          <Slider />
          {/* TODO add custom slider that changes number */}
          <div className="flex flex-col">
            {/* TODO add custom checkbox components */}
            <ChecklistItem>Include Uppercase Letters</ChecklistItem>
            <ChecklistItem>Include Lowercase Letters</ChecklistItem>
            <ChecklistItem>Include Numbers</ChecklistItem>
            <ChecklistItem>Include Symbols</ChecklistItem>
          </div>
          <div className="bg-fem-400 p-2">
            <span className="uppercase text-fem-200">Strength</span>
            {/* TODO create text reponsive to strength level */}
            {/* TODO create bar component */}
          </div>
          <button className="bg-fem-500 text-fem-400 hover:bg-fem-100 outline-fem-500 outline outline-1 duration-300 hover:text-fem-500 uppercase flex items-center justify-center w-full gap-2 py-1 px-2">
            <span className="">Generate</span>
            <i className="fa-solid fa-arrow-right text-xs"></i>
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
