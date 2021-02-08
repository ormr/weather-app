import { IBaseWeatherInfo, IWeatherApi } from "../types";

export class OpenWeatherApiService {

  _secretId = process.env.REACT_APP_API_KEY;
  _imgApiBase = 'http://openweathermap.org'
  _apiBase = 'http://api.openweathermap.org';
  _lang = 'ru'

  getResource = async (cityname: string) => {
    const res = await fetch(
      `${this._apiBase}/data/2.5/weather?q=${cityname}&lang=${this._lang}&appid=${this._secretId}`
    );

    if (!res.ok) {
      throw new Error(`Could not fetch ${this._apiBase}` +
        `, received ${res.status}`)
    }

    return await res.json();
  };

  getBaseInfo = async (cityname: string) => {
    const res = await this.getResource(cityname);

    return this._transformToBaseInfo(res);
  }

  _transformToBaseInfo = (res: IWeatherApi): IBaseWeatherInfo => {
    const weather = res.weather[0];
    return {
      name: res.name,
      clouds: {
        all: res.clouds.all
      },
      main: {
        humidity: res.main.humidity,
        pressure: this._transformHectoPascalToMmPerMercury(res.main.pressure),
        temp: this._transformKelvinToCelcius(res.main.temp)
      },
      weather: {
        main: weather.main,
        description: weather.description,
        icon: weather.icon,
        url: `${this._imgApiBase}/img/wn/${weather.icon}.png`
      },
      wind: {
        speed: res.wind.speed,
        direction: this._transformWindDirectionToText(res.wind.deg)
      }
    }
  }

  _transformKelvinToCelcius = (temp: number) => {
    return Math.floor(temp - 273.15);
  }

  _transformHectoPascalToMmPerMercury = (pressure: number) => {
    return Math.floor(pressure / 1.333);
  }

  _transformWindDirectionToText = (degree: number) => {
    if (degree > 337.5) return 'С';
    if (degree > 292.5) return 'СЗ';
    if (degree > 247.5) return 'З';
    if (degree > 202.5) return 'ЮЗ';
    if (degree > 157.5) return 'Ю';
    if (degree > 122.5) return 'ЮВ';
    if (degree > 67.5) return 'В';
    if (degree > 22.5) return 'СВ';
    return 'С';
  }
}