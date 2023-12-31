import React, { CSSProperties, useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface Props {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  //maxcount ?
  //añadir maxcount al context
  const { increaseBy, counter, maxCount } = useContext(ProductContext);
  

  const isMaxReached = useCallback(
    // check if maxcount exists, then return true if counter === maxcount
    () => !!maxCount && counter === maxCount,
    [counter, maxCount],
  )

  
  

  //isMaxReached usecallback , [counter, maxCount]
  // true if counter == maxcount flase if not
  // add class
  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button 
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled }`} 
        onClick={() => increaseBy(+1)}
        disabled={isMaxReached()}
      >
        +
      </button>
    </div>
  );
};
