import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";

TodoForm.propTypes = {
  onTodoSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onTodoSubmit: null,
};

function TodoForm(props) {
  const { onTodoSubmit } = props;

  const [value, setValue] = useState("");

  function handleOnValueChange(e) {
    setValue(e.target.value);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    if (onTodoSubmit === null) return;

    const formValues = {
      title: value,
    };
    onTodoSubmit(formValues);
    setValue("");
  }

  return (
    <form onSubmit={(e) => handleOnSubmit(e)}>
      <input
        type="text"
        value={value}
        onChange={(e) => handleOnValueChange(e)}
      />
    </form>
  );
}

export default TodoForm;
