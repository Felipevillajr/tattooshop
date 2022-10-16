import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [word, setWord] = useState();

  something something darkside
  useEffect(() => {
    console.log(word);
  });

  const hChange = (e) => {
    setWord({ ...word, [e.target.name]: e.target.value });
  };
  x;

  const reset = (e) => {
    setWord("");
  };

  return (
    <div>
      <p>Broklyn Tattoo and Piercings</p>
      <input
        type="text"
        name="input"
        id="name"
        name="name"
        placeholder=""
        onChange={hChange}
        onSubmit={reset}
      />
      <button id="name" onClick={() => reset}></button>
    </div>
  );
}

export default App;
