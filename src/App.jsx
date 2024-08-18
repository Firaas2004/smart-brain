import React, { useState } from "react";
import Nav from "./components/Nav";
import Logo from "./components/Logo";
import "./App.css";
import ParticlesComponent from "./components/particles";
import ImageLinkForm from "./components/ImageLinkForm";
import Rank from "./components/Rank";

const App = () => {
  const [input, setInput] = useState("");
  const inputHandler = (event) => {
    const newValue = event.target.value;
    setInput(newValue);
    console.log(newValue);
  };
  const onSubmit = () => {
    console.log("hello");
  };
  return (
    <div>
      <ParticlesComponent id="particles" />
      <Nav />
      <Logo />
      <Rank />
      <ImageLinkForm
        input={input}
        inputHandler={inputHandler}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default App;
