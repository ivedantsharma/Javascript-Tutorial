const colorCon = document.querySelector(".color-container");
const colorText = document.querySelector(".color-text");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  colorText.textContent = `rgb(${red}, ${green}, ${blue})`;
  colorCon.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  console.log("clicked");
});
