import logo from './images/account.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="Account-icon" alt="account"/>
      </header>
      <div className="App-content">
        <p>
          Content
        </p>
      </div>
    </div>
  );
}

export default App;
