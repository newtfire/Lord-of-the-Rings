window.addEventListener('DOMContentLoaded', init, false);

const text = document.getElementsByClassName('textButton');
const bars = document.getElementsByClassName('displayBars');

function init(){
    for (i = 0; i < text.length; i++){
        text[i].addEventListener('click', Show, false)
    }
}

function Show(){
    Hide();
    var x2 = document.bars.getAttribute('x2');
    var width = 1;
    var identity = setInterval(scene, 10);
    function scene() {
        for (i = 0; i < bars.length; i++){
    	  if (width[i] == x2){
    	      clearInterval(identity);
    	} else {
    	      width++;
    	      bars.style.width = width + '%';
    	  }
    }
  }
}
    
function Hide(){
    for (i = 0; i < bars.length; i++){
        bars[i].style.display="none"; 
    }
}