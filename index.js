const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
};

console.dir(refs.days);

// function pad(value) {
//   return String(value).padStart(2, '0');
// }

// function updateClockface(time) {
//   const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));

//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//   );

//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//   //   refs.days.textContent = `${hours}:${mins}:${secs}`;
// }
