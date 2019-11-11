// import React, { useEffect, useState } from 'react';
import React from 'react'
import { Router } from '@reach/router'
import Home from 'ropc/Home'
import Schedule from 'ropc/Schedule'
// import logo from './logo.svg';
import './App.css';

// import { withAuthenticator } from 'aws-amplify-react'
// import Amplify from 'aws-amplify'
// import { Auth } from 'aws-amplify'
// import awsconfig from './aws-exports'

// Amplify.configure(awsconfig)

// function signOut() {
//   Auth.signOut()
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
// }

function App() {

  // const [userData, setUserData] = useState({})

  // useEffect( () => {
  //   Auth.currentAuthenticatedUser().then( user => setUserData(user))
  // })
  
  return (
    <div className="App">
      <h1>Global Wrapping Header</h1>

      <Router>
        <Home path='/'/>
        <Schedule path='/calendar'/>
      </Router>
    </div>
    // <div>
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <p>{userData.email}</p>
    //     <button onClick={signOut}>Sign Out</button>
    //   </header>
    // </div>
  );
}

// const federatedConfig = {
//   google_client_id: '1032227651519-e2c4uantc6vk7u9i7inqkb13t5fm0va1.apps.googleusercontent.com'
// }

export default App;

// export default withAuthenticator(App, {federated: federatedConfig});
