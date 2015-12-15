import fetch from 'isomorphic-fetch';

import * as types from '../constants/ActionTypes';

export function selectReddit(reddit) {
  return {
    type: types.SELECT_REDDIT,
    reddit
  };
}

export function invalidateReddit(reddit) {
  return {
    type: types.INVALIDATE_REDDIT,
    reddit
  };
}

export function requestPosts(reddit) {
  return {
    type: types.REQUEST_POSTS,
    reddit
  };
}

export function receivePosts(reddit, json) {
  return {
    type: types.RECEIVE_POSTS,
    reddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  };
}

export function fetchPosts(reddit) {
  return function (dispatch) {
    dispatch(requestPosts(reddit));
    return fetch(`https://www.reddit.com/r/${reddit}.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(reddit, json)));
  };
}

function shouldFetchPosts(state, reddit) {
  const posts = state.reddit.postsByReddit[reddit];
  if (!posts) {
    return true;
  } else if (posts.isFetching) {
    return false;
  } else {
    return posts.didInvalidate;
  }
}

export function fetchPostsIfNeeded(reddit) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), reddit)) {
      return dispatch(fetchPosts(reddit));
    } else {
      return Promise.resolve();
    }
  };
}
