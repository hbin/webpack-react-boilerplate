import React, { Component } from 'react';

import { Link } from 'react-router';
import { connect } from 'react-redux';

import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from '../actions/reddit';

import Posts from '../components/Posts';
import Picker from '../components/Picker';

class Reddit extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleRefreshClick = this.handleRefreshClick.bind(this);
  }

  componentDidMount() {
    const { selectedReddit, dispatch } = this.props;
    dispatch(fetchPostsIfNeeded(selectedReddit));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedReddit !== this.props.selectedReddit) {
      const { dispatch, selectedReddit } = nextProps;
      dispatch(fetchPostsIfNeeded(selectedReddit))
    }
  }

  handleChange(nextReddit) {
    this.props.dispatch(selectReddit(nextReddit));
  }

  handleRefreshClick(e) {
    e.preventDefault()

    const { selectedReddit, dispatch } = this.props
    dispatch(invalidateReddit(selectedReddit))
    dispatch(fetchPostsIfNeeded(selectedReddit))
  }

  render() {
    const { selectedReddit, posts, isFetching, lastUpdated } = this.props;

    return (
      <div>
        <Picker value={selectedReddit}
                onChange={this.handleChange}
                options={[ 'reactjs', 'frontend' ]} />
        <section>
          {
            lastUpdated &&
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
            </span>
          }
          {
            !isFetching &&
            <a href='#'
               onClick={this.handleRefreshClick}>
              Refresh
            </a>
          }
          {
            isFetching && posts.length === 0 &&
            <h1>Loading...</h1>
          }
          {
            !isFetching && posts.length === 0 &&
            <h1>Empty.</h1>
          }
          {
            posts.length > 0 && <Posts posts={posts} />
          }
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { selectedReddit, postsByReddit } = state.reddit;
  const {
    isFetching, lastUpdated, items: posts
  } = postsByReddit[selectedReddit] || {
    isFetching: true,
    items: []
  }

  return {
    selectedReddit,
    posts,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(Reddit);
