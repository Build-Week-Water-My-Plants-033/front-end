import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import AddPlantForm from './components/AddPlantForm';
import PlantsList from './components/PlantsList';


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Water My Plants</h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Signup</Link>
        </nav>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/login'>
            <Login/>
          </Route>
          <Route exact path='/signup'>
            <Signup/>
          </Route>
          <Route exact path='/addplantform'>
            <AddPlantForm/>
          </Route>
          <Route exact path='/plantslist'>
            <PlantsList/>
          </Route>
        </Switch>
      </div>
      </Router>
  );
}

export default App;
