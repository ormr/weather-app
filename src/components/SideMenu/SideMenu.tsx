import React from 'react';
import './index.scss';

import { SearchField } from '../SearchField/SearchField';
import { SideMenuSuggestions } from './SideMenuSuggestions';
import { SideMenuWeatherDetails } from './SideMenuWeatherDetails';

interface Props {
  weatherDetails: {
    cloudy: number;
    humidity: number;
    pressure: number;
    speed: number;
    direction: string;
  };
}

export const SideMenu: React.FC<Props> = ({ weatherDetails }) => {
  return (
    <aside className="app__side side-menu">
      <SearchField />
      <SideMenuSuggestions />
      <SideMenuWeatherDetails weatherDetails={weatherDetails} />
    </aside>
  );
};
