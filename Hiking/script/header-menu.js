var nav = document.getElementById('nav');
var header = document.getElementById('header');
var clickCounter = 0;
function menuUnhide(){
    if (clickCounter == 0) {
        nav.style.left = 0;
        header.style.overflow = 'visible';
        clickCounter++;
    }
    else{

        nav.style.left = 100 + '%';
        header.style.overflow = 'hidden';
        clickCounter--;
    }
}