import React from 'react';
import ReactDOM from 'react-dom';
/* Braces mean we want to import a named export 
from the file rather than a default export */
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
  /* Create an instance of the provider around the App component.
     -- Pass the Provider a single prop called store.
     -- The store is going to be the result of calling createStore
        -- and pasing in our reducers */
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);