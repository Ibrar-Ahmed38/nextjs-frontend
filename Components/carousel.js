import Image from "next/image";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "../styles/Home.module.css";

SwiperCore.use([Pagination, Navigation]);

function Carousel() {
  return (
    <div className="carousel w-full flex bg-gray-50">
      <div className="images ">
        <Image src="/images/image1.png" width={600} height={600} />
      </div>
      <div className="text-4xl font-bold pt-10">
          <h1>What Clients Are Saying</h1>
      <h1>About Our Masseurs</h1>
      </div>
      <div className="absolute   pt-48 h-full ml-72">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide className="slider-width pt-8">
              <div >
                  <p className="text-sm">  
                Synth chartreuse Iphone cray raw claim bunch everyday carry
                neutra before they sold out fixie 90% microdosing. Tacos
                pinterest fanny pack venmo, post-iconic heirlooom try-hard pabst
                authentic iceland
              </p>

                <div className="pt-8">
                    <Image  src="/images/rectangle.png" width={40} height={40} className="rounded-full"/>
                </div>
                <div className="headings text-sm">
                    <h1>Holden caulfield</h1>
                    <h1>UI Developer</h1>

                    <div className="pt-4">
                        <button className="text-white bg-red-800 rounded-md w-32 h-10">See Profile</button>
                    </div>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className="slider-width pt-8">
          <div >
                  <p className="text-sm">  
                Synth chartreuse Iphone cray raw claim bunch everyday carry
                neutra before they sold out fixie 90% microdosing. Tacos
                pinterest fanny pack venmo, post-iconic heirlooom try-hard pabst
                authentic iceland
              </p>

                <div className="pt-8">
                    <Image  src="/images/rectangle.png" width={40} height={40} className="rounded-full"/>
                </div>
                <div className="headings text-sm">
                    <h1>Holden caulfield</h1>
                    <h1>UI Developer</h1>

                    <div className="pt-4">
                        <button className="text-white bg-red-800 rounded-md w-32 h-10">See Profile</button>
                    </div>
                </div>
              </div>
          </SwiperSlide>

          <SwiperSlide className="slider-width">Slide 3</SwiperSlide>
          <SwiperSlide className="slider-width">Slide 4</SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
}

export default Carousel;
