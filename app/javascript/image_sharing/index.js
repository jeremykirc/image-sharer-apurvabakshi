import React from 'react';
import { Provider } from 'mobx-react';
import ReactDOM from 'react-dom';
import { FeedbackStore } from './stores/FeedbackStore';
import App from './components/App';

const stores = {
  feedbackStore: new FeedbackStore()
};

ReactDOM.render(
  <Provider stores={stores}>
    <App />
  </Provider>,
  document.getElementById('feedback-root')
);
