import React, { useState } from "react";
import activity from "../assets/activity.png";
import styles from "./Activity.module.css";
import data from "../data";

const Activity = () => {
  const activity = data.activities.map((item) => {
    return (
      <div className={styles.container}>
        <img className={styles.pic} src={item.person.avatar}></img>
        <div className={styles.description}>
          <p className={styles.name}>
            <b> {item.person.name}</b> increased <b>{item.target}</b>.
          </p>
          <p className={styles.created}> Created on {item.created_at}</p>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className={styles.activity}>
        <h1 className={styles.title}>Activity</h1>
        <hr />
        <div>{activity}</div>
      </div>
    </>
  );
};

export default Activity;
