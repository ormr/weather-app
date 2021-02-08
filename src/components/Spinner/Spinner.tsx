import React from 'react';
import './index.scss';

export const Spinner: React.FC = () => {
  return (
    <div className="app app__spinner app-spinner">
      <div className="app__body">
        <div className="cloud-spinner">
          <i className="cloud"></i>
        </div>
      </div>
    </div>
  );
};
