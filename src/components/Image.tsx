import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay} from 'swiper/modules';

export default function Image() {
  return (
    <div className='image-container'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        loop={true}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="../../public/drink/drink01.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../public/drink/drink02.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../public/drink/drink03.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../public/drink/drink04.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../public/drink/drink05.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../public/drink/drink06.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../public/drink/drink07.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../public/drink/drink08.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../public/drink/drink09.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
