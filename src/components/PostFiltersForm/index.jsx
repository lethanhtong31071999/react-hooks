import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

PostFiltersForm.propTypes = {
  onSubmit: PropTypes.func,
};

PostFiltersForm.defaultProps = {
  onSubmit: null,
};

function PostFiltersForm(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);

  function handleOnSubmit(e) {
    e.target.preventDefault();
  }

  function handleOnSearchChange(e) {
    const value = e.target.value;
    setSearchTerm(value);

    if (onSubmit === null) return;

    if (typingTimeoutRef.current !== null) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      const formValues = {
        q: value,
      };
      onSubmit(formValues);
    }, 500);
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => handleOnSearchChange(e)}
      />
    </form>
  );
}

export default PostFiltersForm;
