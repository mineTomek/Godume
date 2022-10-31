import React from 'react';
import accountIcon from './images/account.svg';

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

var email, password = '';

let user;

//#region Firebase Init

// Web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKvWdLD6toD5fu12JOK90v2vA5izW-7G0",
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: "godume-app",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: "1:632887061818:web:afb0b0f35b68b1a036f403",
  measurementId: process.env.FIREBASE_MESURMENT_ID
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
            form.setAttribute('opened', 'true');
          }}/>

          <Servers/>
        </div>
      </header>
      <div className='Content'>
        <Channels currentServer={currentServer}/>
        <div className='Inner-content'>
          Hello! I'm <b>Content</b>!

          <LoginForm />

        </div>
      </div>
    </div>
  );
}

function LoginForm() {
  return (
    <>
    <div className='User-login' opened='false'>
      <p className='Login-form-title'>Sign Up</p>
      <i className='fa-solid fa-xmark Close-login-form' onClick={() => {
        var form = document.getElementsByClassName('User-login')[0];
        form.setAttribute('opened', 'false');
        console.log(form);
      }}></i>

      <br/>

      <div className='Form'>
        <p className='Error-text' id='Form-error' style={{display: 'none'}}>Error</p>

        <input
          type='text'
          placeholder='Email'
          className='Creadentials'
          onChange={(event) => {
            email = event.target.value;
            console.log(email);
          } } 
        />
        
        <input
          type='password'
          placeholder='Password'
          className='Creadentials'
          onChange={(event) => {
            password = event.target.value;
            console.log(password);
          } } 
        />

        <button
          onClick={() => {
            signUpUser(email, password);
          } } > Sign Up
        </button>
      </div>
    </div>
    </>
  );
}

function signUpUser(email, password) {
  console.log('User signUp: ' + email + ' ' + password);

  document.getElementsByName('Creadentials').forEach((input) => {
    input.value = '';
  });

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      user = userCredential.user;

      hideFormError();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.error(`#'${errorCode}': ${errorMessage}`);

      if (errorCode === 'auth/invalid-email') {
        showFormError('This email is invalid!');
      }
    });
}

function showFormError(error) {
  const errorElm = document.getElementById('Form-error');
  errorElm.setAttribute('style', 'display: block;');

  errorElm.innerHTML = error;
}

function hideFormError() {
  document.getElementById('Form-error').setAttribute('style', 'display: none;');
}

export default App;
