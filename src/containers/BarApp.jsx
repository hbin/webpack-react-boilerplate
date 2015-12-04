import React, { Component } from 'react';

import { Link } from 'react-router';

class Bar extends Component {
  render() {
    return (
      <div>
        I am bar Let's go to <Link to="foo">Foo</Link>
      </div>
    );
  }
}

export default Bar;
