import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React on NGINX
        </p>
        <a
          className="App-link"
          href="https://github.com/belalelnady"
          target="_blank"
          rel="noopener noreferrer"
        >
         Learn more
        </a>
      </header>
    </div>
  );
}

export default App;
