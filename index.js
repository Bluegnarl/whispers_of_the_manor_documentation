const logoHeader = document.querySelector('.logo-header');

function onResize(){
    if(document.body.clientWidth >= 800){
        logoHeader.setAttribute("src", "./assets/images/logo-large.svg");
    }
    else if(document.body.clientWidth < 800){
        logoHeader.setAttribute("src", "./assets/images/logo-medium.svg");
    }
}
onResize();

window.addEventListener("resize", () => onResize());