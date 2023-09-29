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
    for (i = 0; i < bars.length; i++){
        if (bars[i].id.split('-')[1] == this.id.split('-')[1]){
            bars[i].style.display="block";        
        }
    }
}

function Hide(){
    for (i = 0; i < bars.length; i++){
        bars[i].style.display="none"; 
    }
}