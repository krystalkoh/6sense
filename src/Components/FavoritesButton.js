import React, { useState } from "react";
import styles from "./FavoritesButton.module.css";

const FavoritesButton = (props) => {
  const [active, setActive] = useState(false);

  const handleStarClick = () => {
    console.log(props.data);
    if (!active) {
      setActive(true);
    } else if (active) {
      setActive(false);
    }
  };

  return (
    <>
      {active ? (
        <button onClick={handleStarClick} className={styles.button}>
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.8605 15.1543L8.00054 13.1252L4.14054 15.1543C3.41354 15.5413 2.54854 14.9193 2.68954 14.1003L3.42654 9.80125L0.302542 6.75725C-0.291458 6.17725 0.0395418 5.17025 0.857542 5.05125L5.17354 4.42425L7.10454 0.51225C7.44054 -0.17075 8.56154 -0.17075 8.89754 0.51225L10.8285 4.42325L15.1445 5.05025C15.9625 5.16925 16.2925 6.17625 15.6995 6.75625L12.5755 9.80125L13.3125 14.1003C13.4535 14.9233 12.5865 15.5363 11.8605 15.1543Z"
              fill="#F8CE43"
            />
          </svg>
        </button>
      ) : (
        <button onClick={handleStarClick} className={styles.button}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.00005 13.5129L11.8601 15.5419C12.5861 15.9239 13.4531 15.3109 13.3121 14.4879L12.5751 10.1889L15.6991 7.14395C16.2921 6.56395 15.9621 5.55695 15.1441 5.43795L10.8281 4.81095L8.89705 0.899945C8.56105 0.216945 7.44005 0.216945 7.10405 0.899945L5.17305 4.81195L0.857054 5.43895C0.0390535 5.55795 -0.291947 6.56495 0.302053 7.14495L3.42605 10.1889L2.68905 14.4879C2.54805 15.3069 3.41305 15.9289 4.14005 15.5419L8.00005 13.5129ZM10.9981 12.8289L8.46605 11.4979C8.17405 11.3439 7.82605 11.3439 7.53405 11.4979L5.00205 12.8289L5.48505 10.0089C5.54105 9.68495 5.43305 9.35295 5.19805 9.12395L3.14905 7.12595L5.98005 6.71495C6.30605 6.66795 6.58705 6.46295 6.73305 6.16795L8.00005 3.60195L9.26705 6.16795C9.41205 6.46295 9.69305 6.66795 10.0201 6.71495L12.8511 7.12595L10.8021 9.12395C10.5671 9.35394 10.4591 9.68495 10.5151 10.0089L10.9981 12.8289Z"
              fill="#444444"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default FavoritesButton;
