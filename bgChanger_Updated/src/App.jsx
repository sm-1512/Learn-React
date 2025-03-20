import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  const colors = [
    { name: "Red", value: "red" },
    { name: "Green", value: "green" },
    { name: "Blue", value: "blue" },
    { name: "Lavender", value: "#E6E6FA" },
    { name: "Olive", value: "#808000" },
    { name: "Pink", value: "#FFC0CB" },
    { name: "Purple", value: "#800080" },
    { name: "Yellow", value: "#FFFF00" },
    { name: "Orange", value: "#FFA500" },
    { name: "Teal", value: "#008080" },
    { name: "Black", value: "#000000" },
    { name: "White", value: "#FFFFFF" },
  ];

  return (
    <div
      className="w-full min-h-screen duration-300 flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap gap-3 shadow-lg bg-white/30 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/50">
          {colors.map((col) => (
            <button
              key={col.value}
              className="outline-none px-4 py-2 rounded-full text-white shadow-md transition-transform transform hover:scale-105 focus:scale-105"
              style={{ backgroundColor: col.value }}
              onClick={() => setColor(col.value)}
            >
              {col.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
