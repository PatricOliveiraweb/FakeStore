import React from "react";
import styles from "./Button.module.scss";
interface IButton {
  text: string;
  color?: string;
}
const Button = ({ text, color }: IButton) => {
  return (
    <button className={`${styles.Button} ${color && color}`}>{text}</button>
  );
};

export default Button;
