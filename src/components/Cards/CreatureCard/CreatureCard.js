import React from "react";
import "./CreatureCard.css";
import { FaBars } from "react-icons/fa";
import { IKImage } from "imagekitio-react";

import cardAsset1 from "assets/images/card-assets/11.png";
import cardAsset2 from "assets/images/card-assets/9.png";
import cardAsset3 from "assets/images/card-assets/22.png";
import cardAsset4 from "assets/images/card-assets/7.png";
import cardAsset5 from "assets/images/card-assets/4.png";
import cardAsset6 from "assets/images/card-assets/21.png";
import { MdKeyboardArrowRight } from "react-icons/md";

const StatCard = ({ img, value }) => {
  return (
    <div className="creature-card_stats_card">
      <div className="card_stats_card_icon">
        <img src={img} alt="" />
      </div>
      <div className="card_stats_card_count fs-16px white weight-6">
        {Math.floor(Math.random() * 50)}
      </div>
    </div>
  );
};

const AnalyticsCard = ({ analytics, title }) => {
  const { name, ethAddress } = analytics;
  return (
    <div className="creature-card-analytics-card">
      <p className="fs-14px light-white uppercase weight-6 mb-5px">{title}</p>
      <p className="fs-16px white weight-5 mb-5px">{name}</p>
      <p className="fs-12px light-white">
        ({ethAddress.slice(0, 6)}...
        {ethAddress.slice(-6, -1)})
      </p>
    </div>
  );
};

//apikey= 88f992b534b8e4b8a86de85793cbf73c3fd00c830cf0be93ec3fcbf35ee02845
function CreatureCard({
  id,
  img,
  idBg,
  layout,
  imageClassname,
  price,
  available,
  type,
  style,
  stats = false,
  everThingColumn = false,
  RightArrow = false,
  duration = false,
  analytics = false,
}) {
  return (
    <div
      className={`creature-card ${layout === "Rows" ? "row" : ""} ${
        everThingColumn ? "everThingColumn" : ""
      }`}
      style={style}
    >
      <div className="creature-card-titles">
        <div>
          <div
            className="creature-id fs-12px weight-5 white mb-10px"
            style={{ background: idBg }}
          >
            #{id}
          </div>
          <p className="fs-12px weight-5 white">
            {type} #{id}
          </p>
        </div>

        {stats ? (
          <div className="creature-card_stats">
            <StatCard img={cardAsset3} />
            <StatCard img={cardAsset6} />
            <StatCard img={cardAsset2} />
            <StatCard img={cardAsset1} />
            <StatCard img={cardAsset4} />
            <StatCard img={cardAsset5} />
          </div>
        ) : (
          ""
        )}

        {analytics ? (
          <div className="creature-card-analytics">
            <AnalyticsCard title="Buyer" analytics={analytics.buyer} />
            <AnalyticsCard title="Seller" analytics={analytics.seller} />
          </div>
        ) : (
          ""
        )}

        {/* <p className="fs-12px weight-5 light-white">Breed count: 2</p> */}
      </div>

      <div className={`creature-details text-center ${imageClassname}`}>
        {/* <img src={img} alt="" /> */}

        <IKImage
          urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
          path={img}
          loading="lazy"
          lqip={{ active: true }}
        />
      </div>

      <div className="creature-card-price_wrapper">
        <div className="creature-card-price">
          <div className="creature-card-price_bar">
            <FaBars className="white" />
            <p className="fs-20px weight-5 white">{available}</p>{" "}
          </div>
          <p className="fs-14px weight-5 light-white">{`$${price} `}</p>{" "}
          {duration ? (
            <p
              className={`creature-card-price-duration  fs-12px weight-4 light-white`}
            >
              {duration}
            </p>
          ) : (
            ""
          )}
        </div>
        {RightArrow ? <MdKeyboardArrowRight className="white" size={30} /> : ""}
      </div>
    </div>
  );
}

export default CreatureCard;
