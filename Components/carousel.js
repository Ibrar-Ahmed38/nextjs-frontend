import Image from "next/image";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Pagination, Navigation } from "swiper";


SwiperCore.use([Pagination, Navigation]);

 function Carousel() {
  return (
    <div className="carousel pt-8 flex bg-gray-50">

      <div className="images relative m-0 ">
        <Image src="/images/halfimg.png" alt="image1" width={700} height={700} />
      </div>
      <div className="absolute w-screen max-w-md mx-auto pt-44">
        <Swiper
          slidesPerView={2}
          spaceBetween={40}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide className="slider-width  mx-w-md mx-auto pt-8">
              <div className="pt-10" >
                  <p className="text">  
                neutra before they sold out fixie 90% microdosing. Tacos
                pinterest fanny pack venmo, post-iconic heirlooom try-hard pabst
                authentic iceland
              </p>

                <div className="pt-8">
                    <Image  src="/images/rectangle.png" alt="" width={40} height={40} className="rounded-full"/>
                </div>
                <div className="headings text">
                    <h1>Holden caulfield</h1>
                    <h1>UI Developer</h1>

                    <div className="pt-4">
                        <button className="text-white bg-red-800 rounded-md mb-8 w-32 h-10">See Profile</button>
                    </div>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className="slider-width mx-w-md mx-auto pt-8">
              <div className="pt-10" >
                  <p className="text">  
                neutra before they sold out fixie 90% microdosing. Tacos
                pinterest fanny pack venmo, post-iconic heirlooom try-hard pabst
                authentic iceland
              </p>

                <div className="pt-8">
                    <Image  src="/images/rectangle.png" alt="" width={40} height={40} className="rounded-full"/>
                </div>
                <div className="headings text">
                    <h1>Holden caulfield</h1>
                    <h1>UI Developer</h1>

                    <div className="pt-4">
                        <button className="text-white bg-red-800 rounded-md mb-8 w-32 h-10">See Profile</button>
                    </div>
                </div>
              </div>
          </SwiperSlide>

          <SwiperSlide className="slider-width mx-w-md mx-auto pt-8">
              <div className="pt-10" >
                  <p className="text">  
                neutra before they sold out fixie 90% microdosing. Tacos
                pinterest fanny pack venmo, post-iconic heirlooom try-hard pabst
                authentic iceland
              </p>

                <div className="pt-8">
                    <Image  src="/images/rectangle.png" alt="" width={40} height={40} className="rounded-full"/>
                </div>
                <div className="headings text">
                    <h1>Holden caulfield</h1>
                    <h1>UI Developer</h1>

                    <div className="pt-4">
                        <button className="text-white bg-red-800 rounded-md mb-8 w-32 h-10">See Profile</button>
                    </div>
                </div>
              </div>
          </SwiperSlide>

          <SwiperSlide className="slider-width mx-w-md mx-auto pt-8">
              <div className="pt-10" >
                  <p className="text">  
                neutra before they sold out fixie 90% microdosing. Tacos
                pinterest fanny pack venmo, post-iconic heirlooom try-hard pabst
                authentic iceland
              </p>

                <div className="pt-8">
                    <Image  src="/images/rectangle.png" alt="" width={40} height={40} className="rounded-full"/>
                </div>
                <div className="headings text">
                    <h1>Holden caulfield</h1>
                    <h1>UI Developer</h1>

                    <div className="pt-4">
                        <button className="text-white bg-red-800 rounded-md mb-8 w-32 h-10">See Profile</button>
                    </div>
                </div>
              </div>
          </SwiperSlide>

          <SwiperSlide className="slider-width mx-w-md mx-auto pt-8">
              <div className="pt-10" >
                  <p className="text">  
                neutra before they sold out fixie 90% microdosing. Tacos
                pinterest fanny pack venmo, post-iconic heirlooom try-hard pabst
                authentic iceland
              </p>

                <div className="pt-8 mx-w-md mx-auto">
                    <Image  src="/images/rectangle.png" alt="" width={40} height={40} className="rounded-full"/>
                </div>
                <div className="headings text">
                    <h1>Holden caulfield</h1>
                    <h1>UI Developer</h1>

                    <div className="pt-4">
                        <button className="text-white bg-red-800 rounded-md mb-8 w-32 h-10">See Profile</button>
                    </div>
                </div>
              </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
}


export default Carousel