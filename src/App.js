import accountIcon from './images/account.svg';
import './App.css';
import Servers from './Servers.js';

function App() {
  return (
    <div className="App">
      <header className="Header">
        <div className="Menu-scrollbar">
          <img src={accountIcon} className="Account-icon" alt="account"/>
          <Servers amount="10"/>
        </div>
      </header>
      <div className="Content">
        <p>
          Content
        </p>
      </div>
    </div>
  );
}

export default App;
