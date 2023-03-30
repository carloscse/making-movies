import React from "react";
import { useSelector } from "react-redux";

const Loader = () => {
  const showing = useSelector((state) => state.movies.loading);

  return (
    <div align="center">
      <div className="loadingOverlay" color="#28a745" style={{visibility: showing ? "visible" : "hidden",}}>
        <div className="loadingPop"><div className="spinner-border"></div><p>LOADING...</p></div>
      </div>
    </div>
  );
};

export default Loader;
