import React, { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Alert from './components/layout/Alert'
import Dashboard from './components/dashboard/Dashboard'
import CreateProfile from './components/profile-forms/CreateProfile'
import EditProfile from './components/profile-forms/EditProfile'

import PrivateRoute from './components/routing/PrivateRoute'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

//Redux 
import { Provider } from 'react-redux'
import store from './store'
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'

if (localStorage.token) {
  setAuthToken(localStorage.token) // set header
}


const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={store}>
      <BrowserRouter>
        <React.Fragment>
          <Navbar />
          <Route path="/" exact component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/create-profile" component={CreateProfile} />
              <PrivateRoute exact path="/edit-profile" component={EditProfile} />
            </Switch>
          </section>
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
