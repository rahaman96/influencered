import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './ThreeDSlider.module.css'
import { EffectCoverflow, Pagination, Navigation } from 'swiper';

// import slide_image_1 from './assets/images/img_1.jpg';
// import slide_image_2 from './assets/images/img_2.jpg';
// import slide_image_3 from './assets/images/img_3.jpg';
// import slide_image_4 from './assets/images/img_4.jpg';
// import slide_image_5 from './assets/images/img_5.jpg';
// import slide_image_6 from './assets/images/img_6.jpg';
// import slide_image_7 from './assets/images/img_7.jpg';

function ThreeDSlider() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Flower Gallery</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper_pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper_button_next',
          prevEl: '.swiper_button_prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className={styles.swiper_container}
      >
        <SwiperSlide>
          <img src="../image/img_1.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="../image/img_2.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="../image/img_3.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="../image/img_4.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="../image/img_5.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="../image/img_6.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="../image/img_7.jpg" alt="slide_image" />
        </SwiperSlide>

        <div className={styles.slider_controler}>
          <div className="swiper_button_prev slider_arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper_button_next slider_arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper_pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default ThreeDSlider;