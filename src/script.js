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
