import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const ref = {
  input: document.querySelector('#datetime-picker'),
  start: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

ref.start.setAttribute('disabled', 'disabled');

let startTime = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    startTime = selectedDates[0];

    if (Date.now() < startTime) {
      ref.start.removeAttribute('disabled');
    } else {
      Notiflix.Notify.failure('Please choose a date in the future');
      ref.start.setAttribute('disabled', 'disabled');
    }
  },
};

flatpickr('#datetime-picker', options);

ref.start.addEventListener('click', onStart);

function onStart() {
  const intervalID = setInterval(() => {
    const defTime = startTime - Date.now();
    if (defTime >= 0) {
      updateTimerValue(convertMs(defTime));
    } else {
      clearInterval(intervalID);
      Notify.success('Timer finished');
    }
  }, 1000);
}

function updateTimerValue({ days, hours, minutes, seconds }) {
  ref.days.textContent = addLeadingZero(days);
  ref.hours.textContent = addLeadingZero(hours);
  ref.minutes.textContent = addLeadingZero(minutes);
  ref.seconds.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
