import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import styles from "./Members.module.css"

// import required modules
import { EffectCoverflow, Pagination, Navigation, Scrollbar } from 'swiper/modules';
import Link from 'next/link';

export default function Members() {
    return (
        <div className={styles.container}>
            <h1 className={styles.head}>Nike Membership</h1>
            <Swiper
                grabCursor={true}
                slidesPerView={3}
                scrollbar={{
                    hide: true,
                }}
                navigation={true}
                modules={[EffectCoverflow, Pagination, Navigation, Scrollbar]}
                className={styles.mySwiper}
            >
                <SwiperSlide className={styles.slides} >
                    <div>
                        <Link href="#"><img src='Memberships1.jpeg' /></Link>
                        <Link href="#"><p>The Best of Nike</p></Link>
                        <Link href="#"><h1>It's Better as a Member</h1></Link>
                        <Link href="#"><button>Sign Up</button></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slides}>
                    <div>
                        <Link href="#"><img src='Memberships2.png' /></Link>
                        <Link href="#"><p>Member Product</p></Link>
                        <Link href="#"><h1>Your Exclusive Access</h1></Link>
                        <Link href="#"><button>Shop</button></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slides}>
                    <div>
                        <Link href="#"><img src='Memberships3.jpeg' /></Link>
                        <Link href="#"><p>Member Rewards</p></Link>
                        <Link href="#"><h1>How We Say Thank You</h1></Link>
                        <Link href="#"><button>Celebrate</button></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slides}>
                    <div>
                        <Link href="#"><img src='Memberships4.jpg' /></Link>
                        <Link href="#"><p>Sports & Wellness Apps</p></Link>
                        <Link href="#"><h1>Movement Where You're At</h1></Link>
                        <Link href="#"><button>Move</button></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slides}>
                    <div>
                        <Link href="#"><img src='Memberships5.jpg' /></Link>
                        <Link href="#"><p>Nike By You</p></Link>
                        <Link href="#"><h1>Your Customization Service</h1></Link>
                        <Link href="#"><button>Customize</button></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slides}>
                    <div>
                        <Link href="#"><img src='Memberships1.jpeg' /></Link>
                        <Link href="#"><p>SNKRS</p></Link>
                        <Link href="#"><h1>Your Ultimate Sneaker Community</h1></Link>
                        <Link href="#"><button>Explore</button></Link>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}