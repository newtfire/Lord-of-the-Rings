window.addEventListener('DOMContentLoaded', init, false);

const table_row = document.getElementsByTagName('tr');
const ellipse = document.getElementsByTagName('ellipse').getAttribute('id');
const path = document.getElementsByTagName('path').getAttribute('id');

function init() {
    for (let i = 0; i < table_row.length; i++) {
        table_row[i].addEventListener('click', fillEllipse, false);
        table_row[i].addEventListener('click', fillPath, false);
    }
}

function fillEllipse() {
    let clickClasses = this.class
    /* ebb: You now need to 1) split() the class on spaces (look up how), and store the result in a new variable.
    /* This new variable stores a sequence of values.
    * THEN, loop through the new variable's sequence of values.
    In your loop, you find the SVG element whose id == the value you're looping on
    after you cut off the # (probably with split() function again).
    In that step you also trigger the fill event!
     */
     */
     */
     */
    *  */
    for (let i = 0; i < ellipse.length; i++) {
        if (ellipse[i].style.fill == "none"){
            ellipse[i].style.fill = 0x002dff
        } else {
            ellipse[i].style.fill = "none"
        }
    }
}