export interface IWeatherApi {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: { lon: number; lat: number };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  }
  name: string;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  }
  timezone: number;
  visibility: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[]
  wind: {
    speed: number;
    deg: number;
  }
}

export interface IBaseWeatherInfo {
  clouds: {
    all: number;
  }
  main: {
    humidity: number;
    pressure: number;
    temp: number;
  }
  name: string;
  weather: {
    main: string;
    description: string;
    icon: string;
    url: string;
  }
  wind: {
    speed: number;
    direction: string;
  }
}

export interface appClassesInterface {
  clear: string;
  clouds: string;
  rain: string;
  drizzle: string;
  snow: string;
  mist: string;
  haze: string;
}

export type appClassType = 'clear' | 'clouds' | 'rain' | 'drizzle' | 'snow' | 'mist' | 'haze';