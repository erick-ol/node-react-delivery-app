import React from 'react';
import { Redirect,Route, Switch } from 'react-router-dom'
import './App.css';
import Login from './pages/Login';

// consulta ao - https://v5.reactrouter.com/web/api/Redirect
function App() {
  return (
    <Switch>
      <Redirect exact from="/" to="/login"/>
      <Route path="/login">
        <Login/>
      </Route>
    </Switch>
  );
}

export default App;
