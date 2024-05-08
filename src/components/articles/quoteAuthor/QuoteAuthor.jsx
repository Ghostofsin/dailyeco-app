import styles from './quoteAuthor.module.css'
import Image from 'next/image'

export default function QuoteAuthor({name, position, imagePath}) { 
	return (
		<div className={styles.quoteAuthor}>
		<div className={styles.quoteAuthorPic}>
			<Image className={styles.circleImg}
				src={imagePath}
				width={48}
				height={48}
				alt="noavatar"
			></Image>
		</div>
		<div>
			<div className={styles.quoteAuthorName}>{name}</div>
			<div className={styles.quoteAuthorTitle}>{position}</div>
		</div>
	</div>
	)
}