import React from 'react';
import { connect } from 'react-redux';

import { setVisibilityFilter } from '../actions/todolist';

const FilterLink =({
  active,
  onClick,
  children
}) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a href='#'
       onClick={e => {
           e.preventDefault();
           onClick();
         }}
    >
      {children}
    </a>
  );
};

const mapStateToProps = (
  state,
  ownProps
) => {
  return {
    active: ownProps.filter === state.todolist.visibilityFilter
  };
};

const mapDispatchToProps = (
  dispatch,
  ownProps
) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink);
