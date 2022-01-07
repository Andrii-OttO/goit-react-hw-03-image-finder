import React from "react";
import PropTypes from "prop-types";
import style from "./styles.module.css";

function BtnLoadMore({ onClick }) {
  return (
    <button type="button" className={style.Button} onClick={onClick}>
      Load More
    </button>
  );
}

BtnLoadMore.propTypes = {
  onClick: PropTypes.func,
};

export default BtnLoadMore;
