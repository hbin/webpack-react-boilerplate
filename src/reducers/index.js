import { combineReducers } from 'redux';
import auth from './auth';
import todolist from './todolist';
import reddit from './reddit';
import sample from './sample';

const rootReducer = combineReducers({
  auth,
  todolist,
  reddit,
  sample
});

export default rootReducer;
