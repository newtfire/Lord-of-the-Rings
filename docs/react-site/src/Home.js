import React from 'react';
import boromir from './images/background-img/boromir.jpg';
import Prancing_pony from './images/background-img/prancing-pony.jpg';
import Sam_and_Rosie from './images/background-img/rosie-and-sam.jpg';
import White_Tree from './images/background-img/white_tree.jpg';

const Home = () => {
    return (
    <div className="title-img">
        <div className="block">
            <svg height="210" width="950">
                <rect x="350" y="100" width="475" height="75" fill="blue">
                    <animate attributeName="width" dur="1s" calcMode="spline"  values="10; 100; 200; 400; 475;" keySplines="0.1 0.8 0.4 1; 0.1 0.8 0.4 1; 0.1 0.8 0.4 1; 0.1 0.8 0.4 1;" keyTimes="0; 0.04; 0.08; 0.12; 1"></animate>
                </rect>
                <text x="350" y="150" font-size="35" font-family="Calibri" fill="white">DIGIT 210 "LORD OF THE RINGS"</text>
            </svg>
            <h2>Noah Stachera, Jimin Kim and Min Wu </h2>
            <a href="https://www.kaggle.com/datasets/ashishsinhaiitr/lord-of-the-rings-text" className="click-box">Lord of the Rings Text File</a>

            <h2>Our Mission</h2>
            <p className="text-box">This project is based off of Tolkien's Legendarium series of books "The Lord of the Rings". The goal of this project was to experiment with Spacy's named entities with important
                people and places in the Lord of the Rings.</p>
            <p className="text-box">The Network page explains how these entities can be visualized on a broad scale from the books. </p>
            <p className="text-box">The Analysis page shows in more detail how these entities interact with Tolkien figures and assets using a table.</p>
            <p className="text-box">The Methods page shows our code and the process it took from Regex autotagging to the Network Visualization.</p>

            <h2>Illustrations</h2>


            <div className="row">
                <div className="column">
                    <img className="illustimg" src={boromir} alt=""/>
                        <i>"Boromir's last Stand"</i>
                </div>
                <div className="column">
                    <img className="illustimg" src={Prancing_pony} alt="" />
                        <i>"At the sign of the Prancing Pony"</i>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <img className="illustimg" src={Sam_and_Rosie} alt=""/>
                        <i>"Sam and Rosie Cotton"</i>
                </div>
                <div className="column">
                    <img className="white-tree" src={White_Tree} alt=""/>
                    <i className="align-i">"The White Tree"</i>
                </div>
            </div>

            <footer>

                <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by/4.0/88x31.png" className="license"/></a>

                <p className="licensedescrip">This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"></a></p>
                    <a>Creative Commons Attribution 4.0 International License</a>
                    <p className="licensedescrip">Illustrations by Ted Nasmith</p>

            </footer>
        </div>
    </div>
    );
};

export default Home;
