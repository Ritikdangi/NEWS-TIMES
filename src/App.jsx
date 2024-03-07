import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-[100vh] flex items-center justify-center bg-gray-400">
      <h1 className="text-3xl text-center  font-bold underline">
        React Tailwind Starter Pack Is Working
      </h1>
    </div>
  );
}

export default App;
