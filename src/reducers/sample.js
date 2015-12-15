import * as types from '../constants/ActionTypes';

function sampleReducer(state = {
  isFetching: false,
  users: []
}, action) {
  switch (action.type) {
  case types.REQUEST_USERS:
    return Object.assign({}, state, {
      isFetching: true
    });
  case types.RECEIVE_USERS:
    return Object.assign({}, state, {
      isFetching: false,
      users: action.users
    });
  default:
    return state;
  }
};

export default sampleReducer;
