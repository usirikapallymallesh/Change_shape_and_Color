// console.log("hello");//connection
let changeColor = document.querySelector("#change-Color");
let changeShape = document.querySelector("#change-Shape");
var colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "black",
  "violet",
  "navy",
  "purple",
];
var index = Math.floor(Math.random() * colors.length);
var shape = document.querySelector(".shape");

var shapes = ["triangle", "square", "diamond", "rectangle", "shape"];
function changeShapeElement() {
  var index1 = Math.floor(Math.random() * shapes.length);
  if (index1 === shapes.length) {
    index1 = 0;
  }
  shape.className = shapes[index1];
}
function changeColorOfShape() {
  if (index === colors.length) {
    index = 0;
  }
  document.querySelector(".color-container").style.backgroundColor =
    colors[index];
  index++;
}
changeColor.addEventListener("click", changeColorOfShape);
changeShape.addEventListener("click", changeShapeElement);
