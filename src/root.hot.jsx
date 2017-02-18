import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Website from './website/';

const render = (Component) => {
  ReactDOM.render (
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById ('root')
  );
};


render (Website);

if (module.hot) {
  module.hot.accept ('./website/', () => {
    render (Website);
  });
}
