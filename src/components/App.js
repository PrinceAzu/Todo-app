import React from 'react';
import TodoItem from './TodoItem';
import Header from './Header'
import todoData from '../todoData/todoData';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoData,
    };
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos,
      };
    });
  }

  render() {
    const todoItems = this.state.todos.map((item) => {
      return (
        <TodoItem
          key={item.id}
          item={item}
          changeHandler={this.changeHandler}
        />
      );
    });

    return (
      <div className="todo-list">
        <Header/>
        {todoItems}
      </div>
    );
  }
}

export default App;
