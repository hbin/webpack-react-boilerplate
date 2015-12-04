import React, { Component } from 'react';

import AddTodo from '../components/AddTodo';
import VisibleTodoList from '../components/TodoList';
import Footer from '../components/Footer';

class TodoApp extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default TodoApp;
