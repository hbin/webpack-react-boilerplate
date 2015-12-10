import React, { Component } from 'react';
import UserList from '../components/UserList';

class FooApp extends Component {
  constructor(props) {
    super(props);
    this.state = {users: []};
  }

  componentDidMount() {
    $.ajax({
      url: 'http://sample.dev/users.json',
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        this.setState({users: data});
      }.bind(this)
    });
  }

  render() {
    return (
      <div>
        <UserList users={this.state.users} />
      </div>
    );
  }
}

export default FooApp;
