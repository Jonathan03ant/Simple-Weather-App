import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { set } from 'mongoose';


function App() {
    const [city, setCity] = useState('Toronto');
    const [weatherData, setWeatherData] = useState(null);

    const kelvinToCelsius = (kel) => {
        return Math.round(kel - 273.15);
    }

    useEffect(() => {
        const fetchWeather = async () => {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=13915fa1b194caeb1e9ae2f1ebd470a5`);
            setWeatherData(response.data);
            console.log(response.data);
        }

        fetchWeather();
    }, [city]);

    const handleSearch = async (e) => {
        e.preventDefault();
        setCity(e.target.value);
    }

  return (
    <>
        <div className='mt-10 mx-40'>
            <form onSubmit={handleSearch}>
                <input 
                    type="text" 
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Search for a city"
                />
                <button type="submit">Search</button>
            </form>
        </div>
        <div className='container flex flex-col justify-between items-center h-screen'>
            <div className='top mt-20'>
                <div> 
                    <p className=' text-4xl font-bold'>{weatherData && weatherData.name}</p>
                </div>
                <div>
                    <h2 className='text-7xl'>{weatherData && kelvinToCelsius(weatherData.main.temp)}°C</h2>
                </div>

            </div>

            <div className='bottom mb-40 flex space-x-10'>
                <div> 
                    <h3> {weatherData && weatherData.main.humidity}% </h3>
                    <h3> Humidity </h3>
                </div>
                <div>
                    <h3>{weatherData && kelvinToCelsius(weatherData.main.feels_like)}°C</h3>
                    <h3> Feels Like </h3>
                </div>

                <div>
                    <h3>{weatherData && weatherData.wind.speed}MPH</h3>
                    <h3> Wind Speed </h3>
                </div>
            </div>

            <div className=' mx-10 absolute right-0 top-1/2 transform -translate-y-1/2 -rotate-90'>
                <p>{weatherData && weatherData.weather[0].main}</p>
            </div>

        </div>
      
    </>
  )
}

export default App
