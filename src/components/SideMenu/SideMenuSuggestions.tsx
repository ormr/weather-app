import React from 'react';

export const SideMenuSuggestions: React.FC = () => {
  return (
    <ul className="side-menu__list side-menu__suggestion-list">
      <li className="side-menu__suggestion-item">
        <a className="side-menu__suggestion-link" href="/weather/москва">
          Москва
        </a>
      </li>
      <li className="side-menu__suggestion-item">
        <a
          className="side-menu__suggestion-link"
          href="/weather/санкт-петербург"
        >
          Санкт-Петербург
        </a>
      </li>
      <li className="side-menu__suggestion-item">
        <a className="side-menu__suggestion-link" href="/weather/новосибирск">
          Новосибирск
        </a>
      </li>
    </ul>
  );
};
