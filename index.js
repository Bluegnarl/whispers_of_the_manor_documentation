const logoHeader = document.querySelector(".logo-header"),
  arrowIcon = document.querySelector(".arrow"),
  headerVideo = document.querySelector("video"),
  headerVideoContainer = document.querySelector(".video"),
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
  sliderText = document.querySelector(".slider-text"),
  sliderVideoContentContainer = document.querySelector(
    ".slider-video-content-container"
  );
(sliderTexts = document.querySelector(".slider-texts")),
  (sliderControlsIndicator = document.querySelector(
    ".slider-controls-indicator"
  )),
  (data = []);
scrollDown = document.querySelector(".scroll-down");

// GET CURRENT PAGE //

function getCurrentPage() {
  const pathName = window.location.pathname;

  if (pathName.includes("design.html")) {
    return "design";
  } else if (pathName.includes("story.html")) {
    return "story";
  } else {
    return "index";
  }
}
getCurrentPage();

let sliderStickNumber;
const currentPage = getCurrentPage();

if (currentPage === "index") sliderStickNumber = 3;
else sliderStickNumber = 2;

let sliderTextVar = 0;
const sliderText1 = document.createElement("div"),
  sliderVideoContent1 = document.createElement("img"),
  sliderStick1 = document.createElement("img"),
  sliderStick2 = document.createElement("img");
let sliderStick3;

if (sliderStickNumber === 3) {
  sliderStick3 = document.createElement("img");
} else {
  sliderStick3 = document.getElementsByClassName(".slider-stick-null");
}

document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "1";
  try {
    if (currentPage === "index") {
      fetch("./data/sliderHome.json")
        .then((response) => response.json())
        .then((json) => buildSliders(json));
    } else if (currentPage === "design") {
      fetch("./data/sliderDesign.json")
        .then((response) => response.json())
        .then((json) => buildSliders(json));
    } else if (currentPage === "story") {
      fetch("./data/sliderStory.json")
        .then((response) => response.json())
        .then((json) => buildSliders(json));
    }
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Page successfully loaded");
  }
});

// Resize //

function onResize() {
  if (document.body.clientWidth >= 800) {
    logoHeader.setAttribute("src", "./assets/images/logo-large.svg");
    arrowIcon.setAttribute("src", "./assets/images/arrow-large.svg");
    background.style.display = "none";
  } else if (
    document.body.clientWidth < 800 &&
    document.body.clientWidth > 340
  ) {
    logoHeader.setAttribute("src", "./assets/images/logo-medium.svg");
    arrowIcon.setAttribute("src", "./assets/images/arrow-small.svg");
    menu.style.right = "-300px";
  } else if (document.body.clientWidth <= 340) {
    menu.style.right = "-100%";
  }
}
onResize();

window.addEventListener("resize", () => onResize());

document.body.addEventListener("scroll", () => {
  scrollDown.style.animationPlayState = "paused";
  scrollDown.style.opacity = "1";
  scrollDown.style.animation = "onlyTranslateY .4s normal forwards ease-in-out";
});

// Header Video //

headerVideo.addEventListener("loadeddata", () => {
  headerVideoContainer.style.opacity = "1";
});

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

function createSliders(item) {
  if (sliderTextVar === 0) {
    sliderText1.classList.add("slider-text");
    sliderVideoContent1.classList.add("slider-video-content");
    sliderVideoContent1.classList.add("slider-video-content-1");
    sliderText1.innerHTML += `
        <h2 class="slider-number">0${item.number}</h3>
        <h2>${item.title}</h2>
        <p>${item.text}</p>
      `;
    sliderVideoContent1.setAttribute("src", item.img);
    sliderVideoContentContainer.append(sliderVideoContent1);
    sliderTexts.append(sliderText1);
    sliderTextVar++;
    sliderStick1.classList.add("slider-stick-1");
    sliderStick2.classList.add("slider-stick-2");
    sliderStick1.classList.add("slider-stick");
    sliderStick2.classList.add("slider-stick");
    sliderStick1.setAttribute("src", "./assets/images/slider-stick.svg");
    sliderStick2.setAttribute("src", "./assets/images/slider-stick.svg");
    if (sliderStickNumber === 3) {
      sliderStick3.classList.add("slider-stick-3");
      sliderStick3.classList.add("slider-stick");
      sliderStick3.setAttribute("src", "./assets/images/slider-stick.svg");
    }
    sliderControlsIndicator.append(
      sliderStick1,
      sliderStick2,
      sliderStickNumber === 3 ? sliderStick3 : ""
    );
  } else {
    const sliderText = document.createElement("div"),
      sliderVideoContent = document.createElement("img");
    sliderVideoContent.classList.add("slider-video-content");
    sliderVideoContent.setAttribute("src", item.img);
    sliderVideoContentContainer.append(sliderVideoContent);
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
  if (direction === "right" && sliderPage < sliderStickNumber - 1) {
    sliderPage++;
    sliderVideoContent1.style.marginRight = sliderPage * -100 + '%';
    sliderText1.style.marginLeft = sliderPage * -100 + "%";
  } else if (direction === "left" && sliderPage > 0) {
    sliderPage--;
    sliderVideoContent1.style.marginRight = sliderPage * -100 + '%';
    sliderText1.style.marginLeft = sliderPage * -100 + "%";
  }
  switch (sliderPage) {
    case 0:
      // sliderVideo.setAttribute("src", item.img);
      leftArrow.style.filter = "brightness(0.15)";
      leftArrow.style.cursor = "context-menu";
      sliderStick1.style.filter = "brightness(1)";
      sliderStick2.style.filter = "brightness(0.15)";
      if (sliderStickNumber === 3) {
        sliderStick3.style.filter = "brightness(0.15)";
      }
      rightArrow.style.filter = "brightness(1)";
      rightArrow.style.cursor = "pointer";
      break;
    case 1:
      // sliderVideo.setAttribute("src", item.img);
      leftArrow.style.filter = "brightness(1)";
      leftArrow.style.cursor = "pointer";
      sliderStick1.style.filter = "brightness(0.15)";
      sliderStick2.style.filter = "brightness(1)";
      if (sliderStickNumber === 3) {
        sliderStick3.style.filter = "brightness(0.15)";
        rightArrow.style.filter = "brightness(1)";
        rightArrow.style.cursor = "pointer";
      } else {
        rightArrow.style.filter = "brightness(0.15)";
        rightArrow.style.cursor = "context-menu";
      }
      break;

    case 2:
      if (sliderStickNumber === 3) {
        // sliderVideo.setAttribute("src", item.img);
        leftArrow.style.filter = "brightness(1)";
        sliderStick2.style.filter = "brightness(0.15)";
        sliderStick3.style.filter = "brightness(1)";
        rightArrow.style.filter = "brightness(0.15)";
        rightArrow.style.cursor = "context-menu";
      }
      break;

    default:
      break;
  }
}
sliderPageChange();

rightArrow.addEventListener("click", () => sliderPageChange("right"));
leftArrow.addEventListener("click", () => sliderPageChange("left"));
