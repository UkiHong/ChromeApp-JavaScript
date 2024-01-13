const API_KEY = "a915af1fe8b16786bf05f62e36c3c7e6";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      const temp = Math.floor(data.main.temp);
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${temp}`;
    });
}

function onGeoError() {
  alert("can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
