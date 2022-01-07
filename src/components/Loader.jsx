import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import React from "react";
import Loader from "react-loader-spinner";
import style from "./styles.module.css";

function LoadSpinner() {
  return (
    <div className={style.loader}>
      <Loader type="Bars" color="#00BFFF" height={90} width={100} />
    </div>
  );
}

export default LoadSpinner;
