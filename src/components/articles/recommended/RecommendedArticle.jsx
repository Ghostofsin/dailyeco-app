import styles from "./recommendedArticles.module.css";
import Image from "next/image";

export default function RecommendedArticle() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.theme}>For babies</div>
        <div className={styles.date}>20.07.2023</div>
      </div>

      <div className={styles.title}>
        What is illustration: types, areas of use
      </div>

      <div className={styles.paragraph}>
        The article talks about what illustration is, what types it can be, and
        in what areas it is used.
      </div>

      <div className={styles.bottom}>
        <div className={styles.thumb}>
          <Image
            src="/images/article/vector/like.svg"
            width={30}
            height={24}
            alt="like"
          ></Image>
          <div>12</div>
        </div>
        <div className={styles.comments}>
          <Image
            src="/images/article/vector/comment.svg"
            width={30}
            height={24}
            alt="comment"
          ></Image>
          <div>23</div>
        </div>
        <div className={styles.views}>
          <Image
            src="/images/article/vector/view.svg"
            width={30}
            height={24}
            alt="view"
          ></Image>
          <div>45</div>
        </div>
      </div>
    </div>
  );
}
