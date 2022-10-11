import React, { useEffect, useState } from "react";
import { ReactComponent as Star } from "../../assets/star-solid.svg";
import { ReactComponent as StarHalf } from "../../assets/star-half-stroke-regular.svg";
import { ReactComponent as StarEmpty } from "../../assets/star-regular.svg";
import styles from "./Rating.module.scss";

interface IRating {
  rating: number;
  count: number;
}
const Rating = ({ rating, count }: IRating) => {
  return (
    <span className={styles.rating}>
      <ul>
        {[...Array(5)].map((item, index) => {
          if (index + 1 <= rating)
            return (
              <li key={index}>
                <Star />
              </li>
            );
          else if (
            index + 1 - Number(rating) > 0 &&
            index + 1 - Number(rating) < 1
          )
            return (
              <li key={index}>
                <StarHalf />
              </li>
            );
          else
            return (
              <li key={index}>
                <StarEmpty />
              </li>
            );
        })}
        <li>({count})</li>
      </ul>
    </span>
  );
};

export default Rating;
