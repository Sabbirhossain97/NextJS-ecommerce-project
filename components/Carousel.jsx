import React from "react";
import { Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";

export default function Carousel() {
  return (
    <div>
      <div className="w-full pb-16 mx-auto bg-gray-100">
        <section className="text-gray-600 body-font">
          <div className="container px-5 mx-auto flex flex-wrap">
            <div className="flex w-full mb-20 flex-wrap"></div>
            <div className="flex flex-wrap md:-m-2 -m-1">
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-1/2 ">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block rounded-md"
                    src="/assets/24by7.png"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block  rounded-md"
                    src="/assets/affordableprice.png"
                  />
                </div>
                <div className="md:p-2 p-1 w-full ">
                  <Swiper
                    modules={[Pagination, A11y, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{ delay: 4000 }}
                    pagination={{
                      clickable: true,
                      el: ".swiper-custom-pagination",
                    }}
                  >
                    <SwiperSlide>
                      <img
                        src="/assets/electronics.png"
                        width="1800px"
                        height="400px"
                        className="w-full h-full object-cover object-center block  rounded-md"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/assets/buy-gpus.png" />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <Swiper
                    modules={[Pagination, A11y, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{ delay: 6000 }}
                    pagination={{
                      clickable: true,
                      el: ".swiper-custom-pagination",
                    }}
                  >
                    <SwiperSlide>
                      <img
                        src="/assets/buy-processors.png"
                        className="w-full h-full object-cover object-center block  rounded-md"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src="/assets/ram.png"
                        className="w-full h-full object-cover object-center block  rounded-md"
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block  rounded-md"
                    src="/assets/wrapping.png"
                  />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block  rounded-md"
                    src="/assets/shipping.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
