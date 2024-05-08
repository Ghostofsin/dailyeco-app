import Header from '@/components/header/Header';
import styles from './layout.module.css'
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs';
import ScrollUp from '@/components/scrollUp/ScrollUp';
import MainFooter from '@/components/footer/MainFooter';

export default function ArticleLayout({ children }) { 

		return (
			<div className={styles.container}>
				<Header bgColor={"#FFF"}/>
				<div>
					<Breadcrumbs/>
				</div>
				<div className={styles.content}>
					{children}
				</div>
				<div className={styles.scrollUpButton}>
					<ScrollUp/>
				</div>
				<div className={styles.footer}>
				<MainFooter bgColor={"#FFF"} color={"#000"} />
				</div>
				
			</div>
		);
	}
