"use strict";

const statsNumber = document.querySelectorAll(".hidden");
const statsNumber2 = document.querySelectorAll(".hidden2");

const observer = new IntersectionObserver((stats) => {
  stats.forEach((stat) => {
    if (stat.isIntersecting) {
      stat.target.classList.add("show");
    } else {
      stat.target.classList.remove("show");
    }
  });
});

statsNumber.forEach((stat) => observer.observe(stat));
statsNumber2.forEach((stat) => observer.observe(stat));

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnShowModal = document.querySelectorAll(".show-modal");

const closeModal = function () {
  modal.classList.add("hide");
  overlay.classList.add("hide");
};

const openModal = function () {
  modal.classList.remove("hide");
  overlay.classList.remove("hide");
};

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener("click", openModal);
}

overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hide")) {
    closeModal();
  }
});
