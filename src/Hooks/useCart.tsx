import React, { useEffect, useState } from "react";
import { IProduct } from "../components/Products/FeedItem";

const useCart = () => {
  const [itens, setItens] = useState<IProduct[]>();
  const [countItens, setCountItens] = useState<number>();

  useEffect(() => {});

  return <div>useCart</div>;
};

export default useCart;
