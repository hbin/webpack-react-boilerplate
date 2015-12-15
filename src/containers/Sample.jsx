import React, { Component } from 'react';

import { connect } from 'react-redux';

import { fetchUsersIfNeed } from '../actions/sample';

import UserList from '../components/UserList';

class Sample extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchUsersIfNeed());
  }

  render() {
    const { isFetching, users } = this.props;

    return (
      <section>
        {
          isFetching && users.length === 0 &&
          <h1>Loading...</h1>
        }
        {
          !isFetching && users.length === 0 &&
          <h1>Empty.</h1>
        }
        {
          users.length > 0 && <UserList users={users} />
        }
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  const { isFetching, users } = state.sample;

  return {
    isFetching,
    users
  }
}

export default connect(mapStateToProps)(Sample);
