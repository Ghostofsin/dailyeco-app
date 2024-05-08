import styles from "./picture.module.css";

export const Picture = () => {
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
          style={{ width: "100%" }}
        ></div>
      </div>
    </div>
  );
};
