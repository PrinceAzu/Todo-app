import React from 'react';

const TodoItem = (props) => {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  }

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.changeHandler(props.item.id)}
      />
      <h4 style={props.item.completed ? completedStyle : null}>{props.item.text}</h4>
    </div>
  );
};

export default TodoItem;
