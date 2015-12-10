import React, { Component } from 'react';

import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

class TodoApp extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <TodoList />
        <Footer />
      </div>
    );
  }
}

export default TodoApp;
