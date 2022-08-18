import React, { useState, useReducer } from "react";
import TeamsHeader from "./TeamsHeader";
import styles from "./Header.module.css";
import Activity from "./Activity";

const Header = () => {
  const [all, setAll] = useState("");

  return (
    <>
      <header className={styles.mainHeader}>
        <TeamsHeader setAll={setAll}></TeamsHeader>
      </header>

      <div className={styles.results}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>All Teams</h2>
          <h6 className={styles.showing}>Showing 65 out of 65 teams</h6>
        </div>
        {all && all}
      </div>
    </>
  );
};

export default Header;
