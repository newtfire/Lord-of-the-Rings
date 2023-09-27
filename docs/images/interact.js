window.addEventListener('DOMContentLoaded', init, false);

function init(){
    var textButton = document.querySelector('.textButton')
    textButton.addEventListener('click', hideShow, false)
}

function hideShow(){
    var bars = document.querySelector('.displayBars')
    if (bars.style.display == 'none'){
        bars.style.display='block';
    }
    else {bars.style.display='none'}
}