window.addEventListener('DOMContentLoaded', init, false);

let table_row = document.getElementsByTagName('tr');
let ellipse = document.querySelectorAll("#Dunland, #Weathertop, #Bree, #Aglarond, #Dale, #Dwarves-Erebor, #Elf-Rivendell, #Orc-Gundabad, #Orc-Isengard, #Elf-Woodland, #Elf-Mithlond");
let path = document.querySelectorAll("#Mirkwood, #Fanghorn, #West, #Rohan, #Dwarves-Iron-Hills, #Wraiths, #Orc-Mordor, #Dwarves-Blue-Mountains, #Elf-Lothlorien");
let svgs = [ellipse, path]
function init() {
    for (let i = 0; i < table_row.length; i++) {
        table_row[i].addEventListener('click', fillEllipse, false);
        /*table_row[i].addEventListener('click', fillPath, false);*/
    }
}

function fillEllipse() {
    shutOff()
    let clickClasses = this.className
    console.log('what is clickClasses? ' + clickClasses)
    let separateClass = clickClasses.toString().split(' ');
    console.log('separateClass is this: ' + separateClass)

    for (i = 0; i < separateClass.length; i++){
         let separateHash = separateClass[i].toString().split('#')[1];
         let matchSVG = document.getElementById(separateHash);
         console.log('matchSVG is: ' + matchSVG);
         matchSVG.style.fill  = "blue";

    }

    /* ebb: You now need to 1) split() the class on spaces (look up how), and store the result in a new variable.
    /* This new variable stores a sequence of values.
    * THEN, loop through the new variable's sequence of values.
    In your loop, you find the SVG element whose id == the value you're looping on
    after you cut off the # (probably with split() function again).
    In that step you also triggefillStyle event!
     */

}
function shutOff() {
    for (let i = 0; i < svgs.length; i++) {
        if (svgs[i].fill  === "none"){
            svgs[i].fill = "blue"
        } else {
            svgs[i].fill = "none"
        }
    }
}