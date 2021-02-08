import React from 'react';
import './index.scss';

import { useHistory } from 'react-router-dom';

export const SearchField: React.FC = () => {
  const [query, setQuery] = React.useState<string>('');
  const history = useHistory();

  const searchByName = () => {
    if (query) {
      history.push(`/weather/${query}`);
      setQuery('');
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    return e.key === 'Enter' ? searchByName() : null;
  };

  return (
    <div className="app__search search-field">
      <input
        value={query}
        type="text"
        placeholder="Введите название города"
        className="search-field__input"
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => onKeyDown(e)}
      />
      <button className="search-field__button" onClick={searchByName}></button>
    </div>
  );
};
