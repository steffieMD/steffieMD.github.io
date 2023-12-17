const dateCurrent = () => {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[new Date().getDay()];

  let hours = new Date().getHours().toString().padStart(2, "0");

  let minutes = new Date().getMinutes().toString().padStart(2, "0");

  let currentDateParagraph = document.querySelector("#the-current-date");

  currentDateParagraph.innerHTML = `${day} ${hours}:${minutes}`;
};

dateCurrent();

const searchEngine = (event) => {
  event.preventDefault();

  let userInput = document.querySelector("#search-input");

  let cityHeader = document.querySelector("h1");

  if (userInput.value.length < 2) {
    cityHeader.innerHTML = `<small>Input city!</small>`;
  } else {
    cityHeader.innerHTML = userInput.value;
  }

  let city = userInput.value;

  let apiKey = `8b1a1ta30dba43658ff8edf2ddfbo830`;

  const searchCity = (response) => {
    //Temperature
    let temperature = Math.round(response.data.temperature.current);

    let tempElement = document.querySelector("#temp");
    tempElement.innerHTML = temperature;

    // Description
    let description = response.data.condition.description;
    console.log(description);

    let descriptionElement = document.querySelector("#description");
    descriptionElement.innerHTML = description;

    //   Humidity
    let humidity = response.data.temperature.humidity;
    console.log(humidity);
    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = `${humidity}%`;

    //   Wind
    let wind = response.data.wind.speed;
    console.log(wind);
    let windElement = document.querySelector("#wind");
    windElement.innerHTML = `${wind.toFixed(1)}km/h`;
  };

  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(searchCity);
};

let searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", searchEngine);

console.log(new Date().getMinutes());
