import Home from './containers/Home';
import Todoist from './containers/Todoist';
import FooApp from './containers/FooApp';
import Reddit from './containers/Reddit';

const createRoutes = () => {
  return {
    path: '/',
    component: Home,
    indexRoute: { component: Todoist },
    childRoutes: [
      { path: 'todoist', component: Todoist },
      { path: 'foo', component: FooApp },
      { path: 'reddit', component: Reddit }
    ]
  };
};

export default createRoutes;
