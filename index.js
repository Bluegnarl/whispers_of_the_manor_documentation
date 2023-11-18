const logoHeader = document.querySelector('.logo-header');
const arrowIcon = document.querySelector('.arrow');
const firstPart = document.querySelector('.first-part');

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

function onScrollDown(){
    firstPart.style.opacity = '100%';
    firstPart.style.transform = 'translateY(0)';
}

window.addEventListener("resize", () => onResize());
document.body.addEventListener("scroll", () => onScrollDown());