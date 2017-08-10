import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
// import store from './store'
import { Router, Route, IndexRoute } from 'react-router'
import store, { history } from './store'
import registerServiceWorker from './registerServiceWorker';
import BatchesContainer from './batches/BatchesContainer'
import BatchPage from './batches/BatchPage'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={BatchesContainer}/>
        <Route path="/batches/:batchId" component={BatchPage} />

      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'));
  registerServiceWorker();
