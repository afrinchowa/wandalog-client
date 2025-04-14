import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import SectionTitle from "../../../components/SectionTitle";

const Category = () => {
  return (
    <div className="py-10">
      <SectionTitle
        heading={"category of blogs"}
        subHeading={"Here is huge opportunity to explore and advanture"}
      />

      <div className="flex justify-center items-center">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9
          ].map((num) => (
            <SwiperSlide key={num} className="max-w-[300px]">
              <img
                src={`https://swiperjs.com/demos/images/nature-${num}.jpg`}
                alt={`Slide ${num}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Category;
