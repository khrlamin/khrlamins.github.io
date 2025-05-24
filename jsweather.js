const apiKey = 'd8045ae30c46f336666b99b682dff1eb'; // Replace with your actual API key
const cityInput = document.getElementById('cityInput');
const fetchBtn = document.getElementById('fetchBtn');
const weatherResult = document.getElementById('weatherResult');

fetchBtn.addEventListener('click', async () => {
  const city = cityInput.value.trim();
  if (!city) return;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod !== 200) {
      weatherResult.innerHTML = `<p class="text-red-500">Error: ${data.message}</p>`;
      return;
    }

    weatherResult.innerHTML = `
      <h2 class="text-xl font-bold">${data.name}, ${data.sys.country}</h2>
      <p class="mt-2 text-lg">🌡️ ${data.main.temp} °C</p>
      <p>🌥️ ${data.weather[0].description}</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>🌬️ Wind Speed: ${data.wind.speed} m/s</p>
    `;
  } catch (err) {
    weatherResult.innerHTML = `<p class="text-red-500">Fetch error: ${err.message}</p>`;
  }
});
