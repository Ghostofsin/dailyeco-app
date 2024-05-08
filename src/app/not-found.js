import styles from "./notFound.module.css";
import Link from "next/link";

export const metadata = {
  title: "404 | Not Found",
  description: "dailyEco is the best resourse about eco life",
};

export default function NotFound() {
  return (
    <div className={styles.container}>

      <h2 className={styles.title}>{`404  |  Not Found`}</h2>
      <p className={styles.description}>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
     
    </div>
  );
}
