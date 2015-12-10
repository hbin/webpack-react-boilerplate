import  * as Types  from './types';

/*
 * action creators
 */
export function addTodo(text) {
  return { type: Types.ADD_TODO, text };
}

export function toggleTodo(id) {
  return { type: Types.TOGGLE_TODO, id };
}

export function setVisibilityFilter(filter) {
  return { type: Types.SET_VISIBILITY_FILTER, filter };
}

export function getVisibilityTodos(todos, filter)  {
  switch(filter) {
  case Types.VisibilityFilters.SHOW_ALL:
    return todos;
  case Types.VisibilityFilters.SHOW_ACTIVE:
    return todos.filter(
      t => !t.completed
    );
  case Types.VisibilityFilters.SHOW_COMPLETED:
    return todos.filter(
      t => t.completed
    );
  default:
    return todos;
  }
}
