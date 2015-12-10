import React, { Component } from 'react';

import { Link } from 'react-router';

class Home extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Link to="/todoist">Todoist</Link>
        {' | '}
        <Link to="/foo">Foo</Link>
        {' | '}
        <Link to="/reddit">Reddit</Link>
        <hr />
        {children}
      </div>
    );
  }
};

export default Home;
