"use client";

import styles from "./headerMobile.module.css";
import { menuItems } from "./Header";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeaderMobile() {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.hamburgerButton}>
        <Image
          src="/images/menu-burger-horizontal.svg"
          alt="menu-burger-horizontal"
          width={30}
          height={30}
          onClick={() => {
            setToggleDropdown((prev) => !prev);
          }}
        />

        {toggleDropdown && (
          <ul
            className={styles.menuList}
            onClick={() => setToggleDropdown(false)}
          >
            {menuItems.map((item) => (
              <Link
                href={item.path}
                onClick={() => setToggleDropdown(false)}
              >
                <li key={item.title}></li>
                {item.title}
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
