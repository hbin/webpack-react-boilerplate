import Home from './containers/Home';
import Todoist from './containers/Todoist';
import Sample from './containers/Sample';
import Reddit from './containers/Reddit';

const createRoutes = () => {
  return {
    path: '/',
    component: Home,
    indexRoute: { component: Todoist },
    childRoutes: [
      { path: 'todoist', component: Todoist },
      { path: 'sample', component: Sample },
      { path: 'reddit', component: Reddit }
    ]
  };
};

export default createRoutes;
