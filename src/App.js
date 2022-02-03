import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import PlantsList from './components/PlantsList';
import AddPlantForm from './components/AddPlantForm';
import Logout from './components/Logout';
import EditUserForm from './components/EditUserForm';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';

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
        <Navbar/>
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

          <PrivateRoute exact path='/plants'>
            <PlantsList plants={plants} setPlants={setPlants}/>
          </PrivateRoute>

          <PrivateRoute exact path='/plants/add'>
            <AddPlantForm plants={plants} setPlants={setPlants}/>
          </PrivateRoute>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
