import { combineReducers } from 'redux';
import todolist from './todolist';
import reddit from './reddit';

const rootReducer = combineReducers({
  todolist,
  reddit
});

export default rootReducer;
