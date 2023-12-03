"use strict";

const showBar = document.querySelector(".show-bar");
const navBar = document.querySelector(".nav-bar");
const navMenu = document.querySelector(".menu nav");
const closeMenu = document.querySelector(".close-bar");
const menuList = document.querySelectorAll("nav ul li a");
const reviewContainer = document.querySelector(".review-card-carousel");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const appointmentBtn = document.querySelector(".appointment-btn");
const appointmentForm = document.querySelector(".appointment-form");
const closeAppointmentBtn = document.querySelector(".close-appointmentBtn")

// showing nav bar
function init() {
  if (window.screen.width < 1200) {
    navBar.removeAttribute("hidden");
    closeMenu.setAttribute("hidden", " ");
    slideToMenuContainer();
  }
}

// showing menu
showBar.addEventListener("click", () => {
  navMenu.style.transform = "translateX(0)";
  showBar.setAttribute("hidden", " ");
  closeMenu.removeAttribute("hidden");
});

closeMenu.addEventListener("click", () => {
  navMenu.style.transform = "translateX(100%)";
  showBar.removeAttribute("hidden");
  closeMenu.setAttribute("hidden", " ");
});

function slideToMenuContainer() {
  menuList.forEach((menu) => {
    menu.addEventListener("click", () => {
      navMenu.style.transform = "translateX(100%)";
      showBar.removeAttribute("hidden");
      closeMenu.setAttribute("hidden", " ");
    });
  });
}

// review card
async function fetchData() {
  try {
    const data = await fetch("https://randomuser.me/api/?results=10");
    const response = data.json();
    return response;
  } catch (error) {
    console.log(error);
  }
}

function createReviewCard() {
  fetchData()
    .then((res) => {
      let userInfo = res.results;

      userInfo.forEach((user) => {
        let userName = user.name.first;
        let userImg = user.picture.large;

        reviewContainer.insertAdjacentHTML(
          "afterbegin",
          `
          <div class="review-card">
          <div class="review-img">
            <img src=${userImg} alt="" />
          </div>
          <div class="review-text">
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores aspernatur ducimus magnam eos"
            </p>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
          </div>
          <h4>${userName}</h4>
        </div>
      
        `
        );
      });
    })
    .catch((error) => console.log(error));
}
createReviewCard();

// appointment

appointmentBtn.addEventListener("click", () => {
   appointmentForm.classList.add("show")
})

closeAppointmentBtn.addEventListener("click", () => {
  appointmentForm.classList.remove("show")
})




document.addEventListener("DOMContentLoaded",init)