import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';

export default function HeaderThird() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='div'>
            <h3>The Ultimate Sale: Up to 60% Off</h3>
            <p><Link href="#" className='L'>Use code ULTIMATE to save 20% on select styles. Shop now.</Link></p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='div'>
          <h3> New Arrivals 🍂</h3>
          <p><Link href="#" className='L'>Shop All</Link></p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='div'>
          <h3>Members: Free Shipping on Orders $50+</h3>
          <p><Link href="#" className='L'>Join Now</Link></p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='div'>
          <h3>Why Wait? Try Store Pickup</h3>
          <p>Buy online and find a store near you for pick up in less than 2 hours. <Link href="#" className='L'>Shop now.</Link> </p>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
