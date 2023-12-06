import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,} from "react-router-dom";
import './App.css'
import Home  from "./Home";
import Network from "./network"
import Method  from "./method";
import {NavBar} from "./NavBar";

function App(){
  return (
    <>
    <div className="header-img">
    <h1>Home</h1>
    </div>
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="network" element={<Network/>}/>
          <Route path="methods"   element={<Method/>}/>
        </Routes>
      </Router>
    </>
    );
}

export default App;