import React from 'react';
import { connect } from 'react-redux';

import { VisibilityFilters } from '../constants/ActionTypes';
import { toggleTodo } from '../actions/todolist';
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

const getVisibilityTodos = (todos, filter) => {
  switch(filter) {
  case VisibilityFilters.SHOW_ALL:
    return todos;
  case VisibilityFilters.SHOW_ACTIVE:
    return todos.filter(
      t => !t.completed
    );
  case VisibilityFilters.SHOW_COMPLETED:
    return todos.filter(
      t => t.completed
    );
  default:
    return todos;
  }
}

export default connect(
  (state) => {
    const { todos, visibilityFilter } = state.todolist;
    return {
      todos: getVisibilityTodos(todos, visibilityFilter)
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
