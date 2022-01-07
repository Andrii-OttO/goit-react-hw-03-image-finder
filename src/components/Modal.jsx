import React from "react";
import style from "./styles.module.css";
import PropTypes from "prop-types";

function Modal({ onClickbackDrop, largeImageURL, alt }) {
  return (
    <div className={style.Overlay} onClick={onClickbackDrop}>
      <div className={style.Modal}>
        <img src={largeImageURL} alt={alt} />
      </div>
    </div>
  );
}
Modal.propTypes = {
  onClickbackDrop: PropTypes.func,
  largeImageURL: PropTypes.string,
  alt: PropTypes.string,
};
export default Modal;
