import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import {store} from './Config/Redux'

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<Provider store={store}><App /></Provider>, rootElement);
} else {
  ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
}
