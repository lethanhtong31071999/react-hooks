import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
};

function TodoList(props) {
  const { todoList, onTodoClick } = props;

  return (
    <ul className="todo-list">
      <h3>Click to delete tasks</h3>
      {todoList.map(function (todo, i) {
        return (
          <li
            className="todo-item"
            key={todo.id}
            onClick={() => onTodoClick(todo)}
          >
            {todo.title}
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
