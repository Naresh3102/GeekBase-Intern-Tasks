let sleepStart = "21:00";
let sleepEnd = "06:00";
let wakeUpStart = "06:00";
let wakeUpEnd = "07:00";
let lunchStart = "12:00";
let lunchEnd = "13:00";

var modal = document.getElementById("settingsModal");

var btn = document.getElementById("settingsIcon");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document
  .getElementById("settingsForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    sleepStart = document.getElementById("sleepStart").value;
    sleepEnd = document.getElementById("sleepEnd").value;
    wakeUpStart = document.getElementById("wakeUpStart").value;
    wakeUpEnd = document.getElementById("wakeUpEnd").value;
    lunchStart = document.getElementById("lunchStart").value;
    lunchEnd = document.getElementById("lunchEnd").value;

    modal.style.display = "none";
  });

function updateTime() {
  const now = new Date();
  let hours24 = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = hours24 >= 12 ? "pm" : "am";
  let hours;

  hours = hours24 % 12;
  hours = hours ? hours : 12;

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById(
    "time"
  ).innerHTML = `${hours}:${minutes}:${seconds} ${ampm}`;

  let currentImage = document.getElementById("activityImage").src;
  let newImage = "";

  if (isSleepingTime(hours24, minutes)) {
    newImage = "bed.png";
  } else if (isWakeUpTime(hours24, minutes)) {
    newImage = "wake-up.png";
  } else if (isLunchTime(hours24, minutes)) {
    newImage = "lunch.png";
  } else {
    newImage = "default.png";
  }

  if (currentImage !== newImage) {
    document.getElementById("activityImage").src = newImage;
  }
}

function isSleepingTime(hours, minutes) {
  let currentTime = hours * 60 + minutes;
  let sleepStartTime = timeStringToMinutes(sleepStart);
  let sleepEndTime = timeStringToMinutes(sleepEnd);

  return currentTime >= sleepStartTime || currentTime < sleepEndTime;
}

function isWakeUpTime(hours, minutes) {
  let currentTime = hours * 60 + minutes;
  let wakeUpStartTime = timeStringToMinutes(wakeUpStart);
  let wakeUpEndTime = timeStringToMinutes(wakeUpEnd);

  return currentTime >= wakeUpStartTime && currentTime < wakeUpEndTime;
}

function isLunchTime(hours, minutes) {
  let currentTime = hours * 60 + minutes;
  let lunchStartTime = timeStringToMinutes(lunchStart);
  let lunchEndTime = timeStringToMinutes(lunchEnd);

  return currentTime >= lunchStartTime && currentTime < lunchEndTime;
}

function timeStringToMinutes(timeString) {
  let timeComponents = timeString.split(":");
  return parseInt(timeComponents[0]) * 60 + parseInt(timeComponents[1]);
}

setInterval(updateTime, 1000);

updateTime();
