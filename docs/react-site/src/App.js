import React from 'react';
import {Router, Routes, Route,} from "react-router-dom";
import './App.css'
import Home from "./Home";
import Network from "./network";
import Method from "./method";

function App(){
  return (
    <>

    <Home/>
    <Method/>
    <Network/>
    </>
    );
}

export default App;