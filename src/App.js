import React, { useState, useEffect } from 'react';
import firebase from './Firebase';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import HomePage from './Components/HomePage';
import transactions from './Components/Transactions';
import Pago from './Components/pago';
import PinPass from './Components/PinPass';
import TakePhoto from './Components/TakePhoto';
import MedioDePago from './Components/mediodepago';


function App() {

  const [firebaseInitialized, setFirebaseInitialized] = useState (false);

  useEffect(()=> {
    firebase.isInitialized().then(val => {
      setFirebaseInitialized(val)
    })
  })

  return firebaseInitialized !== false ? (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/Transactions" component={transactions} />
        <Route exact path="/pin" component={PinPass} />
        <Route exact path="/Pago" component={Pago} />
        <Route exact path="/photo" component={TakePhoto} />
        <Route exact path="/MedioDePago" component={MedioDePago} />
      </Switch>
    </Router>
  
  ) : <div id="loader"></div>
}

export default App;
