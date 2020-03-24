import React from 'react';
import './styles/components/App.scss';
import Field from "./components/Field";

function App() {
  return (
    <div className="App">
        <header>
            Play Cards to the Heart
        </header>
        <Field/>
    </div>
  );
}

export default App;

//todo: flexbox for vertical pos?
//todo: get text in a file and grab randomly