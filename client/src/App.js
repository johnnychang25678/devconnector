import React from 'react'
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
        <Route path="/" exact component={Landing} />
        <section className="container">
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </section>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
