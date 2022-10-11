import React, { useEffect, useState } from "react";
import FeedItem, { IProduct } from "./FeedItem";
import styles from "./Feed.module.scss";
import useFetch from "../../Hooks/useFetch";
import { useParams } from "react-router-dom";
import Loading from "../Loading";

interface IFeed {
  products: IProduct[];
}

const Feed = () => {
  const [products, setProducts] = useState<IProduct[] | null>(null);
  const { category } = useParams();

  const { error, request, loading } = useFetch();
  useEffect(() => {
    let url;
    if (category) {
      url = `https://fakestoreapi.com/products/category/${category}`;
    } else {
      url = "https://fakestoreapi.com/products";
    }
    getProductList(url);
  }, [category]);

  async function getProductList(url: string) {
    let { json } = await request(url);
    setProducts(json);
  }
  if (loading) return <Loading />;
  if (error || !products?.length)
    return <p>Parece que tivemos algum problema!</p>;
  return (
    <section className={styles.feed}>
      <div className={styles.container}>
        {!category ? <h2>Products</h2> : <h2>{category}</h2>}
        <ul>
          {products &&
            products.map((item) => <FeedItem data={item} key={item.id} />)}
        </ul>
      </div>
    </section>
  );
};

export default Feed;
