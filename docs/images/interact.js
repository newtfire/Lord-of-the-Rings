const text = document.getElementsByClassName('textButton');
const bars = document.getElementsByClassName('displayBars');
/* 2023-10-13 ebb and ns: Trying to add an SVG animate element on click of the text element in a <g> */
/*const animate = document.createElement('animate');*/
const animate = document.createElementNS("http://www.w3.org/2000/svg", 'animate');
const animatts = {
    attributeName: "x2",
    fill: "freeze",
    from: "0",
    to: "0",
    dur: "5s" 
};
/* Just for fun and learning, we are going to create an animate element from scratch
 * inside each <line> element in the SVG. 
 * HOWEVER, it's probably better for the effect we want to have the <animate> element
 * present already and set it with the x2 = 0 from the start. 
 *  */
 
window.addEventListener('DOMContentLoaded', init, false);

function init(){
    for (i = 0; i < bars.length; i++) {
        bars[i].append(animate)
    }
    
    for (i = 0; i < text.length; i++){
        text[i].addEventListener('click', Show, false);        
    }
}

// 
//function setAttributes(elem, objects) {
//     for (var prop in objects) {
//         if (objects.hasOwnProperty(prop)) {
//             elem[prop] = objects[prop];
//             elem.setAttribute(objects.keyName, prop);
//         }
//     }
// }

function Show(){
    Hide();
    for (i = 0; i < bars.length; i++){
        if (bars[i].id.split('-')[1] == this.id.split('-')[1]){
            /*bars[i].style.display='block';*/
           var length = bars[i].getAttribute('x2');
           console.log(length);
           bars[i].querySelector('animate').setAttribute('to', length);    
        } 
        
    } 
}

function Hide(){
    for (i = 0; i < bars.length; i++){
        bars[i].style.display="none"; 
    }
}

