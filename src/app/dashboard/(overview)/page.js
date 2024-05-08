import styles from "./dashboard.module.css";
import Chart from "@/components/dashboard/chart/Chart";
import { getResultByUser, getResults, getUserByEmail } from "@/lib/methods";
import showResults from "@/lib/quiz/dataForChart";
import { auth, signOut } from "@/auth";
import QuizButton from "@/components/quizButton/QuizButton";

export const metadata = {
  title: "Dashboard",
  description: "Compair you quiz results with other users",
};

export default async function DashboardPage() {
  const session = await auth();
  const results = await getResults();
  const user = await getUserByEmail(session.user.email);

  if (!user) await signOut()

  const userId = user?.userId;

  const result = await getResultByUser(userId);

  const data = showResults(results);

  return (
    <div className={styles.container}>
      
      <div className={styles.content}>

        <div className={styles.contentTop}>
          <span>{`User's answers`}</span>
          <QuizButton text={result ? "Redo quiz" : "Get quiz"}/>
        </div>

        <Chart
          data={data}
          result={result?.result}
        />
      </div>
      <div className={styles.cards}>place for adds</div>
    </div>
  );
}
