window.addEventListener('DOMContentLoaded', init, false);


const nlp = ['ORG', 'GPE', 'NORP', 'LOC', 'FAC'];
const x1 = '0'
let bars = document.querySelectorAll('g[id]');
// var x2 = getAttribute('x2')

function init() {     
    // for (let i="0"; i < nlp.length; i++) {
        //console.log(nlp[i])
  //  }
    
    for (let i = 0; i < bars.length; i++) {
    var line  = bars[i].querySelector('line')
    var x2 = line.getAttribute('x2')
    //console.log(x2)
    //alert(x2);
    }
    
}

function displayBars() {
    for (let i = 0; i < bars.length; i++) {
        document.bars[i].getElementsByClassName('text').addEventlistener('click', displayBars);
        }
    
}