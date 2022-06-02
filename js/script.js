window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // Bismilloh

  // Languge hover display block
  const languages = document.querySelector("[lang_in]"),
    activeLang = document.querySelector("[activeLang]");

  activeLang.addEventListener("click", openModal);

  function openModal() {
    languages.classList.add("show");
    languages.classList.remove("hide");
    document.body.style.overflow = "hidden";
    // clearInterval(modalTimer);
  }

  function closeModal() {
    languages.classList.add("hide");
    languages.classList.remove("show");
    document.body.style.overflow = "";
  }

  activeLang.addEventListener("click", (e) => {
    if (e.target === activeLang) {
      closeModal();
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
});
