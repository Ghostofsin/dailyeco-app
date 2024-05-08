import Link from "next/link";
import styles from "./quizButton.module.css"

export default function QuizButton({ text }) {
  return (
    //  <div className="w-fit box-border py-2 px-12 rounded border-solid
		//  	 text-base sm:text-lg cursor-pointer no-underline text-white bg-fadedRed border-fadedRed"> 
    <div className={styles.quizButton}>
      <Link href="/climate-change-quiz">{text}</Link>
    </div>
  );
}


