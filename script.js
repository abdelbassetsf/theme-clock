const toggleBtn = document.querySelector('.toggle');
const hourEl = document.querySelector('.hours');
const minuteEl = document.querySelector('.minutes');
const secondEl = document.querySelector('.seconds');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');

const days = [
  'Sunday',
  'Monday',
  'Thuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

function displayHours(hours) {
  return hours <= 9 ? `0${hours}` : `${hours}`;
}

function displayMinutes(minutes) {
  return minutes <= 9 ? `0${minutes}` : `${minutes}`;
}

function nightOrDayHandler(hours) {
  return hours <= 11 ? 'am' : 'pm';
}

// Map Range To Another Range
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

// Toggle Dark Light Theme
toggleBtn.addEventListener('click', e => {
  const htmlEl = document.documentElement;
  if (htmlEl.classList.contains('dark')) {
    htmlEl.classList.remove('dark');
    e.target.innerText = 'Dark Mode';
  } else {
    htmlEl.classList.add('dark');
    e.target.innerText = 'Light Mode';
  }
});

// Set Time
function setTime() {
  const time = new Date();
  const day = time.getDay();
  const month = time.getMonth();
  const hours = time.getHours();
  const hoursForClock = hours % 12; // for 12 hours Clock
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const monthDay = time.getDate();
  hourEl.style.transform = `translateX(-50%) rotate(${scale(
    hours,
    0,
    11,
    0,
    360
  )}deg)`;
  minuteEl.style.transform = `translateX(-50%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;
  secondEl.style.transform = `translateX(-50%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;

  //display Time in nembers
  timeEl.textContent = `${displayHours(hoursForClock)}:${displayMinutes(
    minutes
  )} ${nightOrDayHandler(hours)}`;

  // Display Date
  dateEl.innerHTML = `${days[day]}, ${months[month]}<span class="circle">${monthDay}</span>`;
}

// setTime();

setInterval(setTime, 1000);
