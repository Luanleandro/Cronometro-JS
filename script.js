let minute = 0;
let second = 0;
let milisecond = 0;
let interval;

const appendMinute = document.querySelector("#minute");
const appendSecond = document.querySelector("#seconds");
const appendMiliseconds = document.querySelector("#miliseconds");
const buttonStart = document.querySelector("#button-start");
const buttonStop = document.querySelector("#button-stop");
const buttonReset = document.querySelector("#button-reset");

buttonStart.onclick = function () {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
};

buttonStop.onclick = function () {
  clearInterval(interval);
};

buttonReset.onclick = function () {
  clearInterval(interval);
  minute = 00;
  second = 00;
  milisecond = 00;

  appendMinute.innerText = "0" + minute;
  appendSecond.innerText = "0" + second;
  appendMiliseconds.innerText = "0" + milisecond;
};

function startTimer() {
  milisecond++;
  if (milisecond <= 9) {
    appendMiliseconds.innerText = "0" + milisecond;
  }

  if (milisecond > 9) {
    appendMiliseconds.innerText = milisecond;
  }
  if (milisecond > 99) {
    second++;
    appendSecond.innerHTML = "0" + second;
    milisecond = 0;
    appendMiliseconds.innerHTML = 0;
  }

  if (second > 9) {
    appendSecond.innerHTML = second;
  }

  if (second === 60) {
    minute++;
    appendMinute.innerHTML = "0" + minute;
    second = 0;
    appendSecond.innerHTML = 0;
  }

  if (minute > 9) {
    appendMinute.innerHTML = minute;
  }
}
