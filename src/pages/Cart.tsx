import { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";
import CartItem from "../components/Products/CartItem";
import { IProduct } from "../components/Products/FeedItem";
import useFetch from "../Hooks/useFetch";
import styles from "./Cart.module.scss";

const Cart = () => {
  const { itens } = useContext(CartContext);
  const [products, setProducts] = useState<IProduct[]>([]);

  const { error, request, loading } = useFetch();

  useEffect(() => {
    getProductsOnCart();
  }, [itens]);

  async function getProductsOnCart() {
    if (itens) {
      const productArray = await Promise.all(
        itens.map(async (item) => {
          const { json } = await request(
            `https://fakestoreapi.com/products/${item.idproduto}`
          );
          return json;
        })
      );
      setProducts(productArray);
    }
  }
  if (loading) return <p>Loading</p>;
  if (error || products.length === 0)
    return (
      <main>
        <p>Não existem itens em seu carrinho</p>
      </main>
    );
  else
    return (
      <main className={`${styles.cart} ${styles.container}`}>
        <ul>
          {products.map((item) => (
            <CartItem product={item} key={item.id} />
          ))}
        </ul>
      </main>
    );
};

export default Cart;
