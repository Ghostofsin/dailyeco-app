"use client";

import styles from "./breadcrumbs.module.css";
import { useSelectedLayoutSegments } from "next/navigation";
import Link from "next/link";
import Image from 'next/image'

export default function Breadcrumbs() {
  const routeList = useSelectedLayoutSegments();
  const segments = ["articles", ...routeList];
  const upperCasedSegments = segments.map((str) => 
    str.charAt(0).toUpperCase() + str.slice(1)
  );
  const segmentsParsed = upperCasedSegments.map((str) =>
  str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
);

  return (
    <ul id="breadcrumbs" className={styles.list}>
			  <li className={styles.listItem}>
            <Link className={styles.segment}  href={"/"}>
              Home
            </Link>
          </li>
					
      {segmentsParsed.map((segment, index) => (
          <li
            className={styles.listItem}
            key={index}
          >
						<Image src="/images/article/vector/polygon.svg" width={8} height={8} alt="breadcrumbs figure"></Image>
            <Link className={styles.segment} href={`/${segments.slice(0, index + 1).join("/")}`}>
              {segment}
            </Link>
          </li>
        )
      )}
    </ul>
  );
}
