import React from 'react';
import accountIcon from './images/account.svg';

import { env } from 'process';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";

import './App.css';
import Servers from './Components/Servers/Servers.js';
import Channels from './Components/Channels/Channels.js';

let currentServer = {
  name: 'Godume Official',
  members: 549291
}

var email, password;

let user;

//#region Firebase Init

// Web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKvWdLD6toD5fu12JOK90v2vA5izW-7G0",
  authDomain: env.FIREBASE_AUTH_DOMAIN,
  projectId: "godume-app",
  storageBucket: env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.FIREBASE_MESSAGING_SENDER_ID,
  appId: "1:632887061818:web:afb0b0f35b68b1a036f403",
  measurementId: env.FIREBASE_MESURMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const auth = getAuth(app);

//#endregion

function App() {
  // const [members, setMembers] = useState(currentServer.members);

  return (
    <div className='App'>
      <header className='Header'>
        <div className='Menu-scrollbar'>
          <img src={accountIcon} className='Account-icon' alt='account' onClick={(event) => {
            var form = document.getElementsByClassName('User-login')[0];
            if (form.getAttribute('name') === 'closed') {
              form.setAttribute('name', 'opened');
            } else {
              form.setAttribute('name', 'closed');
            }
          }}/>
          <Servers/>
        </div>
      </header>
      <div className='Content'>
        <Channels currentServer={currentServer}/>
        <div className='Inner-content'>
          Hello! I'm <b>Content</b>!
          <br/>
          I'm not indented!

          <LoginForm />

        </div>
      </div>
    </div>
  );
}

function LoginForm() {
  return (
    <>
    <div className='User-login' name='closed'>
      <input
        type='text'
        placeholder='Email'
        onChange={(event) => {
          email = event.target.value;
          console.log(email);
        } } 
      />
      <input
        type='password'
        placeholder='Password'
        onChange={(event) => {
          password = event.target.value;
          console.log(password);
        } } 
      />
    </div>
    </>
  );
}

function signUpUser(email, password) {
  console.log('User signUp: ' + email + ' ' + password);

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

// function getLang() {
//   if (navigator.languages !== undefined) 
//     return navigator.languages[0]; 
//   return navigator.language;
// }

export default App;
