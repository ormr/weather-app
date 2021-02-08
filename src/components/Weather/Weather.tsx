import React from 'react';
import './index.scss';

import { useParams } from 'react-router-dom';

import {
  IBaseWeatherInfo,
  appClassesInterface,
  appClassType,
} from '../../types';
import { OpenWeatherApiService } from '../../services/openweatherapi-service';
import { WeatherNow } from '../WeatherNow';
import { SideMenu } from '../SideMenu/SideMenu';
import { Spinner } from '../Spinner';
import { Error } from '../Error';

const openWeatherApiService = new OpenWeatherApiService();

interface IState {
  error: boolean;
  errorMessage: string;
  loading: boolean;
  data: IBaseWeatherInfo;
}

const initialState: IState = {
  error: false,
  errorMessage: '',
  loading: true,
  data: {
    clouds: {
      all: 0,
    },
    main: {
      humidity: 0,
      pressure: 0,
      temp: 0,
    },
    name: '',
    weather: {
      main: 'app',
      description: '',
      icon: '',
      url: '',
    },
    wind: {
      speed: 0,
      direction: '',
    },
  },
};

export const Weather: React.FC = () => {
  const { city } = useParams<{ city: string }>();

  const [state, setState] = React.useState(initialState);

  console.log(state);

  React.useEffect(() => {
    const getCityWeather = async () => {
      try {
        setState((prevState) => ({ ...prevState, loading: true }));
        const res = await openWeatherApiService.getBaseInfo(city);
        setState((prevState) => ({ ...prevState, data: res, loading: false }));
      } catch (err) {
        setState((prevState) => ({
          ...prevState,
          loading: false,
          error: true,
        }));
      }
    };

    getCityWeather();
  }, [city]);

  const { loading, error } = state;

  if (loading) {
    return (
      <div className="app app__spinner">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="app app__error">
        <Error />
      </div>
    );
  }

  const { clouds, main, name, weather, wind } = state.data;

  const weatherDetails = {
    cloudy: clouds.all,
    ...main,
    ...wind,
  };

  const appClassesObject: appClassesInterface = {
    clear: 'app-dark app-background-1',
    clouds: 'app-white app-background-2',
    rain: 'app-white app-background-9',
    drizzle: 'app-white app-background-9',
    snow: 'app-dark app-background-3',
    mist: 'app-white app-background-50',
    haze: 'app-white app-background-50',
  };

  const weatherEvent = weather.main.toLowerCase() as appClassType;

  return (
    <div className={`app ${appClassesObject[weatherEvent]}`}>
      <WeatherNow temp={main.temp} name={name} weather={weather} />
      <SideMenu weatherDetails={weatherDetails} />
    </div>
  );
};
