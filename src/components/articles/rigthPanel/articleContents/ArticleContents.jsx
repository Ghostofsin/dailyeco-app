import styles from './articleContents.module.css'
import Link from 'next/link'

export default function ArticleContents({articlePartList}) { 
	return (
		<div className={styles.articleContents}>
		<span className={styles.contentsHeader}>In this article:</span>
		<ul className={styles.contentsList}>
		{articlePartList.map((item) => (
			<li key={item.title} className={styles.contentsItem} >
			<Link href={item.path}>{item.title}</Link>
				</li>
				))}
		</ul>
	</div>
	)
}
