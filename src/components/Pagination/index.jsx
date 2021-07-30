import React from "react";
import PropTypes from "prop-types";

Pagination.propTypes = {
  pagination: PropTypes.object,
  onPageChange: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  pagination: {},
  onPageChange: null,
};

function Pagination(props) {
  const { pagination, onPageChange } = props;
  const { _page, _limit, _totalRows } = pagination;

  function handlePageChange(newPage) {
    onPageChange(newPage);
  }

  return (
    <div>
      <button disabled={_page <= 1} onClick={() => handlePageChange(_page - 1)}>
        Prev
      </button>

      <button
        disabled={_page >= Math.ceil(_totalRows / _limit)}
        onClick={() => handlePageChange(_page + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
