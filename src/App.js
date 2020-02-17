import React, { useEffect, useState } from 'react';
// import React from 'react'
import { Router } from '@reach/router'
import { Link } from '@reach/router'
import Home from 'ropc/Home'
import Calendar from 'ropc/Calendar'
import './App.css';

import { withAuthenticator } from 'aws-amplify-react'
import Amplify, {Auth} from 'aws-amplify'
import awsconfig from 'aws-exports'


Amplify.configure(awsconfig)

function App() {

  // const signOut = () => {
  //   Auth.signOut({global: true})
  //     .then(data => console.log(data))
  //     .catch(err => console.log(err))
  // }

  // let [user, setUser] = useState({})

  // useEffect(() => {
  //   Auth.currentAuthenticatedUser({
  //     bypassCache: false
  //   }).then(user => {
  //     setUser(user)
  //     console.log(user)
  //   }).catch(err => {
  //     setUser({})
  //     console.log(err)
  //   })
  // },[])

  

  return (
    <div className="App">
      <h1>Global Wrapping Header</h1>
      {/* Current User: {user.attributes ? user.attributes.email : "Please Login"} */}
      {/* <button onClick={signOut}>Log Out</button> */}
      <Link to="/calendar">Show Calendar</Link>
      <Router>
        <Home path='/'/>
        <Calendar path='/calendar'/>
      </Router>
    </div>
  );
}

// const federatedConfig = {
//   google_client_id: '1032227651519-e2c4uantc6vk7u9i7inqkb13t5fm0va1.apps.googleusercontent.com'
// }

// export default App;

export default App;
