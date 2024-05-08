import { getCookie } from '@/lib/actions/cookieActions'
import QuoteAuthor from '../quoteAuthor/QuoteAuthor'
import SocialMedia from '../socialMedia/SocialMedia'
import StarRating from '../starRating/StarRating'
import styles from './articleMetaEnd.module.css'
import { auth } from '@/auth'
import { getArticleRateByUser, getUserByEmail } from '@/lib/methods'

export default async function ArticleMetaEnd() { 
	const articleRate = await getCookie("articleRate")
	const session = await auth();
  const user = await getUserByEmail(session?.user.email);
  const userId = user?.userId;
	const articles = await getArticleRateByUser(userId)
	const articlesArray = JSON.parse(JSON.stringify(articles))


	return (
		<div className={styles.articleMeta}>
			<div className={styles.articleAuthorBlock}>
				<div className={styles.articleMetaSubHeader}>Author:</div>

				<QuoteAuthor name={"Max Verde"} position={"Eco enthusiast"} imagePath={"/images/noavatar.png"}/>
			</div>

			<div className={styles.articleReviewerBlock}>
				<div className={styles.articleMetaSubHeader}>Reviewer:</div>

				<QuoteAuthor name={"Alex Kopi"} position={"Reviewer"} imagePath={"/images/noavatar.png"}/>
			</div>

			<div className={styles.rateBlock}>
				<div className={styles.rateBlockText}>Rate the article</div>

				<StarRating articles={articlesArray} userId={userId} articleRate={articleRate?.value}/>
			</div>
		
			<div className={styles.networksBlock}>
				<div className={styles.networksBlockText}>
					Share in social networks
				</div>
				<SocialMedia />
			</div>
			
		
	</div>
	)
}