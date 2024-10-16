function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
  xmlHttp.send(null);
  return xmlHttp.responseText;
}

function requestWeatherData() {
  let data = JSON.parse(httpGet("http://api.weatherapi.com/v1/current.json?key=6f8bf9b88be94e25927203155240910&q=52402&aqi=no"));
  console.log(data);
  let p = document.getElementById("weatherDataDisplay");
  p.innerText = `Feels like: ${data.current.feelslike_f} Degrees Farenheit`;
}