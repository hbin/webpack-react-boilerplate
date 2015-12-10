import { combineReducers } from 'redux';

import { ADD_TODO, TOGGLE_TODO } from '../actions/types';
import { VisibilityFilters, SET_VISIBILITY_FILTER } from '../actions/types';

const { SHOW_ALL } = VisibilityFilters;

const visibilityFilter = (
  state = SHOW_ALL,
  action
) => {
  switch(action.type) {
  case SET_VISIBILITY_FILTER:
    return action.filter;
  default:
    return state;
  }
};

let nextTodoId = 0;
const todo = (state = {}, action) => {
  switch(action.type) {
  case ADD_TODO:
    return {
      id: nextTodoId++,
      text: action.text,
      completed: false
    };
  case TOGGLE_TODO:
    if (action.id !== state.id) {
      return state;
    }
    return {
      id: state.id,
      text: state.text,
      completed: !state.completed
    };
  default:
    return state;
  }
};

const todos = (state = [], action) => {
  switch(action.type) {
  case ADD_TODO:
    return [
        ...state,
      todo(undefined, action)
    ];
  case TOGGLE_TODO:
    return state.map(t => todo(t, action));
  default:
    return state;
  }
};

export default combineReducers({
  todos, visibilityFilter
});
