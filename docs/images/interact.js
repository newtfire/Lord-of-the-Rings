window.addEventListener('DOMContentLoaded', init, false);


const nlp = ['ORG', 'GPE', 'NORP', 'LOC', 'FAC'];
const x1 = '0'
// var x2 = getAttribute('x2')

function init() { 
    let bars = document.querySelectorAll('g[id]');
    
    for (let i="0"; i < nlp.length; i++) {
        console.log(nlp[i])
    }
    
    for (let i = 0; i < bars.length; i++) {
    var line  = bars[i].querySelector('line')
    var x2 = line.getAttribute('x2')
    console.log(x2)
    alert(x2);
    }
    
}