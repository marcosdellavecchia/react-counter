import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function AppFunction() {
  const [contador, setContador] = useState(0);
  const incrementar = () => {
    setContador(contador + 1);
  };
  const reset = () => {
    setContador(0);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{contador}</p>
        <button onClick={incrementar}>Incrementar</button>
        <br />
        <button onClick={reset}>Reset</button>
      </header>
    </div>
  );
}

export default AppFunction;

// Se utiliza el hook useState, que simula el metodo setState para actualizar el estado del componente.
