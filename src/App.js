import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import PlantsList from './components/PlantsList';
import AddPlantForm from './components/AddPlantForm';

import './App.css';

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
