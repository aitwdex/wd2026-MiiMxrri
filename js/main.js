// exportされた関数をここで使えるようにする
import { codeToText } from "./weatherText.js";
import { getTokyoWeather } from "./tokyo.js";
import { getFukuokaWeather } from "./fukuoka.js";
import { getYokohamaWeather } from "./yokohama.js";
import { getSendaiWeather } from "./sendai.js";
import { getNagoyaWeather } from "./nagoya.js";
import { getSapporoWeather } from "./sapporo.js";
//対応するボタンがクリックされたときに天気の情報を取得
document.getElementById("getBtn").addEventListener("click", () => {
  getWeather();
});

document.getElementById("getTokyoBtn").addEventListener("click", () => {
  getTokyoWeather();
});

document.getElementById("getFukuokaBtn").addEventListener("click", () => {
  getFukuokaWeather();
});

document.getElementById("getSapporoBtn").addEventListener("click", () => {
  getSapporoWeather();
});

document.getElementById("getYokohamaBtn").addEventListener("click", () => {
  getYokohamaWeather();
});

document.getElementById("getSendaiBtn").addEventListener("click", () => {
  getSendaiWeather();
});

document.getElementById("getNagoyaBtn").addEventListener("click", () => {
  getNagoyaWeather();
});
//asyncで非同期関数に
async function getWeather() {
  //APIのURL
  const url = "https://api.open-meteo.com/v1/forecast?latitude=34.686&longitude=135.520&current_weather=true&hourly=precipitation_probability&daily=temperature_2m_max,temperature_2m_min";
  //(fectch)→リクエストを送るURLを入れ(wait)→リクエストが完了するまで待機（要：APIのサーバーに通信をしてデータを取ってくる）
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);//コンソールに表示

  const temp = data.current_weather.temperature;
  const code = data.current_weather.weathercode;
  const rainly = data.hourly.precipitation_probability[0];
  const wind = data.current_weather.windspeed;
  const maxtemp = data.daily.temperature_2m_max[0];
  const mintemp = data.daily.temperature_2m_min[0];

  //m→margin,p→padding,bg→background,sm→small,b→bottom,fs-○→文字の大きさ,bold→太文字
  const weather = codeToText(code);
  //textContent→innerHTML：Bootstrapのカードの枠組みごと画面に送り込みたかった。文字だけはtextContent
  document.getElementById("temp").innerHTML =`

  
  
        <div class="border-bottom pb-2 mb-3">
          <div class="fs-2 fw-bold border-start border-primary border-4 ps-2">大阪の天気</div>
        <p class="card-text fs-3">
          <strong>天気:</strong> ${weather} 
           </p>
           </div>

        <div class="d-flex justify-content-center align-items-center vh-100">
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