import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import NotFound from './Components/NotFound'
import LogIn from './Components/LogIn'

class App extends Component
{
      render()
      {
        return(
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/login" component={LogIn} />
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        )
      }
}

export default App;
