import React, { useState } from "react";
import styles from "./TeamsHeader.module.css";
import button from "../assets/button.png";
import search from "../assets/search.png";
import data from "../data";
import FavoritesButton from "./FavoritesButton";

const TeamsHeader = (props) => {
  const handleFavorites = () => {
    const favs = data.teams.map((item) => {
      if (item.is_favorited === true) {
        return (
          <div className={styles.card}>
            <div className={styles.cardContainer}>
              <img className={styles.pic} src={item.image}></img>
              <div className={styles.container}>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.created}> Created on {item.created_at}</p>
              </div>
            </div>
            <div className={styles.description}>
              <p>{item.description}</p>
            </div>

            <hr />
            <div className={styles.comment}>
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.3"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.5 0H12.5C12.7765 0 13 0.223502 13 0.500004V9.00008C13 9.27658 12.7765 9.50008 12.5 9.50008H7.188L3.329 12.8766C3.18 13.0066 2.969 13.0356 2.7935 12.9551C2.6145 12.8741 2.5 12.6966 2.5 12.5001V9.50008H0.5C0.2235 9.50008 0 9.27658 0 9.00008V0.500004C0 0.223502 0.2235 0 0.5 0ZM14 4.00004H15.5C15.776 4.00004 16 4.22404 16 4.50004V12.0001C16 12.2761 15.776 12.5001 15.5 12.5001H14V14.5001C14 14.6876 13.8955 14.8591 13.729 14.9446C13.559 15.0311 13.36 15.0146 13.2095 14.9066L9.84 12.5001H5.278L7.564 10.5001H13C13.5525 10.5001 14 10.0526 14 9.50009V4.00004Z"
                  fill="black"
                />
              </svg>
              <div className={styles.campaignsCount}>
                {item.campaigns_count} campaigns
              </div>
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.3"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 3C8 4.6185 6.6895 6.5 5 6.5C3.3105 6.5 2 4.6185 2 3C2 1.3455 3.3455 0 5 0C6.6545 0 8 1.3455 8 3ZM10 2H15.5C15.776 2 16 2.2235 16 2.5C16 2.7765 15.776 3 15.5 3H10C9.724 3 9.5 2.7765 9.5 2.5C9.5 2.2235 9.724 2 10 2ZM10 5H15.5C15.776 5 16 5.2235 16 5.5C16 5.7765 15.776 6 15.5 6H10C9.724 6 9.5 5.7765 9.5 5.5C9.5 5.2235 9.724 5 10 5ZM15.5 8H12.5C12.224 8 12 8.2235 12 8.5C12 8.7765 12.224 9 12.5 9H15.5C15.776 9 16 8.7765 16 8.5C16 8.2235 15.776 8 15.5 8ZM12.5 11H15.5C15.776 11 16 11.2235 16 11.5C16 11.7765 15.776 12 15.5 12H12.5C12.224 12 12 11.7765 12 11.5C12 11.2235 12.224 11 12.5 11ZM8.2045 7.9865C6.0045 7.3355 3.929 7.348 1.7915 7.9805C0.7195 8.298 0 9.2615 0 10.379V13.5C0 13.7765 0.224 14 0.5 14H9.5C9.776 14 10 13.7765 10 13.5V10.386C10 9.268 9.2785 8.3035 8.2045 7.9865Z"
                  fill="black"
                />
              </svg>
              <div className={styles.leadsCount}>{item.leads_count} Leads</div>
            </div>
          </div>
        );
      }
    });
    props.setAll(favs);
  };
  const handleArchived = () => {
    const Archived = data.teams.map((item) => {
      if (item.is_archived === true) {
        return (
          <div className={styles.card}>
            <div className={styles.cardContainer}>
              <img className={styles.pic} src={item.image}></img>
              <div className={styles.container}>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.created}> Created on {item.created_at}</p>
              </div>
            </div>
            <div className={styles.description}>
              <p>{item.description}</p>
            </div>

            <hr />
            <div className={styles.comment}>
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.3"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.5 0H12.5C12.7765 0 13 0.223502 13 0.500004V9.00008C13 9.27658 12.7765 9.50008 12.5 9.50008H7.188L3.329 12.8766C3.18 13.0066 2.969 13.0356 2.7935 12.9551C2.6145 12.8741 2.5 12.6966 2.5 12.5001V9.50008H0.5C0.2235 9.50008 0 9.27658 0 9.00008V0.500004C0 0.223502 0.2235 0 0.5 0ZM14 4.00004H15.5C15.776 4.00004 16 4.22404 16 4.50004V12.0001C16 12.2761 15.776 12.5001 15.5 12.5001H14V14.5001C14 14.6876 13.8955 14.8591 13.729 14.9446C13.559 15.0311 13.36 15.0146 13.2095 14.9066L9.84 12.5001H5.278L7.564 10.5001H13C13.5525 10.5001 14 10.0526 14 9.50009V4.00004Z"
                  fill="black"
                />
              </svg>
              <div className={styles.campaignsCount}>
                {item.campaigns_count} campaigns
              </div>
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.3"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 3C8 4.6185 6.6895 6.5 5 6.5C3.3105 6.5 2 4.6185 2 3C2 1.3455 3.3455 0 5 0C6.6545 0 8 1.3455 8 3ZM10 2H15.5C15.776 2 16 2.2235 16 2.5C16 2.7765 15.776 3 15.5 3H10C9.724 3 9.5 2.7765 9.5 2.5C9.5 2.2235 9.724 2 10 2ZM10 5H15.5C15.776 5 16 5.2235 16 5.5C16 5.7765 15.776 6 15.5 6H10C9.724 6 9.5 5.7765 9.5 5.5C9.5 5.2235 9.724 5 10 5ZM15.5 8H12.5C12.224 8 12 8.2235 12 8.5C12 8.7765 12.224 9 12.5 9H15.5C15.776 9 16 8.7765 16 8.5C16 8.2235 15.776 8 15.5 8ZM12.5 11H15.5C15.776 11 16 11.2235 16 11.5C16 11.7765 15.776 12 15.5 12H12.5C12.224 12 12 11.7765 12 11.5C12 11.2235 12.224 11 12.5 11ZM8.2045 7.9865C6.0045 7.3355 3.929 7.348 1.7915 7.9805C0.7195 8.298 0 9.2615 0 10.379V13.5C0 13.7765 0.224 14 0.5 14H9.5C9.776 14 10 13.7765 10 13.5V10.386C10 9.268 9.2785 8.3035 8.2045 7.9865Z"
                  fill="black"
                />
              </svg>
              <div className={styles.leadsCount}>{item.leads_count} Leads</div>
            </div>
          </div>
        );
      }
    });
    props.setAll(Archived);
  };

  const handleClick = () => {
    const results = data.teams.map((item) => {
      return (
        <div className={styles.card}>
          <div className={styles.cardContainer}>
            <img className={styles.pic} src={item.image}></img>
            <div className={styles.container}>
              <p className={styles.name}>{item.name}</p>
              <p className={styles.created}> Created on {item.created_at}</p>
            </div>
            <FavoritesButton data={item}></FavoritesButton>
          </div>
          <div className={styles.description}>
            <p>{item.description}</p>
          </div>

          <hr />
          <div className={styles.comment}>
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.5 0H12.5C12.7765 0 13 0.223502 13 0.500004V9.00008C13 9.27658 12.7765 9.50008 12.5 9.50008H7.188L3.329 12.8766C3.18 13.0066 2.969 13.0356 2.7935 12.9551C2.6145 12.8741 2.5 12.6966 2.5 12.5001V9.50008H0.5C0.2235 9.50008 0 9.27658 0 9.00008V0.500004C0 0.223502 0.2235 0 0.5 0ZM14 4.00004H15.5C15.776 4.00004 16 4.22404 16 4.50004V12.0001C16 12.2761 15.776 12.5001 15.5 12.5001H14V14.5001C14 14.6876 13.8955 14.8591 13.729 14.9446C13.559 15.0311 13.36 15.0146 13.2095 14.9066L9.84 12.5001H5.278L7.564 10.5001H13C13.5525 10.5001 14 10.0526 14 9.50009V4.00004Z"
                fill="black"
              />
            </svg>
            <div className={styles.campaignsCount}>
              {item.campaigns_count} campaigns
            </div>
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 3C8 4.6185 6.6895 6.5 5 6.5C3.3105 6.5 2 4.6185 2 3C2 1.3455 3.3455 0 5 0C6.6545 0 8 1.3455 8 3ZM10 2H15.5C15.776 2 16 2.2235 16 2.5C16 2.7765 15.776 3 15.5 3H10C9.724 3 9.5 2.7765 9.5 2.5C9.5 2.2235 9.724 2 10 2ZM10 5H15.5C15.776 5 16 5.2235 16 5.5C16 5.7765 15.776 6 15.5 6H10C9.724 6 9.5 5.7765 9.5 5.5C9.5 5.2235 9.724 5 10 5ZM15.5 8H12.5C12.224 8 12 8.2235 12 8.5C12 8.7765 12.224 9 12.5 9H15.5C15.776 9 16 8.7765 16 8.5C16 8.2235 15.776 8 15.5 8ZM12.5 11H15.5C15.776 11 16 11.2235 16 11.5C16 11.7765 15.776 12 15.5 12H12.5C12.224 12 12 11.7765 12 11.5C12 11.2235 12.224 11 12.5 11ZM8.2045 7.9865C6.0045 7.3355 3.929 7.348 1.7915 7.9805C0.7195 8.298 0 9.2615 0 10.379V13.5C0 13.7765 0.224 14 0.5 14H9.5C9.776 14 10 13.7765 10 13.5V10.386C10 9.268 9.2785 8.3035 8.2045 7.9865Z"
                fill="black"
              />
            </svg>
            <div className={styles.leadsCount}>{item.leads_count} Leads</div>
          </div>
        </div>
      );
    });
    props.setAll(results);
    // setTab("ALL");
    // switchCase();
  };

  return (
    <>
      <div className={styles.icon}>
        <svg
          preserveAspectRatio="xMinYMin meet"
          viewBox="0 0 30 34"
          width="30"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28.6875 17H21.25V8.5C21.25 7.8625 20.825 7.4375 20.1875 7.4375H18.0625V5.3125C18.0625 4.675 17.6375 4.25 17 4.25H15.9375V1.0625C15.9375 0.425 15.5125 0 14.875 0C14.2375 0 13.8125 0.425 13.8125 1.0625V4.25H12.75C12.1125 4.25 11.6875 4.675 11.6875 5.3125V7.4375H9.5625C8.925 7.4375 8.5 7.8625 8.5 8.5V20.1875H1.0625C0.425 20.1875 0 20.6125 0 21.25V32.9375C0 33.575 0.425 34 1.0625 34H9.5625H12.75H17H20.1875H28.6875C29.325 34 29.75 33.575 29.75 32.9375V18.0625C29.75 17.425 29.325 17 28.6875 17ZM6.375 29.75H3.1875V27.625H6.375V29.75ZM6.375 26.5625H3.1875V24.4375H6.375V26.5625ZM10.625 29.75H7.4375V27.625H10.625V29.75ZM10.625 26.5625H7.4375V24.4375H10.625V26.5625ZM15.9375 18.0625V31.875H13.8125V21.25C13.8125 20.6125 13.3875 20.1875 12.75 20.1875H10.625V9.5625H12.75C13.3875 9.5625 13.8125 9.1375 13.8125 8.5V6.375H15.9375V8.5C15.9375 9.1375 16.3625 9.5625 17 9.5625H19.125V17H17C16.3625 17 15.9375 17.425 15.9375 18.0625ZM22.3125 29.75H19.125V27.625H22.3125V29.75ZM22.3125 26.5625H19.125V24.4375H22.3125V26.5625ZM22.3125 23.375H19.125V21.25H22.3125V23.375ZM26.5625 29.75H23.375V27.625H26.5625V29.75ZM26.5625 26.5625H23.375V24.4375H26.5625V26.5625ZM26.5625 23.375H23.375V21.25H26.5625V23.375Z"
            fill="#A4A6A8"
          />
        </svg>
      </div>
      <span className={styles.title}>Teams</span>
      <div className={styles.button}>
        <img src={button}></img>
      </div>

      <div className={styles.search}>
        <img src={search}></img>
      </div>
      <div className={styles.allContainer}>
        <button className={styles.all} onClick={handleClick}>
          All
        </button>
        <button className={styles.favourites} onClick={handleFavorites}>
          Favorites
        </button>
        <button className={styles.archived} onClick={handleArchived}>
          Archived
        </button>
      </div>
    </>
  );
};

export default TeamsHeader;
