import Home from '../containers/Home';
import TodoApp from '../containers/TodoApp';
import Foo from '../containers/Foo';
import Bar from '../containers/Bar';

const createRoutes = () => {
  return {
    path: '/',
    component: Home,
    indexRoute: { component: TodoApp },
    childRoutes: [
      { path: 'todo', component: TodoApp },
      { path: 'foo', component: Foo },
      { path: 'bar', component: Bar }
    ]
  };
};

export default createRoutes;
