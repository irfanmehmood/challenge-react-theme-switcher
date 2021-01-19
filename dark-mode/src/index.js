import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './common/containers/App';
import './styles/_main.scss';
import Routes from './routes';
import {getUserSavedTheme} from './libs/funcs';

const rootElement = document.getElementById('root');
rootElement.className = getUserSavedTheme();

ReactDOM.render(
  <AppContainer>
    <Routes />
  </AppContainer>,
  document.getElementById('root')
);
