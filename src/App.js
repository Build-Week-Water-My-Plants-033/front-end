import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import PlantsList from './components/PlantsList';
import AddPlantForm from './components/AddPlantForm';
import Logout from './components/Logout';
import EditUserForm from './components/EditUserForm';

import './App.css';

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  margin-top: 58px;
  width: 371px;
  height: 71px;
  line-height: 71px;
  font-size: 22px;
  text-align: center;
  color: #green;
  cursor: pointer;
  background: linear-gradient(90deg, #ffd966, #fce93f);
  text-decoration: none;
  box-shadow: 0 15px 14px rgb( 0 42 177 / 12%);
`;


const mockPlantsData = [
  {
      id: 0,
      nickname: 'Plant 1',
      species: 'Species',
      h2oFrequency: 'Water Freq'
  },
  {
      id: 1,
      nickname: 'Plant 2',
      species: 'Species',
      h2oFrequency: 'Water Freq'
  },
  {
      id: 2,
      nickname: 'Plant 3',
      species: 'Species',
      h2oFrequency: 'Water Freq'
  },
  {
      id: 3,
      nickname: 'Plant 4',
      species: 'Species',
      h2oFrequency: 'Water Freq'
  }
];

function App() {
  const [ plants, setPlants ] = useState(mockPlantsData);

  return (
    <Router>
      <div className="App">
        <h1>Water My Plants</h1>
        <nav>
           <Link to='/login'><Button>Login</Button></Link>
           <Link to='/signup'><Button>Signup</Button></Link>
        </nav>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>

          <Route exact path='/login'>
            <Login/>
          </Route>

          <Route exact path='/logout'>
            <Logout/>
          </Route>

          <Route exact path='/signup'>
            <Signup/>
          </Route>

          <Route exact path='/user'>
            <EditUserForm/>
          </Route>

          <Route exact path='/plants'>
            <PlantsList plants={plants} setPlants={setPlants}/>
          </Route>

          <Route exact path='/plants/add'>
            <AddPlantForm plants={plants} setPlants={setPlants}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
