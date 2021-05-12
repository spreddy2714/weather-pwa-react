class Weather {
    main: Main | undefined;
    weather: WeatherData[] = [];
    name : string = '';
    sys : Sys = new Sys();
}

class Main {
    temp: number = 0;
}

class Sys {
    country : string = '';
}

class WeatherData {
    description: string = '';
    icon : string ='';
}

export default Weather;