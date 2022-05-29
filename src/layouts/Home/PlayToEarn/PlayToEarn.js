import React, { memo, useState } from "react";
import "./PlayToEarn.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay } from "swiper";
import Title from "components/Title/Title";
import { IKImage } from "imagekitio-react";
import "react-image-lightbox/style.css";
SwiperCore.use([Autoplay]);

const Lightbox = React.lazy(() => import("react-image-lightbox"));

const SliderSection = ({
  images,
  content,
  reverse = false,
  setisOpen,
  setImages,
  setphotoIndex,
  imagesData,
}) => {
  return (
    <div className={`slider-section ${reverse ? "reverse" : ""} `}>
      <div className="slider-section-left">
        <Swiper
          autoplay={{
            delay: 1300,
            disableOnInteraction: false,
          }}
          loop = {true}
          spaceBetween={20}
          className="mySwiper"
        >
          {images.map((img, index) => (
            <SwiperSlide>
              <IKImage
                urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
                path={img}
                loading="lazy"
                lqip={{ active: true }}
                onClick={() => {
                  setImages(imagesData);
                  setphotoIndex(index);
                  setisOpen(true);
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="slider-section-right text-center">{content}</div>
    </div>
  );
};

function PlayToEarn() {
  const [photoIndex, setphotoIndex] = useState(0);
  const [isOpen, setisOpen] = useState(false);
  const [images, setImages] = useState([
    "https://ik.imagekit.io/6pl7k4a01ha/Inventory_zCbIGF7uN.jpg?updatedAt=1639461290255",
    "https://ik.imagekit.io/6pl7k4a01ha/InventoryChatOpen_Ay1Y8x-SL.jpg?updatedAt=1639461290071",
    "https://ik.imagekit.io/6pl7k4a01ha/Arena_UnKGxt3WxCV.jpg?updatedAt=1639461291767",
    "https://ik.imagekit.io/6pl7k4a01ha/Quest_eczXuvI8cWM.jpg?updatedAt=1639461290054",
  ]);

  return (
    <div className="PlayToEarn-wrapper py-100px">
      <div className="container-wrapper">
        <Title
          title="Play And Earn"
          className={"text-center  fs-46px weight-7 uppercase mb-70px"}
        />

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setisOpen(false)}
            onMovePrevRequest={() =>
              setphotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setphotoIndex((photoIndex + 1) % images.length)
            }
          />
        )}

        <div className="mb-100px">
          <SliderSection
            setphotoIndex={setphotoIndex}
            setImages={setImages}
            setisOpen={setisOpen}
            images={[
              "Inventory_zCbIGF7uN.jpg?updatedAt=1639461290255",
              "InventoryChatOpen_Ay1Y8x-SL.jpg?updatedAt=1639461290071",
            ]}
            imagesData={[
              "https://ik.imagekit.io/6pl7k4a01ha/Inventory_zCbIGF7uN.jpg?updatedAt=1639461290255",
              "https://ik.imagekit.io/6pl7k4a01ha/InventoryChatOpen_Ay1Y8x-SL.jpg?updatedAt=1639461290071",
            ]}
            content={
              <>
                <p className="white lh-30px fs-18px weight-4 mb-20px">
                  Grow your inventory and dive into the action by completing
                  <span className="pink-2 weight-7"> quests</span>, fighting in
                  <span className="pink-2 weight-7"> dungeons</span>,
                  challenging players in{" "}
                  <span className="pink-2 weight-8"> PvP</span> and climbing the
                  leader board, collecting rare{" "}
                  <span className="pink-2 weight-8"> items</span>, joining
                  <span className="pink-2 weight-8"> guilds</span>, and winning
                  <span className="pink-2 weight-8"> tournaments</span>{" "}
                  containing huge prize pools!
                </p>
                <p className="white lh-30px fs-18px weight-4">
                  Collect <span className="pink-2 weight-8"> $Sphererocks</span>{" "}
                  along the way and make use of them in{" "}
                  <span className="pink-2 weight-8"> The Grand Hall</span>.
                  Enjoy a thrilling gameplay experience and use your special
                  ability to your advantage.
                </p>
              </>
            }
          />
        </div>
        <SliderSection
          setphotoIndex={setphotoIndex}
          setImages={setImages}
          setisOpen={setisOpen}
          images={["Arena_UnKGxt3WxCV.jpg?updatedAt=1639461291767", "Quest_eczXuvI8cWM.jpg?updatedAt=1639461290054"]}
          reverse={true}
          imagesData={[
            "https://ik.imagekit.io/6pl7k4a01ha/Arena_UnKGxt3WxCV.jpg?updatedAt=1639461291767",
            "https://ik.imagekit.io/6pl7k4a01ha/Quest_eczXuvI8cWM.jpg?updatedAt=1639461290054",
          ]}
          content={
            <>
              <p className="white lh-30px fs-18px weight-4 mb-25px">
                Team up with other players and defeat{" "}
                <span className="pink-2 weight-8"> boss monsters</span>, loot
                epic items with special{" "}
                <span className="pink-2 weight-8"> bonuses</span>, and make good
                use of the{" "}
                <span className="pink-2 weight-8"> marketplace </span>
                to get an edge and win over the competition.
              </p>
              <p className="white lh-30px fs-18px weight-4">
                Formulate the best strategy to your success and become the best!
                Be part of our exclusive community and benefit from{" "}
                <span className="pink-2 weight-8"> airdrops</span>, and many
                more features outside the game.
              </p>
            </>
          }
        />
      </div>
    </div>
  );
}

export default memo(PlayToEarn);
