import Image from 'next/image'
import styles from './mainFooter.module.css'
import Link from 'next/link'

export default function MainFooter({bgColor, color}) { 
	return (
		<footer className={styles.footer} style={{backgroundColor:bgColor, color:color}}>
		<div className={styles.footerContainer}>
			<Link className={styles.mailto} href="mailto:official@dailyeco.org">
			<span >Contacts: official@dailyeco.org</span>
			</Link>
			
			<Image
				src="/images/logo.png"
				alt="logo"
				width={130}
				height={53}
			/>
		</div>
	</footer>
	)
}