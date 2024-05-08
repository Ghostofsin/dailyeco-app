import QuizButton from '@/components/quizButton/QuizButton'
import styles from './quizButtonBlock.module.css'

export default function QuizButtonBlock() { 
	return (
		<div>
			<div className={styles.buttonBlock}>
			<span className={styles.buttonBlockText}>
				Take quiz and get a waste-reducer badge
			</span>
			<div className={styles.quizButton}>
				<QuizButton text={"Take quiz"}></QuizButton>
			</div>
		
		</div>
		</div>
		
	)
}