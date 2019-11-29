import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./pages/Home"
import ReadMe from "../src/Component/ReadMe"
import Login from "./pages/Login"
import SignUp from "./pages/Signup"
import Form from "./pages/Form"
import Logout from "./Component/Logout";
const axios = require('axios');
class App extends React.Component {
  componentDidMount(props,state){
    var token = localStorage.getItem('Authorization');
    axios.defaults.headers.common['Authorization'] = token;
  }
  
  render(){
    return(
      <Router>
        <Switch>
          <Route
          exact
          path={'/'}
          >
            <Home />
          </Route>

          <Route
          exact
          path={'/login'}
          >
            <Login />
          </Route>

          <Route
          exact
          path={'/signup'}
          >
            <SignUp />
          </Route>

          <Route
          exact
          path={'/profile'}
          >
            <ReadMe/>
          </Route>

          <Route
          exact
          path={'/form/1'}
          >
            <Form
              select = {'1'}
            />
          </Route>

          <Route
          exact
          path={'/Edit'}
          >
            <Form
              select = {'2'}
            />
          </Route>

          <Route
          exact
          path={'/logout'}
          >
            <Logout/>
          </Route>

        </Switch>
      </Router>
    )
  }
}

export default App;