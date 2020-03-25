import React, { useEffect, useState } from 'react'
import { Router } from '@reach/router'
import { Link } from '@reach/router'
import Home from 'ropc/Home'
import Calendar from 'ropc/Calendar'
import About from 'ropc/About'
import Education from 'ropc/Education'
import './App.css';
import { Container } from '@material-ui/core'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import Amplify, {Auth} from 'aws-amplify'
import awsconfig from 'aws-exports'


Amplify.configure(awsconfig)

function App() {

  const signOut = () => {
    Auth.signOut({global: true})
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  let [user, setUser] = useState({})

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

  const [value, setValue] = useState(0)

  return (
    <Container maxWidth="lg">
      <Tabs value={value} onChange={(e, val) => setValue(val)}>
        <Tab label="Home" index={0} to="/" component={Link} />
        <Tab label="About" index={1} to="/about" component={Link} />
        <Tab label="Calendar" index={1} to="/calendar" component={Link} />
        <Tab label="Education" index={3} to="/education" component={Link} />
      </Tabs>
      Current User: {user.attributes ? user.attributes.email : "Please Login"}
      <button onClick={signOut}>Log Out</button>
      <Router>
        <Home path='/'/>
        <About path='/about'/>
        <Calendar path='/calendar'/>
        <Education path='/education'/>
      </Router>
    </Container>
  );
}

// const federatedConfig = {
//   google_client_id: '1032227651519-e2c4uantc6vk7u9i7inqkb13t5fm0va1.apps.googleusercontent.com'
// }

// export default App;

export default App;
