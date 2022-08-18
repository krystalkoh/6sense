import React from "react";
import styles from "./Results.module.css";

const Results = (props) => {
  return (
    <>
      <div className={styles.results}>{props.data}</div>;
    </>
  );
};

export default Results;
