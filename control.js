/// getting input control
import { calculation } from "./model.js";

let container = [];
const output = function () {
  $(".operatorN").click(function (e) {
    container.push(e.target.classList[0]);
  });
  $(".operator").click(function (e) {
    container.push(e.target.classList[0]);
  });
  $(".equal").click(function () {
    calculation(container);
  });
  $(".clear").click(function () {
    container = [];
  });
};

output();
