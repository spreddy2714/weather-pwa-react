import axios from 'axios';

const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';
export const fetchWeather = async (cityName: string) => {
   const {data} = await axios.get(WEATHER_URL, {
        params: {
            q: cityName,
            units : 'metric',
            APPID : process.env.REACT_APP_WEATHER_API_KEY
        }
    });
    return data;
}


