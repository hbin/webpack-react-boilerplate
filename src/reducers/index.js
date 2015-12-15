import { combineReducers } from 'redux';
import todolist from './todolist';
import reddit from './reddit';
import sample from './sample';

const rootReducer = combineReducers({
  todolist,
  reddit,
  sample
});

export default rootReducer;
