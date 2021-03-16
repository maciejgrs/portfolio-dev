let city = "Kraków"
const citySelect = document.querySelector("#category");
 
const weather = document.querySelector(".weather")



const getWeatherData = () => {
  const url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city},pl&units=metric&appid=be45fea377f32d5e3f469489e86cdfc2`;

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json.list;
    })
    .catch((error) => {
      console.log(error);
    });
};

const getDateTime = (value) => {
  const dateTime = new Date(value * 1000);
  const date = dateTime.getDate();
  const month = dateTime.getMonth() + 1;
  const year = dateTime.getFullYear();

  return `${date}.${month}.${year}`;
};

const createWidget = (day) => {
  const titleValue = day.weather[0].main;
  const tempValue = day.temp.day;
  const dateValue = day.dt;

  const widget = document.createElement("div");
  const title = document.createElement("span");
  const icon = document.createElement("img");
  const temp = document.createElement("span");
  const date = document.createElement("span");
  const town = document.createElement("span");

  widget.classList.add("card", titleValue.toLowerCase());
 
  title.classList.add("title");
  temp.classList.add("temp");
  town.classList.add("town");

  icon.setAttribute("src", `img/${titleValue.toLowerCase()}.png`);
  title.textContent = titleValue;
  temp.textContent = Math.floor(tempValue) + 'C'
  date.textContent = getDateTime(dateValue);
  town.textContent = `, ${city.charAt(0).toUpperCase() + city.slice(1)}`;

  widget.appendChild(title);
  widget.appendChild(icon);
  widget.appendChild(temp);
  widget.appendChild(date);

  const first = widget.childNodes[3];

  first.appendChild(town);

  return widget;
};

const renderWeather = () => {
  const weather = document.querySelector(".weather");

  getWeatherData().then((data) => {
    data.forEach((day) => {
      const element = createWidget(day);

      weather.appendChild(element);
    });
  });
};
renderWeather();

citySelect.addEventListener("change", (e) => {
  city = e.target.value;
  console.log(city);

  switch (city) {
    case "krakow":
      city = "Kraków";
      break;
    case "wroclaw":
      city = "Wrocław";
      break;
      case "warszawa":
        city = "Warszawa";
        break;
  }

 
   weather.innerHTML = ''
 

  renderWeather();
});