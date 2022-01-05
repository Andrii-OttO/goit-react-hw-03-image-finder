import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import React from "react";
import Loader from "react-loader-spinner";

function LoadSpinner() {
  return (
    <div className="loader">
      <Loader type="Bars" color="#00BFFF" height={60} width={80} />
    </div>
  );
}

export default LoadSpinner;
