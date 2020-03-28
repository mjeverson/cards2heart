import React from 'react';
import './styles/components/App.scss';
import Field from "./components/Field";

function App() {
  return (
    <div className="App">
        <header>
            <h1>
                Cards to the Heart
            </h1>
            <span>
                In this time of physical isolation, please use these questions to help you stay socially connected with your loved ones
            </span>
        </header>
        <Field/>
        <footer>
            <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                <img alt="Creative Commons License" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" />
            </a><br />
            This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.
        </footer>
    </div>
  );
}

export default App;

//todo: flexbox for vertical pos?
//todo: get text in a file and grab randomly