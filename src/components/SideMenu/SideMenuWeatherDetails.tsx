import React from 'react';

interface Props {
  weatherDetails: {
    cloudy: number;
    humidity: number;
    pressure: number;
    speed: number;
    direction: string;
  };
}

export const SideMenuWeatherDetails: React.FC<Props> = ({ weatherDetails }) => {
  const { cloudy, humidity, pressure, speed, direction } = weatherDetails;
  return (
    <>
      <div className="side-menu__title">Детали погоды</div>
      <ul className="side-menu__list side-menu__details side-menu-details">
        <li className="side-menu-details__item">
          <div className="side-menu-details__title">Облачность</div>
          <div className="side-menu-details__value">{cloudy}%</div>
        </li>
        <li className="side-menu-details__item">
          <div className="side-menu-details__title">Влажность</div>
          <div className="side-menu-details__value">{humidity}%</div>
        </li>
        <li className="side-menu-details__item">
          <div className="side-menu-details__title">Давление</div>
          <div className="side-menu-details__value">{pressure} мм рт. ст.</div>
        </li>
        <li className="side-menu-details__item">
          <div className="side-menu-details__title">Ветер</div>
          <div className="side-menu-details__value">
            {speed} м/c ({direction})
          </div>
        </li>
      </ul>
    </>
  );
};
