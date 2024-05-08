import styles from './readNext.module.css'
import Image from "next/image";
import Link from "next/link";

const blockAttributes = 
  {
    title: "Why hackathons are a great way to improve your skills",
    link: "/articles/article#start",
		imagePath: "/images/can-do/Share.png",
		imageAlt: "Share"
  }

export default function ReadNext() { 
	return (
		<div className={styles.readNext}>
		<div className={styles.readNextTextBlock}>
			<div className={styles.readNextText}>Read Next!</div>
			<div className={styles.readNextTitle}>
				<Link href={blockAttributes.link}>
				{blockAttributes.title}
				</Link>
			</div>
		</div>

		<div className={styles.readNextPic}>
			<Image
				src={blockAttributes.imagePath}
				width={165}
				height={155}
				alt={blockAttributes.imageAlt}
			></Image>
		</div>
	</div>
	)
}