import Image from "next/image";
import styles from "./profile.module.css";
import { auth } from "@/auth";
import { getResultByUser, getResults, getUserByEmail } from "@/lib/methods";
import ProfileProgress from "@/components/profileProgress/ProfileProgress";

export const metadata = {
  title: "Profile page",
  description: "Get your new level in 'green' life",
};

export default async function ProfilePage() {
  const session = await auth();
  const user = await getUserByEmail(session.user.email);
  const userId = user.userId;

  const result = await getResultByUser(userId);
  let rate = 0;
  if (result) {
    rate = (parseInt(result.result) / 14) * 100;
  }

  console.log("rate", rate);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span>Your achivments</span>

        <div className={styles.acheiveScreen}>
      
          <div className={styles.progressPanel}>
            <ProfileProgress rate={rate} />
            <ProfileProgress rate={0} />
            <ProfileProgress rate={0} />
            <ProfileProgress rate={0} />
            <ProfileProgress rate={0} />
          </div>

          <Image
            src="/images/profile/person.png"
            height={430}
            width={213}
            alt="person"
          ></Image>
        </div>
        <span> you are a grey user... </span>
      </div>
      <div className={styles.cards}>
        place for adds
      </div>
    </div>
  );
}
