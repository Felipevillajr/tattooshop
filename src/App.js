import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/herobanner/herobanner";

function App() {
  // const [word, setWord] = useState();

  // useEffect(() => {
  //   console.log(word);
  // });

  // const hChange = (e) => {
  //   setWord({ ...word, [e.target.name]: e.target.value });
  // };
  // x;

  // const reset = (e) => {
  //   setWord("");
  // };

  return (
    <div>
      <Header />
      <Hero />
      <div>
        <p>Broklyn Tattoo and Piercings</p>
      </div>
      {/* <input
        type="text"
        name="input"
        id="name"
        name="name"
        placeholder=""
        onChange={hChange}
        onSubmit={reset}
      />
      <button id="name" onClick={() => reset}></button> */}
      <Footer />
    </div>
  );
}

export default App;
