import React, { Component } from 'react';

import { Link } from 'react-router';

class FooApp extends Component {
  render() {
    return (
      <div>
        I am FooApp.

        <br />
        Go to <Link to="/bar">Bar</Link>
      </div>
    );
  }
}

export default FooApp;
