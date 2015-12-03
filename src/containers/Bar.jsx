import React from 'react';

import { Link } from 'react-router';

const Bar = () => (
  <div>
    I am bar. Let's go to <Link to="foo">Foo</Link>
  </div>
);

export default Bar;
