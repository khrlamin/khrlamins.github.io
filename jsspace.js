const apiKey = 'Kuo1KR6TQeyDCNyq0jRfF8LBmublJ9I9P4xHfLd3'; // Replace with your NASA API key
const spaceContainer = document.getElementById('spaceContainer');
const dateInput = document.getElementById('dateInput');

async function fetchAPOD(date = '') {
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}${date ? `&date=${date}` : ''}`;
  const res = await fetch(url);
  const data = await res.json();

  spaceContainer.innerHTML = `
    <h2 class="text-xl font-bold mb-2">${data.title}</h2>
    <p class="text-sm mb-4">${data.date}</p>
    ${data.media_type === 'image' ? `<img src="${data.url}" class="w-full rounded mb-4" />` : `<iframe src="${data.url}" class="w-full h-64 mb-4" frameborder="0" allowfullscreen></iframe>`}
    <p class="text-md">${data.explanation}</p>
  `;
}

dateInput.addEventListener('change', () => {
  fetchAPOD(dateInput.value);
});

fetchAPOD(); // Load today’s picture on page load
