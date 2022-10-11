import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../CartContext";
import Count from "./Count";
import { IProduct } from "./FeedItem";
import styles from "./CartItem.module.scss";

interface ICartItem {
  product: IProduct;
}
const CartItem = ({ product }: ICartItem) => {
  const { itens, removeItem, setAmount } = useContext(CartContext);
  const item = itens?.find((item) => item.idproduto === Number(product.id));
  const [quant, setQuant] = useState<number>(item!.quant);

  /* useEffect(() => {
    setAmount(Number(product.id), quant);
  }, [quant]);*/

  return (
    <li className={styles.cartItem}>
      <figure>
        <img src={product.image} alt={product.title} />
      </figure>
      <figcaption>
        <Count quant={quant} setQuant={setQuant} />
        <button
          className={styles.btnRemove}
          onClick={() => removeItem(Number(product.id))}
        >
          Remover Item
        </button>
        <span className={styles.price}>${Number(product.price) * quant}</span>
      </figcaption>
    </li>
  );
};

export default CartItem;
