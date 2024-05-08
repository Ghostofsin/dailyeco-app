"use client";

import { usePathname } from "next/navigation";
import styles from "./navbarTitle.module.css";
import { useState } from "react";
import { menuItems } from "../../sidebar/Sidebar";
import Image from "next/image";
import Link from "next/link";

export default function NavbarTitle() {
  const pathname = usePathname();
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.title} 
       onClick={() => {
        setToggleDropdown((prev) => !prev);
      }}>
        {pathname.split("/").pop()}</div>

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
                <li >{item.title}</li>
                
              </Link>
            ))}
          </ul>
        )}
    </div>
  );
}
