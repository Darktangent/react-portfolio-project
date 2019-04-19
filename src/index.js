import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Switch, Route} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import App from "./components/App.js"
import Jokes from './components/Jokes'
import "./index.css"
import Header from './components/Header'

const history=createBrowserHistory();



ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact={true} path="/" render={()=><Header><App /></Header>}></Route>
      <Route path="/jokes" render={()=><Header><Jokes /></Header>} ></Route>
    </Switch>
  </Router>,
   document.getElementById('root')
 );
