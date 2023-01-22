import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const startButton = document.querySelector('[data-start]');

const dateChosen = document.querySelector('#datetime-picker');

const d = document.querySelector('[data-days]');
const h = document.querySelector('[data-hours]');
const m = document.querySelector('[data-minutes]');
const s = document.querySelector('[data-seconds]');

let timer = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() <= options.defaultDate.getTime()) {
      startButton.setAttribute('disabled', '');
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startButton.removeAttribute('disabled');
      startButton.addEventListener('click', countdown);
      function countdown() {
        startButton.setAttribute('disabled', '');
        timer = setInterval(() => {
          const dataMs = new Date(
            dateChosen.value.replace(/-/g, '/')
          ).getTime();
          const now = new Date().getTime();
          const timeLeft = dataMs - now;

          const { days, hours, minutes, seconds } = convertMs(timeLeft);

          d.innerHTML = days < 10 ? addLeadingZero(days) : days;
          h.innerHTML = hours < 10 ? addLeadingZero(hours) : hours;
          m.innerHTML = minutes < 10 ? addLeadingZero(minutes) : minutes;
          s.innerHTML = seconds < 10 ? addLeadingZero(seconds) : seconds;

          if (timeLeft < 1000) {
            clearInterval(timer);
            startButton.removeAttribute('disabled');
          }
        }, 1000);
      }

      function addLeadingZero(value) {
        const stringValue = String(value);
        return stringValue.padStart(2, '0');
      }

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
    }
  },
};

flatpickr('#datetime-picker', options);
