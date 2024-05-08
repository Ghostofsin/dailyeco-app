import styles from "./barchart.module.css";

export const BarChart = () => {
  return (
    <div className={styles.container}>
      <div
        className={styles.line}
        style={{ width: "40%" }}
      ></div>
      <div
        className={styles.line}
        style={{ width: "20%" }}
      ></div>
      <div className={styles.barContainer}>
        <div
          className={styles.bar}
          style={{ height: "12rem" }}
        ></div>
        <div
          className={styles.bar}
          style={{ height: "14rem" }}
        ></div>
        <div
          className={styles.bar}
          style={{ height: "16rem" }}
        ></div>
        <div
          className={styles.bar}
          style={{ height: "20rem" }}
        ></div>
        <div
          className={styles.bar}
          style={{ height: "16rem" }}
        ></div>
        <div
          className={styles.bar}
          style={{ height: "14rem" }}
        ></div>
        <div
          className={styles.bar}
          style={{ height: "12rem" }}
        ></div>
        <div
          className={styles.bar}
          style={{ height: "10rem" }}
        ></div>
        <div
          className={styles.bar}
          style={{ height: "8rem" }}
        ></div>
      </div>
    </div>
  );
};
