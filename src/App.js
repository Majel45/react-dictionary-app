import logo from "./logo.png";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
         <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset"/>
        </main>
        <footer className="App-footer">
          <small>This project was coded by Marilyn Greve and is 
            <a href="https://github.com/Majel45/dictionary-project" target="_blank" rel="nonreferrer"> open-sourced on GitHub </a> and 
            <a href="https://elastic-hoover-12197e.netlify.app/" target="_blank" rel="nonreferrer"> hosted on Netlify</a></small>
        </footer>
      </div>
    </div>
  );
}
