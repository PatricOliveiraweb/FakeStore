import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./FeedItem.module.scss";

export interface IProduct {
  id: string;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating: { rate: number; count: number };
  quant?: number;
}

interface IFeedItem {
  data: IProduct;
}
const FeedItem = ({ data }: IFeedItem) => {
  return (
    <li className={styles.item}>
      <NavLink to={`/product/${data.id}/${data.title}`}>
        <figure>
          <img src={data.image} alt="" />
        </figure>
        <figcaption>
          <p>{data.title}</p>
          <h2>${data.price}</h2>
        </figcaption>
      </NavLink>
    </li>
  );
};

export default FeedItem;
