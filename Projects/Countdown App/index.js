const daysElement = document.querySelector(".days-box");
const hoursElement = document.querySelector(".hours-box");
const minutesElement = document.querySelector(".minutes-box");
const secondsElement = document.querySelector(".seconds-box");
const year = document.querySelector(".year");

year.innerHTML = `Copyright &copy; ${new Date().getFullYear()} Vedant Sharma`;

let timer = null;
let seconds = 0;
let minutes = 0;
let hours = 0;
let days = 0;

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  if (hours === 24) {
    hours = 0;
    days++;
  }
  daysElement.textContent = days;
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
}

document.querySelector(".start-button").addEventListener("click", function () {
  if (!timer) {
    timer = setInterval(updateTimer, 1000);
  }
});

document.querySelector(".stop-button").addEventListener("click", function () {
  clearInterval(timer);
  timer = null;
});

document.querySelector(".reset-button").addEventListener("click", function () {
  clearInterval(timer);
  timer = null;
  days = hours = minutes = seconds = 0;
  daysElement.textContent =
    hoursElement.textContent =
    minutesElement.textContent =
    secondsElement.textContent =
      0;
});
