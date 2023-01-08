const container = document.querySelector(".container");
const redBox = document.querySelector(".red-box");
// container.addEventListener("mouseleave", function (event)) {
//     mouse.parentElement.style.display = "none";
// }
// redBox.addEventListener("mouseleave", function (event) {
//     mouse.parentElement.style.display = "none";});

document.getElementsByClassName("red-box").onmouseover = function () {
  mouseOver();
};
document.getElementsByClassName("red-box").onmouseout = function () {
  mouseOut();
};

function mouseOver() {
  document.getElementsByClassName("red-box").style.color = "red";
}

function mouseOut() {
  document.getElementsByClassName("red-box").style.color = "blue";
}
