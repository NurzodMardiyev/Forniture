"use strict";

// Bismilloh

// Languge hover display block
const language = document.querySelector("[lang_in]"),
  activeLang = document.querySelector("[activeLang]");

language.classList.add("hide");
function showMyLang() {
  language.classList.add("show");
  language.classList.remove("hide");
}

function hideMyLang() {
  language.classList.add("hide");
  language.classList.remove("show");
}

activeLang.addEventListener("click", () => {
  console.log("Hi");
  showMyLang();
});
activeLang.addEventListener("click", (e) => {
  if (e.target === activeLang) {
    hideMyLang();
  }
});

// Navbar

const menuBtn = document.querySelector(".menu-icons"),
  navbar = document.querySelector("[navbar]");

menuBtn.addEventListener("click", () => {
  navbar.style.display = "none";
  console.log("hi");
});

// const car = {
//   color: "white",
//   shum: 100,
//   name: "mers",
//   extra: {
//     isBuy: true,
//     isAirBag: false,
//   },
// };

// let str = JSON.stringify(car);
// const clone = JSON.parse(str);
// clone.extra.isAirBag = true;
// console.log(car);
// console.log(clone);

const next = document.querySelector(".fa-angle-left"),
  prev = document.querySelector(".fa-angle-right"),
  advertisement1 = document.querySelector("[data-advertisement2]");
