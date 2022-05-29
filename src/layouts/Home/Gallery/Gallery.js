import React, { memo } from "react";
import "./Gallery.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import Title from "components/Title/Title";
import { IKImage } from "imagekitio-react";
SwiperCore.use([EffectCoverflow, Pagination]);

function Gallery() {
  return (
    <div className="gallery-wrapper">
      <div className="gallery-botom"></div>
      <div className="container-wrapper gallery py-100px">
 
        <Title
          title="Gallery"
          className="text-center  fs-46px weight-7 uppercase mb-60px"
        />

        <div className="gallery-content">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            spaceBetween={100}
            speed = {100}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 300,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            className="mySwiper"
          >

           <SwiperSlide>
              <IKImage
                urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
                path="/Attachment_1643911967_PZuK18GrW.gif"
                loading="lazy"
                lqip={{ active: true }}
              />
              
              {/* <img src={galleryImg1} alt="img" /> */}
            </SwiperSlide>
            <SwiperSlide>
              <IKImage
                urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
                path="/gallery/1-min_ovmrBeLza.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645588217009"
                loading="lazy"
                lqip={{ active: true }}
              />

              {/* <img src={galleryImg2} alt="img" /> */}
            </SwiperSlide>
            <SwiperSlide>
              <IKImage
                urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
                path="/gallery/2-min_-7neZlrDF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645588218223"
                loading="lazy"
                lqip={{ active: true }}
              />

              {/* <img src={galleryImg3} alt="img" /> */}
            </SwiperSlide>
            <SwiperSlide>
              <IKImage
                urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
                path="/gallery/3-min_b9Bv8zh05O60.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645588217018"
                loading="lazy"
                lqip={{ active: true }}
              />

              {/* <img src={galleryImg4} alt="img" /> */}
            </SwiperSlide>
            <SwiperSlide>
              <IKImage
                urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
                path="/gallery/4-min_FXII-jrLJ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645588219138"
                loading="lazy"
                lqip={{ active: true }}
              />

              {/* <img src={galleryImg5} alt="img" /> */}
            </SwiperSlide>
            <SwiperSlide>
              <IKImage
                urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
                path="/gallery/5-min_rwjJkx_7Icf_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645588218661"
                loading="lazy"
                lqip={{ active: true }}
              />

              {/* <img src={galleryImg5} alt="img" /> */}
            </SwiperSlide>
            <SwiperSlide>

              <IKImage
                urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
                path= "/gallery/6-min_yzMc2fQKOJ-c.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645588218210"
                loading="lazy"
                lqip={{ active: true }}
              />

              {/* <img src={galleryImg5} alt="img" /> */}
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default memo(Gallery);
