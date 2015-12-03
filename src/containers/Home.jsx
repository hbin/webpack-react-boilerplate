import React from 'react';

import { Link } from 'react-router';

const Home = ({
  children
}) => (
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

export default Home;
