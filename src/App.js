import React from 'react';
import logo from './logo.svg';
import './App.css';

import { withAuthenticator } from 'aws-amplify-react'
import Amplify from 'aws-amplify'
import { Auth } from 'aws-amplify'
import awsconfig from './aws-exports'

Amplify.configure(awsconfig)


let email = null

function signIn() {
  Auth.federatedSignIn()
}

function checkUser() {
  Auth.currentAuthenticatedUser()
  .then(user => console.log({user}))
  .catch(err => console.log(err))
}

function signOut() {
  Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

function getUserEmail() {
  Auth.currentUserInfo()
    .then(user => console.log({user}))
    .catch(err => console.log({err}))
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={signOut}>Sign Out</button>
      </header>
    </div>
  );
}

const federatedConfig = {
  google_client_id: '1032227651519-e2c4uantc6vk7u9i7inqkb13t5fm0va1.apps.googleusercontent.com'
}

export default withAuthenticator(App, {federated: federatedConfig});
