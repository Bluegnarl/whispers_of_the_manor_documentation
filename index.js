// Resize //

const logoHeader = document.querySelector('.logo-header');
const arrowIcon = document.querySelector('.arrow');
const firstPart = document.querySelector('.first-part');
const availableSoonLogo = document.querySelector('.available-soon-logo');
const footerLogo = document.querySelector('.footer-logo');

function onResize(){
    function onResize1(){
        if(document.body.clientWidth >= 800){
            logoHeader.setAttribute("src", "./assets/images/logo-large.svg");
            arrowIcon.setAttribute("src", "./assets/images/arrow-large.svg");
        }
        else if(document.body.clientWidth < 800){
            logoHeader.setAttribute("src", "./assets/images/logo-medium.svg");
            arrowIcon.setAttribute("src", "./assets/images/arrow-small.svg");
        }
    }
    function onResize2(){
        if(document.body.clientWidth >= 1600){
            availableSoonLogo.setAttribute("src", "./assets/images/logo-large.svg");
            footerLogo.setAttribute("src", "./assets/images/logo-medium.svg");
        }
        else if(document.body.clientWidth < 1600 && document.body.clientWidth > 500){
            availableSoonLogo.setAttribute("src", "./assets/images/logo-medium.svg");
            footerLogo.setAttribute("src", "./assets/images/logo-medium.svg");
        }
        else{
            availableSoonLogo.setAttribute("src", "./assets/images/logo-small.svg");
            footerLogo.setAttribute("src", "./assets/images/logo-small.svg");
        }
    }
    onResize1();
    onResize2();
}
onResize();

function onScrollDown(){
    firstPart.style.opacity = '100%';
    firstPart.style.transform = 'translateY(0)';
}

window.addEventListener("resize", () => onResize());
document.body.addEventListener("scroll", () => onScrollDown());

// Slider //

const leftArrow = document.querySelector('.left-arrow');
const sliderStick1 = document.querySelector('.slider-stick-1');
const sliderStick2 = document.querySelector('.slider-stick-2');
const sliderStick3 = document.querySelector('.slider-stick-3');
const rightArrow = document.querySelector('.right-arrow');

const sliderVideo = document.querySelector('.slider-video');
const sliderNumber = document.querySelector('.slider-number');
const sliderTitle = document.querySelector('.slider-title');
const sliderText = document.querySelector('.slider-text');

let sliderPage = 1;

leftArrow.addEventListener('click', () => {
    if(sliderPage > 1){
        sliderPage -= 1;
    }
    slider();
})

rightArrow.addEventListener('click', () => {
    if(sliderPage < 3){
        sliderPage += 1;
    }
    slider();
})

function slider(){
    console.log(sliderPage);
    if(sliderPage == 1){
        leftArrow.style.filter = 'brightness(0.15)'
        rightArrow.style.filter = 'brightness(1)'
        sliderStick1.style.filter = 'brightness(1)'
        sliderStick2.style.filter = 'brightness(0.15)'
        sliderStick3.style.filter = 'brightness(0.15)'

        sliderVideo.style.background = 'center/cover no-repeat url(./assets/images/defaultImg.png)';
        sliderNumber.innerText = '01';
        sliderTitle.innerText = 'Exploration';
        sliderText.innerText = "Explore the manor and the horrific history of this place.";
    }
    else if(sliderPage == 2){
        leftArrow.style.filter = 'brightness(1)'
        rightArrow.style.filter = 'brightness(1)'
        sliderStick1.style.filter = 'brightness(0.15)'
        sliderStick2.style.filter = 'brightness(1)'
        sliderStick3.style.filter = 'brightness(0.15)'

        sliderVideo.style.background = 'center/cover no-repeat url(./assets/images/background-image.png)';
        sliderNumber.innerText = '02';
        sliderTitle.innerText = 'Conversation';
        sliderText.innerText = "Listen to the characters around you and learn more about what's going on. Build your story by making choices.";
    }
    else if(sliderPage == 3){
        leftArrow.style.filter = 'brightness(1)'
        rightArrow.style.filter = 'brightness(0.15)'
        sliderStick1.style.filter = 'brightness(0.15)'
        sliderStick2.style.filter = 'brightness(0.15)'
        sliderStick3.style.filter = 'brightness(1)'

        sliderVideo.style.background = 'center/cover no-repeat url(./assets/images/background-image.png)';
        sliderNumber.innerText = '03';
        sliderTitle.innerText = 'Solution';
        sliderText.innerText = "Stay attentive to the elements around you. They will allow you to solve puzzles and riddles that are important for your progress.";
    }
}

slider();