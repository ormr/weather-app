import React from 'react';
import './index.scss';

import { Route, Switch } from 'react-router-dom';

import { Welcome } from '../Welcome';
import { Weather } from '../Weather';

export const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Welcome />
      </Route>
      <Route path="/weather/:city">
        <Weather />
      </Route>
    </Switch>
  );
};

/*
TODO:

1.Разбить верстку по компонентам
2. Подключить роутер
3. Написать принимающее API для роутинга
4. Добавить поиск городов (Английский)
5.
*/
