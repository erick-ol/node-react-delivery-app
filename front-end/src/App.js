import React from 'react';
import { Redirect,Route, Switch } from 'react-router-dom'
import './App.css';
import Login from './pages/Login';
// import rockGlass from './images/rockGlass.svg';
// consulta ao - https://v5.reactrouter.com/web/api/Redirect
function App() {
  return (
    <Switch>
      <Redirect exact from="/" to="/login"/>
      <Route path="/login">
        <Login/>
      </Route>
    </Switch>
    // <div className="App">
    //   <span className="logo">TRYBE</span>
    //   <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
    //     Glass
    //   </object>
    // </div>
  );
}

export default App;
