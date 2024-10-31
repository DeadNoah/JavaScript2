/* Noah Sanchez OCT 30 2024
Adapted From https://javascripts.com/
JavaScript Drum Kit*/
const secondHand = document.querySelector('.second-hand');
    const minsHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');
    const digitalTime = document.getElementById('digitalTime');
    const analogClock = document.getElementById('analogClock');
    const digitalClock = document.getElementById('digitalClock');
    const toggleButton = document.getElementById('toggleButton');

    function setDate() {
      const now = new Date();

      const seconds = now.getSeconds();
      const secondsDegrees = ((seconds / 60) * 360) + 90;
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

      const mins = now.getMinutes();
      const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
      minsHand.style.transform = `rotate(${minsDegrees}deg)`;

      const hour = now.getHours();
      const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
      hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    }

    function updateDigitalClock() {
      const now = new Date();
      const hours = String(now.getHours());
      const minutes = String(now.getMinutes());
      const seconds = String(now.getSeconds());
      digitalTime.textContent = `${hours}:${minutes}:${seconds}`;
    }

    function toggleClock() {
      if (analogClock.style.display === 'none') {
        analogClock.style.display = 'block';
        digitalClock.style.display = 'none';
        toggleButton.textContent = 'Digital Clock';
      } else {
        analogClock.style.display = 'none';
        digitalClock.style.display = 'block';
        toggleButton.textContent = 'Analog Clock';
      }
    }

    toggleButton.addEventListener('click', toggleClock);

    setInterval(setDate, 1000);
    setInterval(updateDigitalClock, 1000);

    setDate();
    updateDigitalClock();