
/**weatherText.js
 * Open-Meteoの天気コード（weathercode）を日本語のテキストに変換する関数
 * @param {number} code - 天気コード
 * @returns {string} 日本語の天気名
 */
export function codeToText(code) {
  if (code === 0) return "快晴 ☀️";
  if (code <= 3) return "晴れ〜曇り ⛅";
  if (code <= 48) return "霧 🌫️";
  if (code <= 67) return "雨 🌧️";
  if (code <= 77) return "雪 ❄️";
  if (code <= 82) return "にわか雨 🌦️";
  return "雷雨 ⛈️";
}