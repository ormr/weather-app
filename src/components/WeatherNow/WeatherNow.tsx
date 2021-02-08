import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

interface Props {
  temp: number;
  name: string;
  weather: {
    description: string;
    icon: string;
    url: string;
  };
}

export const WeatherNow: React.FC<Props> = ({ temp, name, weather }) => {
  const formatDate = (date: Date) => {
    const toDigitFormat = (date: number) => {
      return date < 10 ? `0${date}` : `${date}`;
    };

    const firstLetterToUpper = (str: string) => {
      return str.slice(0, 1).toUpperCase() + str.slice(1);
    };

    // format to hh:mm - Weekday, Day Month 'year
    return [
      toDigitFormat(date.getHours()),
      ':',
      toDigitFormat(date.getMinutes()),
      ' - ',
      firstLetterToUpper(date.toLocaleDateString('ru', { weekday: 'long' })),
      ', ',
      date.getDate(),
      ' ',
      firstLetterToUpper(date.toLocaleString('ru', { month: 'long' })),
      " '",
      date.getFullYear().toString().slice(2),
    ].join('');
  };

  return (
    <section className="app__weather-now weather-now">
      <Link to="/" className="weather-now__logo">
        Погода
      </Link>
      <div className="weather-now__info">
        <div className="weather-now__temperature">{temp}</div>
        <div className="weather-now__location-and-date">
          <div className="weather-now__city-name">{name}</div>
          <div className="weather-now__date">{formatDate(new Date())}</div>
        </div>
        <div className="weather-now__weather-event">
          <img
            className="weather-now__weather-event--icon"
            src={weather.url}
            alt={weather.description}
          />
          {weather.description}
        </div>
      </div>
    </section>
  );
};
