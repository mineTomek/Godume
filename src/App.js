import accountIcon from './images/account.svg';
import './App.css';
import Servers from './Components/Servers/Servers.js';
import Channels from './Components/Channels/Channels.js';

function App() {
  return (
    <div className='App'>
      <header className='Header'>
        <div className='Menu-scrollbar'>
          <img src={accountIcon} className='Account-icon' alt='account'/>
          <Servers/>
        </div>
      </header>
      <div className='Content'>
        <Channels/>
      </div>
    </div>
  );
}

export default App;
