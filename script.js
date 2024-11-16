const apiKey = 'b32973a133672eea91a5dc9c1bf041fb'; // Replace with your OpenWeatherMap API key

function getWeather() {
    const city = document.getElementById('cityInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('cityName').innerText = data.name;
                document.getElementById('temperature').innerText = `Temperature: ${data.main.temp} °C`;
                document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
                document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity} %`;
                document.getElementById('wind').innerText = `Wind Speed: ${data.wind.speed} m/s`;
            } else {
                document.getElementById('weatherResult').innerText = 'City not found';
            }
        })
        .catch(error => {
            document.getElementById('weatherResult').innerText = 'Error fetching weather data';
            console.error('Error fetching weather data:', error);
        });
}

