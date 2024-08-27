import env from "./env.js";

const getCurrentWeader = (latitude, longitude) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${env.API_key}&units=metric`;

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const icon = document.querySelector(".icon");
      const temp = document.querySelector(".temp");
      const city = document.querySelector(".city");
      const weather = document.querySelector(".wearher");

      let weatherName;
      switch (data.weather[0].main) {
        case "Clouds":
          weatherName = "구름";
          break;
        case "Rain":
          weatherName = "비";
          break;
      }

      let cityName;
      switch (data.name) {
        case "Jamwon-dong":
          weatherName = "서울시 잠원동";
          break;
      }

      icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      temp.innerText = `${data.main.temp} ℃`;
      weather.innerText = weatherName;
      city.innerText = data.name;
      console.log(data);
    });
};

const getPosition = (position) => {
  const { latitude, longitude } = position.coords;
  getCurrentWeader(latitude, longitude);
};

const errorHandler = (err) => {
  const noti = document.querySelector(".noti");
  noti.style.display = "block";
  alert(err.message);
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(getPosition, errorHandler);
} else {
  alert("Geolocation id not Available");
}
