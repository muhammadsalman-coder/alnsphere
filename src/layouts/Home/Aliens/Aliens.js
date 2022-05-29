import React, { memo } from "react";
import "./Aliens.css";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { EffectCoverflow, Navigation } from "swiper";
import Title from "components/Title/Title";
import { IKImage } from "imagekitio-react";
SwiperCore.use([EffectCoverflow, Navigation]);

function Aliens() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <div className="py-100px ">
      <div className="container-wrapper">
        <Title
          title="The Chosen Ones"
          className={"text-center  fs-46px weight-7 uppercase mb-40px"}
        />

        <div className="alien-slider">
          <button className="alien-slider-arrow left" ref={navigationPrevRef}>
            <AiFillCaretLeft />
          </button>
          <button className="alien-slider-arrow right" ref={navigationNextRef}>
            <AiFillCaretRight />
          </button>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            spaceBetween={20}
            loop={true}
            coverflowEffect={{
              rotate: 40,
              stretch: 0,
              depth: 50,
              modifier: 1,
              slideShadows: true,
            }}
            className="alienSwiper"
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            <SwiperSlide>
              <IKImage
                urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
                path="/choosenOnes/Alns_Gladiator_ItemsX-min_7I0MPrsEtJhF.png"
                loading="lazy"
                lqip={{ active: true }}
              />
              {/* <img src={alienImg1} alt="img" /> */}
            </SwiperSlide>
            <SwiperSlide>
              <IKImage
                urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
                path="/choosenOnes/Alns_Astronaut_ItemsX-min_Q0_MbSq7X.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645708851057"
                loading="lazy"
                lqip={{ active: true }}
              />
              {/* <img src={alienImg2} alt="img" /> */}
            </SwiperSlide>

            <SwiperSlide>
              <IKImage
                urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
                path="/choosenOnes/Alns_Joker_ItemsX-min_BnIa2yMO8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645708851710"
                loading="lazy"
                lqip={{ active: true }}
              />
              {/* <img src={alienImg3} alt="img" /> */}
            </SwiperSlide>
            <SwiperSlide>
              <IKImage
                urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
                path="/choosenOnes/Alns_Harry_Potter_ItemsX-min_nrjeoCLg-.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645708850136"
                loading="lazy"
                lqip={{ active: true }}
              />
              {/* <img src={alienImg3} alt="img" /> */}
            </SwiperSlide>
            <SwiperSlide>
              <IKImage
                urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
                path="/choosenOnes/image_-CjYJO4EVYQ_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645708855532"
                loading="lazy"
                lqip={{ active: true }}
              />
              {/* <img src={alienImg3} alt="img" /> */}
            </SwiperSlide>
            <SwiperSlide>
              <IKImage
                urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
                path="/choosenOnes/image_1__KzJTk4_hi.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645708854360"
                loading="lazy"
                lqip={{ active: true }}
              />
              {/* <img src={alienImg3} alt="img" /> */}
            </SwiperSlide>
            <SwiperSlide>
              <IKImage
                urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
                path="/choosenOnes/image_2__sPBth-QKK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645708853647"
                loading="lazy"
                lqip={{ active: true }}
              />
              {/* <img src={alienImg3} alt="img" /> */}
            </SwiperSlide>
            <SwiperSlide>
              <IKImage
                urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
                path="/choosenOnes/image_3__ftX1NsoXl.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645708853688"
                loading="lazy"
                lqip={{ active: true }}
              />
              {/* <img src={alienImg3} alt="img" /> */}
            </SwiperSlide>
            <SwiperSlide>
              <IKImage
                urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
                path="/choosenOnes/Alns_IronMan_ItemsX-min_K8kwXNwdk.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645708852098"
                loading="lazy"
                lqip={{ active: true }}
              />
              {/* <img src={alienImg3} alt="img" /> */}
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default memo(Aliens);
