function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const Circle = new Circle(10);
for (let key in circle) {
  if (typeof circle[key] !== "function") {
    console.log(key, circle[key]);
  }

  const keys = Object.keys(circle);
  console.log(keys);
  if ("radius" in circle) console.log("circle has a radius.");
}
