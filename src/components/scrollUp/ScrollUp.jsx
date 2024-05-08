'use client'
 
import { usePathname } from 'next/navigation'
import styles from "./scrollUp.module.css";
import Image from "next/image";
import Link from "next/link";

export default function ScrollUp() {
	const pathname = usePathname()

  return (
    <div className={styles.ring}>
			<Link href={`${pathname}#logo`}>
			<div className={styles.circle}>
        <Image
          src="/images/article/vector/arrow-up.svg"
          width={20}
          height={10}
					alt='arrow-up'
        ></Image>
      </div>
			</Link>
     
    </div>
  );
}
