const logoHeader = document.querySelector('.logo-header');
const arrowIcon = document.querySelector('.arrow');

function onResize(){
    if(document.body.clientWidth >= 800){
        logoHeader.setAttribute("src", "./assets/images/logo-large.svg");
        arrowIcon.setAttribute("src", "./assets/images/arrow-large.svg");
    }
    else if(document.body.clientWidth < 800){
        logoHeader.setAttribute("src", "./assets/images/logo-medium.svg");
        arrowIcon.setAttribute("src", "./assets/images/arrow-small.svg");
    }

}
onResize();

window.addEventListener("resize", () => onResize());