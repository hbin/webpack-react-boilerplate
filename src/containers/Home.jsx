import React, { Component } from 'react';

import { Link } from 'react-router';

class Home extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Link to="/todo">Go to Todo</Link>
        {' | '}
        <Link to="/foo">Go to Foo</Link>
        {' | '}
        <Link to="/bar">Go to Bar</Link>
        <hr />
        {children}
      </div>
    );
  }
};

export default Home;
