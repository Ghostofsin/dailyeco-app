import styles from "./lines.module.css";

export const Lines = () => {
  return (
    <div className={styles.container}>
      <div
        className={styles.lineSmall}
        style={{ width: "40%" }}
      ></div>
      <div
        className={styles.lineSmall}
        style={{ width: "20%" }}
      ></div>
      <div className={styles.barContainer}>
        <div
          className={styles.line}
          style={{ width: "90%" }}
        ></div>
         <div
          className={styles.line}
          style={{ width: "90%" }}
        ></div>
         <div
          className={styles.line}
          style={{ width: "90%" }}
        ></div>
         <div
          className={styles.line}
          style={{ width: "90%" }}
        ></div>
         <div
          className={styles.line}
          style={{ width: "90%" }}
        ></div>
     
     
      </div>
    </div>
  );
};
