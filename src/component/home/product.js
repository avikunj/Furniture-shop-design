import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import BellyChair from "../../img/bellychair.jpg";
import Chair from "../../img/chair.jpg";
import RossyChair from "../../img/rossy chair.jpg";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
const Productitem = () => {
  return (
    <div className="productitem">
      <h4>
        Best Seller<span>See all</span>
      </h4>
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
            <SwiperSlide>
          <Link to="/viewProduct1" className="view">
              <img
                src={BellyChair}
                height={100}
                width={120}
                className="image"
                alt="ItemPicture"
              />
              <div className="price">
                <h5>Belly Chair</h5>
                <p>$120 </p>
                <AiFillPlusCircle className="plus" />
                
              </div>
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link to="/viewProduct" className="view">
                <img
                  src={Chair}
                  height={100}
                  width={120}
                  className="image"
                  alt="ItemPicture"
                />
                <div className="price">
                  <h5>Chair</h5>
                  <p>$120 </p>
                  <AiFillPlusCircle className="plus" />
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={RossyChair}
                height={100}
                width={120}
                className="image"
                alt="ItemPicture"
              />
              <div className="price">
                <h5>Belly Chair</h5>
                <p>$120 </p>
                <AiFillPlusCircle className="plus" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={BellyChair}
                height={100}
                width={120}
                className="image"
                alt="ItemPicture"
              />
              <div className="price">
                <div className="price">
                  <h5>Belly Chair</h5>
                  <p>$120 </p>
                  <AiFillPlusCircle className="plus" />
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Productitem;
