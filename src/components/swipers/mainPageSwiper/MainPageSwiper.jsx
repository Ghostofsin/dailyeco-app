"use client";

import styles from "./mainPageSwiper.module.css";
import React from "react";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import Image from "next/image";

const reviews = [
  {
    imagePath: "/images/noavatar.png",
    name: "Bella Johnson",
    quote: `"This helped me better understand the issue of climate change 
		and take measures to address it."`,
  },
  {
    imagePath: "/images/noavatar.png",
    name: "Max Verde",
    quote: `"I was shocked to know real truth about our planet Earth.
		dailyEco changed my life for sure."`,
  },
  {
    imagePath: "/images/noavatar.png",
    name: "Naomi Martinez",
    quote: `"I am proud to be able to contribute to environmental protection
		and reduce my carbon emissions."`,
  },
];

export default function MainPageSwiper() {
  return (
    <div className={styles.sectionReviewContainer}>
      <Swiper
        autoplay={true}
        loop={true}
        slidesPerView={1}
        spaceBetween={50}
        // centerInsufficientSlides={true}
        // centeredSlides={true}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay, Navigation, Pagination]}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.name}>
            <div className={styles.reviewBlock}>
              <div className={styles.reviewerImage}>
                <Image
                  className={styles.image}
                  src={review.imagePath}
                  alt="no avatar img"
               width={50}
							 height={50}
                />
              </div>

              <div className={styles.reviewer}>
                <p className={styles.quote}>{review.quote}</p>
                <div className={styles.reviewerName}>{review.name}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
