import React, { Component } from 'react';

import { Link } from 'react-router';

class Foo extends Component {
  render() {
    return (
      <div>
        I am foo. Let's go to <Link to="/bar">Bar</Link>
      </div>
    );
  }
}

export default Foo;
