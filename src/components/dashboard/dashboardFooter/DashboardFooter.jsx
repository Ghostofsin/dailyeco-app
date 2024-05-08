import Image from "next/image";
import styles from "./dashboardFooter.module.css";

export default function DashboardFooter() {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <Image
          src="/images/logo.png"
          alt="logo"
          width={130}
          height={53}
        />
        <span>© All rights reserved.</span>
      </footer>
    </div>
  );
}
