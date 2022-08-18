import React from "react";
import styles from "./Navbar.module.css";
import photo from "../assets/john.png";

const Navbar = () => {
  return (
    <>
      <nav>
        <div>
          <p className={styles.title}>NARWHAL</p>
          <div className={styles.vertical}></div>
          <p className={styles.teams}>Teams</p>
          <div className={styles.notifContainer}>
            <svg
              preserveAspectRatio="xMinYMin meet"
              width="100%"
              height="100%"
              viewBox="0 0 34 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.5">
                <path
                  d="M4 23V13H20V23"
                  stroke="#444444"
                  stroke-width="2"
                  stroke-linecap="square"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23 27V35H1V27H8V30H16V27H23Z"
                  stroke="#444444"
                  stroke-width="2"
                  stroke-linecap="square"
                />
                <path
                  d="M9 18H15"
                  stroke="#444444"
                  stroke-width="2"
                  stroke-linecap="square"
                />
                <path
                  d="M9 22H15"
                  stroke="#444444"
                  stroke-width="2"
                  stroke-linecap="square"
                />
              </g>
              <rect
                x="13"
                y="1.11621"
                width="20"
                height="20"
                rx="10"
                fill="#2995DA"
                stroke="white"
                stroke-width="2"
              />
              <path
                d="M23.036 14.2482C24.741 14.2482 25.808 13.3572 25.808 12.1032C25.808 10.9702 24.807 10.3982 24.103 10.3212C24.851 10.2002 25.687 9.62821 25.687 8.63821C25.687 7.41721 24.631 6.66921 23.047 6.66921C21.826 6.66921 20.935 7.15321 20.363 7.82421L21.023 8.62721C21.551 8.08821 22.167 7.81321 22.926 7.81321C23.74 7.81321 24.411 8.16521 24.411 8.83621C24.411 9.50721 23.762 9.80421 22.893 9.80421C22.607 9.80421 22.178 9.80421 22.057 9.79321V10.9592C22.167 10.9482 22.585 10.9372 22.893 10.9372C23.949 10.9372 24.521 11.2562 24.521 11.9822C24.521 12.6532 23.96 13.1042 22.992 13.1042C22.211 13.1042 21.441 12.7632 20.968 12.2132L20.264 13.0602C20.77 13.7202 21.738 14.2482 23.036 14.2482Z"
                fill="white"
              />
            </svg>
          </div>
          <div className={styles.john}>
            <svg
              preserveAspectRatio="xMinYMin meet"
              viewBox="0 0 70 12"
              width="70"
              height="100%"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M9.128 10V0.661999H7.49V4.47H2.632V0.661999H0.994V10H2.632V5.912H7.49V10H9.128ZM14.2052 10.168C15.2692 10.168 16.2632 9.818 16.9492 9.174L16.2772 8.208C15.7872 8.698 15.0172 8.964 14.3452 8.964C13.0712 8.964 12.3152 8.11 12.2032 7.102H17.4112V6.738C17.4112 4.61 16.1232 3.07 14.0932 3.07C12.0912 3.07 10.6632 4.652 10.6632 6.612C10.6632 8.754 12.1612 10.168 14.2052 10.168ZM15.9972 6.052H12.1892C12.2452 5.24 12.8332 4.274 14.0792 4.274C15.4092 4.274 15.9552 5.254 15.9972 6.052ZM20.3322 10V0.661999H18.8622V10H20.3322ZM23.7091 10V0.661999H22.2391V10H23.7091ZM28.6821 10.168C30.8381 10.168 32.1541 8.544 32.1541 6.612C32.1541 4.666 30.8381 3.07 28.6821 3.07C26.5261 3.07 25.2101 4.666 25.2101 6.612C25.2101 8.544 26.5261 10.168 28.6821 10.168ZM28.6821 8.866C27.4361 8.866 26.7361 7.816 26.7361 6.612C26.7361 5.422 27.4361 4.372 28.6821 4.372C29.9421 4.372 30.6281 5.422 30.6281 6.612C30.6281 7.816 29.9421 8.866 28.6821 8.866ZM35.4068 9.468C35.4068 8.656 34.9028 8.194 34.3288 8.194C33.7968 8.194 33.3768 8.628 33.3768 9.146C33.3768 9.664 33.7408 10.042 34.2028 10.042C34.3008 10.042 34.4128 10.014 34.4408 10C34.3568 10.476 33.8808 11.05 33.4328 11.316L34.1048 11.862C34.8748 11.316 35.4068 10.434 35.4068 9.468ZM42.2798 10.168C44.0858 10.168 45.4298 9.16 45.4298 7.032V0.661999H43.7918V7.018C43.7918 8.026 43.1478 8.712 42.1538 8.712C41.4398 8.712 40.9218 8.348 40.5578 7.928L39.7878 9.174C40.4598 9.874 41.3138 10.168 42.2798 10.168ZM50.4477 10.168C52.6037 10.168 53.9197 8.544 53.9197 6.612C53.9197 4.666 52.6037 3.07 50.4477 3.07C48.2917 3.07 46.9757 4.666 46.9757 6.612C46.9757 8.544 48.2917 10.168 50.4477 10.168ZM50.4477 8.866C49.2017 8.866 48.5017 7.816 48.5017 6.612C48.5017 5.422 49.2017 4.372 50.4477 4.372C51.7077 4.372 52.3937 5.422 52.3937 6.612C52.3937 7.816 51.7077 8.866 50.4477 8.866ZM61.4688 10V5.212C61.4688 3.826 60.7408 3.07 59.2848 3.07C58.2208 3.07 57.3528 3.616 56.9048 4.148V0.661999H55.4348V10H56.9048V5.268C57.2408 4.82 57.8848 4.372 58.6408 4.372C59.4668 4.372 59.9988 4.68 59.9988 5.744V10H61.4688ZM69.4258 10V5.24C69.4258 3.854 68.6978 3.07 67.2418 3.07C66.1778 3.07 65.2958 3.616 64.8478 4.148V3.238H63.3778V10H64.8478V5.268C65.1978 4.82 65.8418 4.372 66.5838 4.372C67.4098 4.372 67.9558 4.708 67.9558 5.772V10H69.4258Z"
                fill="black"
              />
            </svg>
          </div>
          <div className={styles.photo}>
            <img src={photo}></img>
          </div>
          <div className={styles.caret}>
            <svg
              preserveAspectRatio="xMinYMin meet"
              width="10"
              height="5"
              viewBox="0 0 10 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.757324 0H9.24261L4.99996 4.24264L0.757324 0Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;