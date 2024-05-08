"use client";

import { useState } from "react";
import styles from "./starRating.module.css";
import  { createCookie, getCookie } from "@/lib/actions/cookieActions";
import { usePathname } from "next/navigation";
import { saveArticleRate, updateArticleRate } from "@/lib/actions/actions";


export default function StarRating ({userId, articleRate, articles}) {
  const pathname = usePathname()
  const article = articles.find(el => el.articleId === pathname)

  const [rating, setRating] = useState(articleRate || 0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleStarHover = (star) => {
    setHoveredRating(star);
  };

  const handleStarClick = async (star) => {
    
    if (userId) {
      setRating(star);
      createCookie("articleRate", star, pathname);
      article? updateArticleRate(userId, star, pathname) : saveArticleRate(userId, star, pathname)
    } else {
      alert("You must be logged in to rate the article. Please log in, if you want to do this")
    }
    
  };

  return (
    <div className={styles.starRating}>
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={
              star <= (hoveredRating || rating || articleRate)
                ? styles.filledStar
                : styles.emptyStar
            }
            onMouseEnter={() => handleStarHover(star)}
            onMouseLeave={() => handleStarHover(0)}
            onClick={() => handleStarClick(star)}
          >
            ★
          </span>
        ))}
      </div>

      <div className={styles.rate}>{articleRate ? `${articleRate}.0` : `${rating}.0`}</div>
    </div>
  );
};

