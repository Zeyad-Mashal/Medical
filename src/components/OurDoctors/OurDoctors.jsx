import React from "react";
import "./OurDoctors.css";
import doctor1 from "../../images/doctor-1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const OurDoctors = () => {
  return (
    <section className="our_doctors">
      <div className="doctors_container">
        <div className="doctors_list">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              400: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              650: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              991: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
              <div className="doctor_item" data-swiper-parallax="-23%">
                <div className="doctor_item_holder">
                  <img src={doctor1} loading="lazy" />
                </div>
                <div className="doctor_item_content">
                  <h3>Doctor Name</h3>
                  <span className="spliter"></span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos, consectetur!
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="doctor_item">
                <div className="doctor_item_holder">
                  <img src={doctor1} />
                </div>
                <div className="doctor_item_content">
                  <h3>Doctor Name</h3>
                  <span className="spliter"></span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos, consectetur!
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="doctor_item">
                <div className="doctor_item_holder">
                  <img src={doctor1} />
                </div>
                <div className="doctor_item_content">
                  <h3>Doctor Name</h3>
                  <span className="spliter"></span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos, consectetur!
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="doctor_item">
                <div className="doctor_item_holder">
                  <img src={doctor1} />
                </div>
                <div className="doctor_item_content">
                  <h3>Doctor Name</h3>
                  <span className="spliter"></span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos, consectetur!
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="doctor_item">
                <div className="doctor_item_holder">
                  <img src={doctor1} />
                </div>
                <div className="doctor_item_content">
                  <h3>Doctor Name</h3>
                  <span className="spliter"></span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos, consectetur!
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="doctor_item">
                <div className="doctor_item_holder">
                  <img src={doctor1} />
                </div>
                <div className="doctor_item_content">
                  <h3>Doctor Name</h3>
                  <span className="spliter"></span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos, consectetur!
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurDoctors;
