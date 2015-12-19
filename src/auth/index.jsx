import React from 'react';
import { connect } from 'react-redux';
import Unauthenticated from './Unauthenticated';

const requireAuthentication = (
  Component
) => {
  class AuthenticatedComponent extends React.Component {

    componentWillMount () {
      this.checkAuth();
    }

    componentWillReceiveProps (nextProps) {
      this.checkAuth();
    }

    checkAuth () {
      if (!this.props.isAuthenticated) {
        /* let redirectAfterLogin = this.props.location.pathname;
           this.props.dispatch(
           pushState(null, `/login?next=${redirectAfterLogin}`)
           ); */
        console.log('Unauthenticated');
      }
    }

    render() {
      return (
        <div>
          {this.props.isAuthenticated === true
           ? <Component {...this.props} />
           : <Unauthenticated />
          }
        </div>
      );
    }
  }

  const mapStateToProps = (state) => ({
    token: state.auth.token,
    userName: state.auth.userName,
    isAuthenticated: state.auth.isAuthenticated
  });

  return connect(mapStateToProps)(AuthenticatedComponent);
};

export default requireAuthentication;
