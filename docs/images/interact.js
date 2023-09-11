let x1 = getAttribute('x1')
let x2 = getAttribute('x2') 
    

function scrollReveal() {
    var scrolled = svg.scrollIntoView();
    
    if (scrolled >= x1) {
        console.log(x2)
    }
    
}