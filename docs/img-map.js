window.addEventListener('DOMContentLoaded', init, false);

const table_row = document.getElementsByTagName('tr');
const ellipse = document.querySelectorAll("#Dunland, #Weathertop, #Bree, #Aglarond, #Dale, #Dwarves-Erebor, #Elf-Rivendell, #Orc-Gundabad, #Orc-Isengard, #Elf-Woodland, #Elf-Mithlond");
const path = document.querySelectorAll("#Mirkwood, #Fanghorn, #West, #Rohan, #Dwarves-Iron-Hills, #Wraiths, #Orc-Mordor, #Dwarves-Blue-Mountains, #Elf-Lothlorien");

function init() {
    for (let i = 0; i < table_row.length; i++) {
        table_row[i].addEventListener('click', fillEllipse, false);
        /*table_row[i].addEventListener('click', fillPath, false);*/
    }
}

function fillEllipse() {
    let clickClasses = this.table_row.class
    const subClass = clickClasses.split('-')[0];

    document.subClass.
    /* ebb: You now need to 1) split() the class on spaces (look up how), and store the result in a new variable.
    /* This new variable stores a sequence of values.
    * THEN, loop through the new variable's sequence of values.
    In your loop, you find the SVG element whose id == the value you're looping on
    after you cut off the # (probably with split() function again).
    In that step you also trigger the fill event!
     */
    for (let i = 0; i < ellipse.length; i++) {
        if (ellipse[i].fillStyle == "none"){
            ellipse[i].fillStyle = "blue"
        } else {
            ellipse[i].style.fill = "none"
        }
    }
}