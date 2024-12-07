import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Recipes from './components/Recipes';
import AboutUs from './components/AboutUs';
import './css/tailwind.css';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/recipes" element={<Recipes/>} />
          <Route path="/aboutUs" element={<AboutUs/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;