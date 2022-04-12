//// rendering operation view
import { fixed } from "./model.js";
let screen = [];

const input = function () {
  $(".operatorN").click(function (e) {
    screen.push(e.target.classList[0]);
    $(".input").text(`${screen.join("")}`);
  });
  $(".point").click(function (e) {
    $(".point").attr("disabled", "");
  });
  $(".operator").click(function (e) {
    screen.push(e.target.classList[0]);
    $(".input").text(`${screen.join("")}`);
    document.querySelector(".point").removeAttribute("disabled");
  });
  $(".equal").click(function () {
    const result = eval(screen.join(""));
    const smallNum = fixed(result);
    $(".input").text(`${smallNum}`);
    screen = [smallNum];
    $(".point").attr("disabled", "");
  });
  $(".clear").click(function () {
    screen = [];
    $(".input").text("0");
    document.querySelector(".point").removeAttribute("disabled");
    console.log(screen);
  });
};
input();
