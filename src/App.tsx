import { Ejercicio2 } from "./typescript/Ejercicio2";
import { Ejercicio3 } from "./typescript/Ejercicio3";
import { Ejercicio4 } from "./typescript/Ejercicio4";
import { Ejercicio5 } from "./typescript/Ejercicio5";
import { Nuevo } from "./typescript/Nuevo";
import { Prueba1 } from "./typescript/Prueba1";

const App=()=>{

  return(
    <div className="mt-2">
    <h1 className="text-center">Aplicaciones Moviles</h1>
    <hr />
    <Nuevo/>
    <hr />
    <Prueba1/>
    <hr />
    <Ejercicio2/>
    <hr />
    <Ejercicio3/>
    <hr />
    <Ejercicio4/>
    <hr />
    <Ejercicio5/>
    </div>

  )
}

export default App;

/*import React from 'react';
import logo from './logo.svg';
import './App.css';
import { tiposBasicos } from './typescript/TiposBasicos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

