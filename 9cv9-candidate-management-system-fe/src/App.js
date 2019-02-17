import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import Routes from './routes';

import './App.css';

class App extends Component {
  static propTypes = {
    init: PropTypes.func
  };

  render() {
    this.props.init();

    return (
      <div className="App" style={{ backgroundColor: 'rgb(245, 245, 245)' }}>
        <Routes />
        <ToastContainer rtl />
      </div>
    );
  }
}

export default App;
