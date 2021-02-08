import React from 'react';
import './index.scss';

import { SearchField } from '../SearchField';

export const Welcome: React.FC = () => {
  return (
    <div className="app welcome">
      <div className="welcome__body">
        <h1>Погода</h1>
        <div className="welcome__search">
          <SearchField />
        </div>
      </div>
    </div>
  );
};
