import React from "react";
import lotr_xquery from "./images/background-img/lotr.xquery.png";
import flowchart from "./images/background-img/mermaid_flowchart.png";

const Method = () => {
    return (
        <div className="title-img">
            <div className="block">
                <h1
                    className="pg-heading">Our Code</h1>
                <h2>Flowchart</h2>
                <center><img src={flowchart} alt="" width="1000"
                    className="center"/></center>


                <h2>Xquery</h2>
                <center><img src={lotr_xquery} alt="" width="1000"
                    className="center"/></center>

                <h2>Python using Spacy</h2>

                <p
                    className="table-desc">Using the spacy's module in python we were able to define the <code><u>CollPath</u></code> and
                    attach it to our source files, then we defined a variable called <code><u>TargetPath</u></code>,
                    which outputs named entities from the books such as "Frodo" and "Osgiliath", into xml
                    tags. After that, we had a slight issue with the named entities, so we corrected the NLP
                    algorithm by creating a list called <code><u>patterns</u></code> . This then fixed our entities along with the
                    definition functions to display the books data visualization. </p>
                <h2>Python-View</h2>
                <center><img key="" src="" alt="" width="1000"
                    className="center"/></center>

                <h2>Link to the "code view"</h2>
                <a href="https://github.com/Stach13/Lord-of-the-Rings/blob/main/python/lotr-files-stage5.py"
                    className="center"><h2>code view</h2></a>

                <h2>Credits</h2>
                <p
                    className="table-desc">Noah: Worked on the Network and Analysis pages, as well as the general styling of the website. He also worked on the SVG graph and networks in cytoscape. Since there are so many nodes and edges, when he exported the file as a png, jpeg, or svg, the data was completely illegible, so he just decided to take a screenshot.
                    <p
                        className="table-desc">Min: She created and organized the Methods page and helped with Regex autotagging and Xquery.</p>
                    <p
                        className="table-desc">Jimin: She was in charge and responsible for the website and administering the general look of it. She put most data on the homepage.</p>
                    <p
                        className="table-desc">As a group including Dr. B: We all worked on organizing the Spacy package in python as well as adjusting a few things with Xquery.</p></p>
            </div>
        </div>
    );
};

export default Method;