import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css'
import { galleryData } from './images/data'
import Home from "./index";
import network from "./network"
import Method from "./method";

function List({formAction}) {
    const choice = galleryData.filter(pic => pic.kind === formAction);
    console.log('What is choice' + choice)

    const mapImages = choice.map(pic =>
    <img key={pic.id} src={pic.src} alt={pic.name}/>
    );
    return mapImages
}