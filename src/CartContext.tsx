import React, { createContext, useEffect, useState } from "react";

export interface ICart {
  idproduto: number;
  quant: number;
}

type PropsCartContext = {
  itens: ICart[] | null;
  count: number;
  addItem: (item: ICart) => void;
  removeItem: (item: number) => void;
  setAmount: (idItem: number, quant: number) => void;
};

const DEFAULT_CARTCONTEXT = {
  itens: null,
  count: 0,
  addItem: () => {},
  removeItem: () => {},
  setAmount: () => {},
};

const CartContext = createContext<PropsCartContext>(DEFAULT_CARTCONTEXT);

function CartContextProvider({ children }: { children: React.ReactNode }) {
  const [itens, setItens] = useState<ICart[]>([]);
  const [count, setCount] = useState<number>(0);

  function addItem(item: ICart) {
    let cart: ICart[] = [];
    if (localStorage.getItem("Cart")) {
      cart = JSON.parse(window.localStorage.getItem("Cart") || "{}");
      checkItenExist(cart, item);
      localStorage.setItem("Cart", JSON.stringify(cart));
    } else {
      localStorage.setItem("Cart", JSON.stringify([item]));
    }
    getCart();
  }

  function removeItem(idItem: number) {
    if (localStorage.getItem("Cart")) {
      let cart = JSON.parse(window.localStorage.getItem("Cart") || "{}");
      let index = cart.indexOf(idItem);
      cart.splice(index, 1);
      localStorage.setItem("Cart", JSON.stringify(cart));
    }
    getCart();
  }

  function setAmount(idItem: number, quant: number) {
    let cart: ICart[] = [];
    if (localStorage.getItem("Cart")) {
      cart = JSON.parse(window.localStorage.getItem("Cart") || "{}");
      const find = cart.findIndex((item) => item.idproduto === idItem);
      if (find > -1) {
        cart[find].quant = quant;
      }
      localStorage.setItem("Cart", JSON.stringify(cart));
    }
    getCart();
  }

  function getCart() {
    let cart: ICart[] = [];
    if (localStorage.getItem("Cart")) {
      cart = JSON.parse(window.localStorage.getItem("Cart") || "{}");
    }
    setItens(cart);
    setCount(cart.length);
  }

  function checkItenExist(array: ICart[], newValue: ICart) {
    const find = array.findIndex(
      (item) => item.idproduto === newValue.idproduto
    );
    if (find > -1) {
      array[find].quant++;
    } else {
      array.push(newValue);
    }
  }

  useEffect(() => {
    getCart();
  }, []);

  return (
    <CartContext.Provider
      value={{ itens, count, addItem, removeItem, setAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
export { CartContext };
