import React from "react";
import Final_network from "./images/background-img/Final_network.png";
import ORG_network from "./images/background-img/ORG-network.png";

const Network = () => {
    return (
    <body>

    <div className="title-img">
        <div className="block">
            <h1 className="pg-heading">Visualizations</h1>
            <h2>SVG Graph</h2>
            <div className="object">
                <object type="image/svg+xml" data="./svg/final_svg.svg" className="svg"></object>
                <p className="object">This graph depicts the relevance and repetition of how Spacy named entities interact with the Lord of the Rings terms. As you can see there are more organizations in the books than any other NER, consisting
                    roughly around 50% of all Spacy entities. Obviously on the y-axis of the chart you have Spacy groups, and the x-axis projects the percentage of how many times certain Spacy entities are being used. </p>
            </div>
            <h2>Cytoscape Network</h2>
            <figure>
                <img src={Final_network} alt=""/>
                <figcaption>This network essentially summarizes all three books "The Fellowship of the Ring", "The Two Towers", and "The Return of the King", using Spacy's Natural
                    Language Processor. This shows the relationships each organization, location, Nationality, famous infrastructure, and Country/Realm has with one another into
                    one single defining network. I color coded the pathways with purple indicating the connections toward the Fellowship of the Ring, green for The Two Towers,
                    and Red for The Return of the King.</figcaption>
            </figure>
            <figure>
                <img src={ORG_network} alt=""/>
                <figcaption>This network shows how all the Organization entities interact with all three books. This probably isn't the best visualization since all the
                    nodes and edges are bunched up together, but it shows how many Organizations are mentioned in relation to Tolkien's Lord of the Rings. The purple edge describes connections to The Fellowship.
                    Red describes connections to the Return of the King, and the Green describes connections to The Twin Towers.</figcaption>
            </figure>
        </div>
    </div>
    </body>
    );
}

export default Network()