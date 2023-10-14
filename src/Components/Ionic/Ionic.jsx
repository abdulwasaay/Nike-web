
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from "./Ionic.module.css"

// import required modules
import { EffectCoverflow, Pagination , Navigation} from 'swiper/modules';

export default function Ionic() {
  return (
    <>
    <h1 className={styles.Head}>Always Ionic</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[EffectCoverflow, Pagination , Navigation]}
        className={styles.mySwiper}
      >
        <SwiperSlide className={styles.slides}>
          <img src="Nikeshoe1.jpeg" />
        </SwiperSlide>
        <SwiperSlide className={styles.slides}>
        <img src="Nikeshoe2.jpg" />
        </SwiperSlide >
        <SwiperSlide className={styles.slides} >
        <img src="Nikeshoe3.jpg" />
        </SwiperSlide>
        <SwiperSlide className={styles.slides}>
        <img src="Nikeshoe4.jpeg" />
        </SwiperSlide>
        <SwiperSlide className={styles.slides}>
        <img src="Nikeshoe5.jpeg" />
        </SwiperSlide>
        <SwiperSlide className={styles.slides}>
        <img src="Nikeshoe6.jpeg" />
        </SwiperSlide>
        <SwiperSlide className={styles.slides}>
        <img src="Nikeshoe7.jpeg" />
        </SwiperSlide>
        <SwiperSlide className={styles.slides}>
        <img src="Nikeshoe8.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
