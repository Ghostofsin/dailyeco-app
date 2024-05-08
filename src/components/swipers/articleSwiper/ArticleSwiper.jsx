"use client"

import styles from './articleSwiper.module.css'
import React, { useCallback, useState } from "react";

// Swiper components, modules and styles
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import RecommendedArticle from '@/components/articles/recommended/RecommendedArticle';

// import "swiper/css/pagination";


export default function ArticleSwiper() { 
  const [swiperRef, setSwiperRef] = useState();

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

	return (
		<div className={styles.container}>
			 <Swiper
       onSwiper={setSwiperRef}
        // loop={true}
        slidesPerView={1}
        spaceBetween={24}
			
        // centerInsufficientSlides={true}
        // centeredSlides={true}
        breakpoints={{
          1280: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}	navigation={{
					prevEl: '.customPrevButton',
					nextEl: '.customNextButton',
				}}
        modules={[Navigation, Pagination]}
      >
        
          <SwiperSlide >
					<RecommendedArticle/>
					</SwiperSlide>

					<SwiperSlide >
					<RecommendedArticle/>
					</SwiperSlide>

					<SwiperSlide >
					<RecommendedArticle/>
          </SwiperSlide>

					<SwiperSlide >
					<RecommendedArticle/>
          </SwiperSlide>
   
      </Swiper>
      <button className={styles.customNextButton} onClick={handleNext}></button>
      <button className={styles.customPrevButton} onClick={handlePrevious}></button>

		</div>
	)
}