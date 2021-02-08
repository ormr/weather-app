import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

import { ReactComponent as ErrorIcon } from '../../assets/error-icon.svg';
import { ReactComponent as UndoIcon } from '../../assets/undo-icon.svg';

export const Error: React.FC = () => {
  return (
    <div className="error">
      <div className="error__icon">
        <ErrorIcon />
      </div>
      <div className="error__text">
        <p>Произошла ошибка.</p>
        <p>Попробуйте другой запрос или повторите позже.</p>
      </div>
      <Link className="error__back-button" to="/">
        <UndoIcon />
      </Link>
    </div>
  );
};
