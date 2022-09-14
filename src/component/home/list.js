import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
const List = () => {
  return (
    <div className="list">
      <div className="Container py-4 px-4 justify-content-center ">
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="mySwiper"
          slidesPerView={3}
          spaceBetween={10}
        >
          <div>
            <SwiperSlide className="productname">
              <h5>ArmChair</h5>
            </SwiperSlide>

            <SwiperSlide>
              <h5>ArmChair</h5>
            </SwiperSlide>
            <SwiperSlide>
              <h5>ArmChair</h5>
            </SwiperSlide>
            <SwiperSlide>
              <h5>ArmChair</h5>
            </SwiperSlide>
            <SwiperSlide>
              <h5>ArmChair</h5>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default List;
