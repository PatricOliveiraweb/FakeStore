import React, { useContext, useEffect, useState } from "react";
import { IProduct } from "../components/Products/FeedItem";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import styles from "./Product.module.scss";
import { NavLink } from "react-router-dom";
import Count from "../components/Products/Count";
import Rating from "../components/Products/Rating";
import { CartContext } from "../CartContext";

const Product = () => {
  const [product, setProduct] = useState<IProduct>();

  const { error, request, loading } = useFetch();

  const { id } = useParams();

  const { addItem } = useContext(CartContext);

  useEffect(() => {
    if (id) {
      getProduct(id.toString());
    }
  }, [id]);

  async function getProduct(id: string) {
    const { json } = await request(`https://fakestoreapi.com/products/${id}`);
    setProduct(json);
  }
  function handdleAddCart() {
    if (product) {
      addItem({ idproduto: parseInt(product.id), quant: 1 });
    }
  }

  if (loading) return <p>Carregando</p>;
  if (error || !product)
    return <p>Ops... parece que tivemos algum problema com seu produto!</p>;
  else
    return (
      <main className={`${styles.product} ${styles.container}`}>
        <header>
          <nav>
            <p>Product &gt; </p>
            <NavLink to={`/category/${product.category}`}>
              {product.category}
            </NavLink>
          </nav>
        </header>
        <section className={styles.product__content}>
          <figure>
            <img src={product.image} alt="" />
          </figure>
          <figcaption>
            <h2>{product.title}</h2>
            <Rating rating={product.rating.rate} count={product.rating.count} />
            <p>{product.description}</p>
            <h3>{product.price}</h3>
            <button className={styles.btnAdd} onClick={handdleAddCart}>
              Adicionar ao Carrinho
            </button>
          </figcaption>
        </section>
      </main>
    );
};

export default Product;
