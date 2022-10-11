import React, { Dispatch } from "react";
import styles from "./Count.module.scss";
interface ICount {
  quant: number;
  setQuant: Dispatch<number>;
}

const Count = ({ quant, setQuant }: ICount) => {
  return (
    <span className={styles.count}>
      <button
        onClick={quant > 1 ? () => setQuant(quant - 1) : () => setQuant(1)}
        disabled={quant <= 1}
      >
        -
      </button>
      {quant}
      <button onClick={() => setQuant(quant + 1)}>+</button>
    </span>
  );
};

export default Count;
