const logoHeader = document.querySelector(".logo-header"),
  arrowIcon = document.querySelector(".arrow"),
  headerVideo = document.querySelector("video"),
  firstPart = document.querySelector(".first-part"),
  availableSoonLogo = document.querySelector(".available-soon-logo"),
  footerLogo = document.querySelector(".footer-logo"),
  background = document.querySelector(".background"),
  menuCancelButton = document.querySelectorAll(".menu-icon")[0],
  menuButton = document.querySelectorAll(".menu-icon")[1],
  menu = document.querySelector("menu"),
  leftArrow = document.querySelector(".left-arrow"),
  rightArrow = document.querySelector(".right-arrow"),
  sliderVideo = document.querySelector(".slider-video"),
  sliderNumber = document.querySelector(".slider-number"),
  sliderTitle = document.querySelector(".slider-title"),
  sliderText = document.querySelector(".slider-text");
(sliderTexts = document.querySelector(".slider-texts")),
  (sliderControlsIndicator = document.querySelector(
    ".slider-controls-indicator"
  )),
  (data = []);

// Try catch data //

try {
  fetch("./data/slider.json")
    .then((response) => response.json())
    .then((json) => buildSliders(json));
} catch (error) {
  console.log(error);
} finally {
  console.log("loaded");
}

// Resize //

function onResize() {
  headerVideo.play();
  function onResize1() {
    if (document.body.clientWidth >= 800) {
      logoHeader.setAttribute("src", "./assets/images/logo-large.svg");
      arrowIcon.setAttribute("src", "./assets/images/arrow-large.svg");
      background.style.display = "none";
    } else if (document.body.clientWidth < 800) {
      logoHeader.setAttribute("src", "./assets/images/logo-medium.svg");
      arrowIcon.setAttribute("src", "./assets/images/arrow-small.svg");
    }
  }
  function onResize2() {
    if (document.body.clientWidth >= 1600) {
      availableSoonLogo.setAttribute("src", "./assets/images/logo-large.svg");
      footerLogo.setAttribute("src", "./assets/images/logo-medium.svg");
    } else if (
      document.body.clientWidth < 1600 &&
      document.body.clientWidth > 500
    ) {
      availableSoonLogo.setAttribute("src", "./assets/images/logo-medium.svg");
      footerLogo.setAttribute("src", "./assets/images/logo-medium.svg");
    } else {
      availableSoonLogo.setAttribute("src", "./assets/images/logo-small.svg");
      footerLogo.setAttribute("src", "./assets/images/logo-small.svg");
    }
  }
  onResize1();
  onResize2();
}
onResize();

window.addEventListener("resize", () => onResize());

// Header Video Anti-Pause //

headerVideo.addEventListener("pause", () => {
  headerVideo.play();
});

// Menu //

menuButton.addEventListener("click", () => {
  menu.style.right = "0";
  background.style.display = "flex";
});

background.addEventListener("click", () => {
  if (document.body.clientWidth <= 340) {
    menu.style.right = "-100%";
  } else {
    menu.style.right = "-300px";
  }
  background.style.display = "none";
});

menuCancelButton.addEventListener("click", () => {
  if (document.body.clientWidth <= 340) {
    menu.style.right = "-100%";
  } else {
    menu.style.right = "-300px";
  }
  background.style.display = "none";
});

// Slider //

let sliderPage = 0;

function buildSliders(res) {
  data.push(res);
  data[0].map((el) => createSliders(el));
}

let sliderTextVar = 0;
const sliderText1 = document.createElement("div");
const sliderStick1 = document.createElement("img"),
  sliderStick2 = document.createElement("img"),
  sliderStick3 = document.createElement("img");

function createSliders(item) {
  if (sliderTextVar === 0) {
    sliderText1.classList.add("slider-text");
    sliderText1.innerHTML += `
        <h2 class="slider-number">0${item.number}</h3>
        <h2>${item.title}</h2>
        <p>${item.text}</p>
      `;
    sliderTexts.append(sliderText1);
    sliderTextVar++;
    sliderStick1.classList.add("slider-stick-1");
    sliderStick2.classList.add("slider-stick-2");
    sliderStick3.classList.add("slider-stick-3");
    sliderStick1.classList.add("slider-stick");
    sliderStick2.classList.add("slider-stick");
    sliderStick3.classList.add("slider-stick");
    sliderStick1.setAttribute("src", "./assets/images/slider-stick.svg");
    sliderStick2.setAttribute("src", "./assets/images/slider-stick.svg");
    sliderStick3.setAttribute("src", "./assets/images/slider-stick.svg");
    sliderControlsIndicator.append(sliderStick1, sliderStick2, sliderStick3);
  } else {
    const sliderText = document.createElement("div");
    sliderText.classList.add("slider-text");
    sliderText.innerHTML += `
        <h2 class="slider-number">0${item.number}</h3>
        <h2>${item.title}</h2>
        <p>${item.text}</p>
    `;
    sliderTexts.append(sliderText);
  }
}

function sliderPageChange(direction) {
  if (direction === "right" && sliderPage < 2) {
    sliderPage++;
    sliderText1.style.marginLeft = sliderPage * -100 + "%";
  } else if (direction === "left" && sliderPage > 0) {
    sliderPage--;
    sliderText1.style.marginLeft = sliderPage * -100 + "%";
  }
  switch (sliderPage) {
    case 0:
      leftArrow.style.filter = "brightness(0.15)";
      leftArrow.style.cursor = "context-menu";
      sliderStick1.style.filter = "brightness(1)";
      sliderStick2.style.filter = "brightness(0.15)";
      sliderStick3.style.filter = "brightness(0.15)";
      rightArrow.style.filter = "brightness(1)";
      break;
    case 1:
      leftArrow.style.filter = "brightness(1)";
      leftArrow.style.cursor = "pointer";
      sliderStick1.style.filter = "brightness(0.15)";
      sliderStick2.style.filter = "brightness(1)";
      sliderStick3.style.filter = "brightness(0.15)";
      rightArrow.style.filter = "brightness(1)";
      rightArrow.style.cursor = "pointer";
      break;
    case 2:
      leftArrow.style.filter = "brightness(1)";
      sliderStick2.style.filter = "brightness(0.15)";
      sliderStick3.style.filter = "brightness(1)";
      rightArrow.style.filter = "brightness(0.15)";
      rightArrow.style.cursor = "context-menu";
      break;

    default:
      break;
  }
}

sliderPageChange();

rightArrow.addEventListener("click", () => sliderPageChange("right"));
leftArrow.addEventListener("click", () => sliderPageChange("left"));
