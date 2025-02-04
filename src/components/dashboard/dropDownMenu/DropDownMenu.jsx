"use client";

import styles from "./dropDownMenu.module.css";
import { menuItems } from "../sidebar/Sidebar.jsx";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function DropDownMenu() {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
      <div className={styles.hamburgerButton}>
        <Image
          src="/images/menu-burger-horizontal-white.svg"
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
              <Link key={item.title}
                href={item.path}
                onClick={() => setToggleDropdown(false)}
              >
                <li >
                {item.title}
                </li>
                
              </Link>
            ))}
          </ul>
        )}

      </div>

  );
}
