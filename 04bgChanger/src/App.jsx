import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  const bgChangeRed = () => {
    setColor("red");
  };

  const bgChangeBlue = () => {
    setColor("blue");
  };

  const bgChangeGreen = () => {
    setColor("green");
  };
  return (
    <div
      className="w-full min-h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={bgChangeRed}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={bgChangeGreen}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
            onClick={bgChangeBlue}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
