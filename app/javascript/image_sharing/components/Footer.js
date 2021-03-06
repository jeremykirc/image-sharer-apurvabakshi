import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Row } from 'reactstrap';

class Footer extends Component {
  /* Implement your Footer component here */
  static propTypes = {
    title: PropTypes.string.isRequired,
  };


  render() {
    const title = this.props.title;
    return (
      <div style={{ fontSize: '10px', position: 'absolute', bottom: '0', paddingLeft: '50%' }}>
        <Row>
          <p className='text-center'>
            {title}
          </p>
        </Row>
      </div>
    );
  }
}

export default Footer;
