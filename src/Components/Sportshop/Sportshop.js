import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import styles from "./Shop.module.css"

// import required modules
import { EffectCoverflow, Pagination, Navigation, Scrollbar } from 'swiper/modules';


export default function Shop() {
    return (
        < div className={styles.container}>
            <h1 className={styles.head}>Shop by Sport</h1>
            <Swiper
                grabCursor={true}
                slidesPerView={'auto'}
                scrollbar={{
                    hide: true,
                }}
                navigation={true}
                modules={[EffectCoverflow, Pagination, Navigation, Scrollbar]}
                className={styles.mySwiper}
            >
                <SwiperSlide className={styles.slides} >
                    <img src="sports1.jpeg" /><br />
                </SwiperSlide>
                <SwiperSlide className={styles.slides}>
                    <img src="sports2.jpeg" /><br />
                </SwiperSlide>
                <SwiperSlide className={styles.slides}>
                    <img src="sports3.jpg" />
                </SwiperSlide>
                <SwiperSlide className={styles.slides}>
                    <img src="sports4.jpg" />
                </SwiperSlide>
                <SwiperSlide className={styles.slides}>
                    <img src="sports5.png" />
                </SwiperSlide>
                <SwiperSlide className={styles.slides}>
                    <img src="sports6.jpeg" />
                </SwiperSlide>
            </Swiper>

        </div>
    )
}