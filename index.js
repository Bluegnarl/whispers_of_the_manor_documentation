// Resize //

const logoHeader = document.querySelector('.logo-header'),
    arrowIcon = document.querySelector('.arrow'),
    firstPart = document.querySelector('.first-part'),
    availableSoonLogo = document.querySelector('.available-soon-logo'),
    footerLogo = document.querySelector('.footer-logo'),

    background = document.querySelector('.background'),
    menuCancelButton = document.querySelectorAll('.menu-icon')[0],
    menuButton = document.querySelectorAll('.menu-icon')[1],
    menu = document.querySelector('menu'),

    leftArrow = document.querySelector('.left-arrow'),
    sliderStick1 = document.querySelector('.slider-stick-1'),
    sliderStick2 = document.querySelector('.slider-stick-2'),
    sliderStick3 = document.querySelector('.slider-stick-3'),
    rightArrow = document.querySelector('.right-arrow'),

    sliderVideo = document.querySelector('.slider-video'),
    sliderNumber = document.querySelector('.slider-number'),
    sliderTitle = document.querySelector('.slider-title'),
    sliderText = document.querySelector('.slider-text');

function onResize(){
    function onResize1(){
        if(document.body.clientWidth >= 800){
            logoHeader.setAttribute("src", "./assets/images/logo-large.svg");
            arrowIcon.setAttribute("src", "./assets/images/arrow-large.svg");
            background.style.display = 'none';
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
    function onResize3(){
        if(document.body.clientWidth >= 450){
            leftArrow.setAttribute("src", "./assets/images/left-arrow.svg");
            sliderStick1.setAttribute("src", "./assets/images/slider-stick.svg");
            sliderStick2.setAttribute("src", "./assets/images/slider-stick.svg");
            sliderStick3.setAttribute("src", "./assets/images/slider-stick.svg");
            rightArrow.setAttribute("src", "./assets/images/right-arrow.svg");
        }
        else if(document.body.clientWidth < 450){
            leftArrow.setAttribute("src", "./assets/images/left-arrow-small.svg");
            sliderStick1.setAttribute("src", "./assets/images/slider-stick-small.svg");
            sliderStick2.setAttribute("src", "./assets/images/slider-stick-small.svg");
            sliderStick3.setAttribute("src", "./assets/images/slider-stick-small.svg");
            rightArrow.setAttribute("src", "./assets/images/right-arrow-small.svg");
        }
    }
    onResize1();
    onResize2();
    onResize3();
}
onResize();

function onScrollDown(){
    firstPart.style.opacity = '100%';
    firstPart.style.transform = 'translateY(0)';
}

window.addEventListener("resize", () => onResize());
document.body.addEventListener("scroll", () => onScrollDown());

// Menu //

menuButton.addEventListener('click', () => {
    menu.style.right = '0';
    background.style.display = 'flex';
})

background.addEventListener('click', () => {
    menu.style.right = '-300px';
    background.style.display = 'none';
})

menuCancelButton.addEventListener('click', () => {
    menu.style.right = '-300px';
    background.style.display = 'none';
})

// Slider //

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
        leftArrow.style.cursor = 'context-menu'
        rightArrow.style.filter = 'brightness(1)'
        rightArrow.style.cursor = 'pointer'
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
        leftArrow.style.cursor = 'pointer'
        rightArrow.style.filter = 'brightness(1)'
        rightArrow.style.cursor = 'pointer'
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
        leftArrow.style.cursor = 'pointer'
        rightArrow.style.filter = 'brightness(0.15)'
        rightArrow.style.cursor = 'context-menu'
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