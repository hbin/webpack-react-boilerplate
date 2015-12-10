import React from 'react';
import { connect } from 'react-redux';

import { toggleTodo, getVisibilityTodos } from '../actions';
import TodoItem from './TodoItem';

const TodoList = ({
  todos,
  onTodoClick
}) => (
  <ul>
    {todos.map(todo =>
      <TodoItem
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
      />
     )}
  </ul>
);

export default connect(
  (state) => {
    return {
      todos: getVisibilityTodos(
        state.todos,
        state.visibilityFilter
      )
    };
  },
  (dispatch) => {
    return {
      onTodoClick: (id) => {
        dispatch(toggleTodo(id));
      }
    };
  }
)(TodoList);
