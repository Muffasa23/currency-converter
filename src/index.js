import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/style.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './store';

const store = configureStore(); 

//store.dispatch(fetchCurrencies('EUR'));

store.subscribe(() =>
  console.log(store.getState())
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'),
);
registerServiceWorker();
