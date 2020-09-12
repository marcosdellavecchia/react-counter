import React from "react";
import logo from "./logo.svg";
import "./App.css";

class AppClass extends React.Component {
  state = {
    contador: 0,
  };

  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  reset = () => {
    this.setState({ contador: 0 });
  };

  render() {
    const contador = this.state.contador;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{contador}</p>
          <button onClick={this.incrementar}>Incrementar</button>
          <br />
          <button onClick={this.reset}>Reset</button>
        </header>
      </div>
    );
  }
}

export default AppClass;

// Este componente está desarrollado utilizando un componente de clase. El problema de hacerlo de esta forma y no utilizando Hooks, es que no se vuelve más complejo de reutilizar al momento de tener en cuenta los this que hacen referencia a cada función. Con los hooks nos ahorramos este problema, ya que permiten utilizar el estado y el ciclo de vida del componente en componentes funcionales.
