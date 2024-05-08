import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";
import HeaderMobile from "./HeaderMobile";

export const menuItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    title: "Resources",
    path: "/resources",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "About",
    path: "/about",
  },
];

export default function Header({ bgColor }) {

  return (
    <header
      className={styles.header}
      style={{ backgroundColor: bgColor }}
    >
      <div className={styles.headerContainer}>
        <Link
          id="logo"
          href="/"
          className={styles.logo}
        >
          <Image
            src="/images/logo.png"
            alt="logo"
            width={130}
            height={53}
          />
        </Link>

        <div>
          <div className={styles.menu}>
            <ul className={styles.menuList}>
              {menuItems.map((item) => (
                <li key={item.title}>
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
            <Link
              className={styles.loginButton}
              href="/login"
            >
              <p>Sign in</p>
            </Link>
          </div>
          <HeaderMobile />
        </div>
      </div>
    </header>
  );
}
