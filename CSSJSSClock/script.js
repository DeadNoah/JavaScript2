const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const digitalTime = document.getElementById('digitalTime');
const analogClock = document.getElementById('analogClock');
const digitalClock = document.getElementById('digitalClock');
const toggleButton = document.getElementById('toggleButton');
const timezoneButton = document.getElementById('timezoneButton');
const locationInfo = document.getElementById('locationInfo');
const weatherInfo = document.getElementById('weatherInfo');


const timeZones = [
  { id: 'America/New_York', name: 'New York, USA', tz: 'EST', weatherId: 5128581 },
  { id: 'America/Chicago', name: 'Chicago, USA', tz: 'CST', weatherId: 4887398 },
  { id: 'America/Denver', name: 'Denver, USA', tz: 'MST', weatherId: 5419384 },
  { id: 'America/Los_Angeles', name: 'Los Angeles, USA', tz: 'PST', weatherId: 5368361 },
  { id: 'Europe/London', name: 'London, UK', tz: 'GMT', weatherId: 2643743 },
  { id: 'Europe/Paris', name: 'Paris, France', tz: 'CET', weatherId: 2988507 },
  { id: 'Asia/Tokyo', name: 'Tokyo, Japan', tz: 'JST', weatherId: 1850147 },
  { id: 'Australia/Sydney', name: 'Sydney, Australia', tz: 'AEST', weatherId: 2147714 }
];

let currentTimezoneIndex = 0;
let currentTimezone = timeZones[currentTimezoneIndex];


const weatherApiKey = '1641db9f6cc857948185f9b990bd689f'; 


function setDate() {
  const now = new Date();
  const options = { timeZone: currentTimezone.id };
  

  const hours = now.toLocaleString('en-US', { hour: 'numeric', hour12: false, timeZone: currentTimezone.id });
  const minutes = now.toLocaleString('en-US', { minute: 'numeric', timeZone: currentTimezone.id });
  const seconds = now.toLocaleString('en-US', { second: 'numeric', timeZone: currentTimezone.id });
  
  // ANALOG CLOCK
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  
  const minsDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  
  const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  
  // DIGITAL CLOCK
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');
  digitalTime.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
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

function nextTimezone() {
  currentTimezoneIndex = (currentTimezoneIndex + 1) % timeZones.length;
  currentTimezone = timeZones[currentTimezoneIndex];
  locationInfo.textContent = `${currentTimezone.name} (${currentTimezone.tz})`;
  fetchWeather(currentTimezone.weatherId);
  setDate(); 
}

async function fetchWeather(cityId) {
  if (!weatherApiKey || weatherApiKey === 'YOUR_API_KEY') {
      weatherInfo.textContent = 'Please add your OpenWeatherMap API key';
      return;
  }
  
  try {
      const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&appid=${weatherApiKey}`
      );
      const data = await response.json();
      
      if (data.cod === 200) {
          const temp = Math.round(data.main.temp);
          const description = data.weather[0].description;
          const icon = data.weather[0].icon;
          weatherInfo.innerHTML = `
              ${temp}°C, ${description} 
              <img src="https://openweathermap.org/img/wn/${icon}.png" alt="${description}">
          `;
      } else {
          weatherInfo.textContent = 'Weather data unavailable';
      }
  } catch (error) {
      console.error('Error fetching weather:', error);
      weatherInfo.textContent = 'Error loading weather';
  }
}


toggleButton.addEventListener('click', toggleClock);
timezoneButton.addEventListener('click', nextTimezone);


locationInfo.textContent = `${currentTimezone.name} (${currentTimezone.tz})`;
fetchWeather(currentTimezone.weatherId);
setInterval(setDate, 1000);
setDate();