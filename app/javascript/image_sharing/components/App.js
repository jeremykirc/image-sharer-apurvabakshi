import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import Header from './Header';
import Footer from './Footer';
import FeedbackForm from './FeedbackForm';

@observer
class App extends Component {
  static propTypes = {
    stores: PropTypes.object.isRequired
  };

  render() {
    const store = this.props.stores.feedbackStore;
    return (
      <div>
        <div className="container">
          <Header title='Tell us what you think' />
          <FeedbackForm store={store} />
        </div>
        <Footer title='Copyright: Appfolio Inc. Onboarding' />
      </div>
    );
  }
}

export default inject('stores')(App);
