import fetch from 'isomorphic-fetch';

import * as types from '../constants/ActionTypes';

function requestUsers() {
  return {
    type: types.REQUEST_USERS
  };
}

function receiveUsers(json) {
  return {
    type: types.RECEIVE_USERS,
    users: json
  };
}

function fetchUsers() {
  return function(dispatch, getState) {
    dispatch(requestUsers());
    return fetch(`http://localhost:3000/users.json`)
      .then(response => response.json())
      .then(json => dispatch(receiveUsers(json)));
  };
}

function shouldFetchUsers(state) {
  const { isFetching, users } = state.sample;

  if (users.length === 0) {
    return true;
  } else if (isFetching) {
    return false;
  } else {
    return false;
  }
}

export function fetchUsersIfNeed() {
  return function(dispatch, getState) {
    if (shouldFetchUsers(getState())) {
      return dispatch(fetchUsers());
    } else {
      return Promise.resolve();
    }
  };
}
