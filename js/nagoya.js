import { codeToText } from "./weatherText.js";

export async function getNagoyaWeather(){
    const url = "https://api.open-meteo.com/v1/forecast?latitude=35.181&longitude=136.906&current_weather=true&hourly=precipitation_probability&daily=temperature_2m_max,temperature_2m_min";
  const response = await fetch(url);
  const data = await response.json();

  const temp = data.current_weather.temperature;
  const code = data.current_weather.weathercode;
  const rainly = data.hourly.precipitation_probability[0];
  const wind = data.current_weather.windspeed;
  const maxtemp = data.daily.temperature_2m_max[0];
  const mintemp = data.daily.temperature_2m_min[0];

  const weather = codeToText(code);

  document.getElementById("temp").innerHTML =`

  <div class="p-3 border rounded bg-white shadow-sm">
        <div class="border-bottom pb-2 mb-3">
          <div class="fs-2 fw-bold border-start border-primary border-4 ps-2">名古屋の天気</div>
          </div>
        <p class="card-text fs-3">
          <strong>天気:</strong> ${weather} 
           </p>
           </div>

        
       <div class="p-3 border rounded bg-white shadow-sm">
        <div class="border-bottom pb-2 mb-3">
          <div class="fs-2 fw-bold border-start border-primary border-4 ps-2">気温
          </div>
          </div>
        <p class="card-text fs-3">
          <strong>現在の気温:</strong> ${temp} ℃ <br>
          <strong class = "text-danger">最高気温:</strong> ${maxtemp} ℃ <br>
          <strong class = "text-primary">最低気温:</strong> ${mintemp} ℃ 
           </p>
           </div>

         <div class="p-3 border rounded bg-white shadow-sm">
        <div class="border-bottom pb-2 mb-3">
          <div class="fs-2 fw-bold border-start border-primary border-4 ps-2">降水確率
          </div>
         </div>
        <p class="card-text fs-3">
          <strong>降水確率:</strong> ${rainly} % 
        </p>
        </div>

        <div class="p-3 border rounded bg-white shadow-sm">
        <div class="border-bottom pb-2 mb-3">
          <div class="fs-2 fw-bold border-start border-primary border-4 ps-2">風速
          </div>
         </div>
        <p class="card-text fs-3">
          <strong>風速:</strong> ${wind} km/h 
        </p>
        </div>

  `;
     
}
