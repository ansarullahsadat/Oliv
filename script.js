"use strict";

const openModel = document.querySelector("#open__model");
const model = document.querySelector("#model");
const close = document.querySelector("#close");
const overlay = document.querySelector("#overlay");
const closemodel = document.querySelector("#close-model");
const navbtn = document.querySelectorAll("#nav_btn");

const closenav = function () {
  model.classList.add("hidden");
  overlay.classList.add("hidden");
  closemodel.classList.add("hidden");
  openModel.classList.remove("hidden");
};

const opennav = function () {
  model.classList.remove("hidden");
  overlay.classList.remove("hidden");
  closemodel.classList.remove("hidden");
  openModel.classList.add("hidden");
};

navbtn.forEach((n) => n.addEventListener("click", closenav));

openModel.addEventListener("click", opennav);

overlay.addEventListener("click", closenav);

closemodel.addEventListener("click", closenav);

// sticky
const sectionHeroEl = document.querySelector("#section__hero");
const header = document.querySelector("#header");
const navbar = document.querySelector("#navbar");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      header.classList.add("sticky");
      navbar.classList.remove("border-b");
    }

    if (ent.isIntersecting === true) {
      header.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

// smooth

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});
