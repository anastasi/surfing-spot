import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react';
import TripStore from './stores/TripStore';
import registerServiceWorker from './registerServiceWorker';

const Root = (
  <Provider TripStore={TripStore}>
    <App />
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
