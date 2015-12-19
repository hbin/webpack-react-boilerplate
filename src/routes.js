import Home from './containers/Home';
import Todoist from './containers/Todoist';
import Sample from './containers/Sample';
import Reddit from './containers/Reddit';
import requireAuthentication from './auth';

const createRoutes = () => {
  return {
    path: '/',
    component: Home,
    indexRoute: { component: Todoist },
    childRoutes: [
      { path: 'todoist', component: Todoist },
      { path: 'sample', component: requireAuthentication(Sample) },
      { path: 'reddit', component: Reddit }
    ]
  };
};

export default createRoutes;
