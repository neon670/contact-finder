import React ,{ Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ContactState from './contexts/contact/ContactState';
import AuthState from './contexts/auth/AuthState';
import AlertState from './contexts/alert/AlertState';
import setAuthToken from './utils/setAuthToken';

import Home from './components/pages/home';
import About from './components/pages/about';
import Navbar from './components/navbar/navbar';
import Register from './components/auth/register';
import Login from './components/auth/login';
import Alerts from './components/alerts/alert';
import PrivateRoute from './components/routing/private-route';

import './App.css';


if(localStorage.token){
      setAuthToken(localStorage.token);
    }

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
            <Navbar />
              <div className="container">
              <Alerts />
                <Switch>
                  <PrivateRoute exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
         </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;
