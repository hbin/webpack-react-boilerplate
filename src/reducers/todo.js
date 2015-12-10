import { ADD_TODO, TOGGLE_TODO } from '../actions/types';

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

export default todo;
