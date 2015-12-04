import Home from './containers/Home';
import TodoApp from './containers/TodoApp';
import FooApp from './containers/FooApp';
import BarApp from './containers/BarApp';

const createRoutes = () => {
  return {
    path: '/',
    component: Home,
    indexRoute: { component: TodoApp },
    childRoutes: [
      { path: 'todo', component: TodoApp },
      { path: 'foo', component: FooApp },
      { path: 'bar', component: BarApp }
    ]
  };
};

export default createRoutes;
