// import { useEffect } from 'react';
import { IKImage } from "imagekitio-react";
// import { Link } from 'react-router-dom';
const RGBCard = ({ href, title, imagepath, description, soon = false }) => {
  if (soon) {
    return (
      <div className="cardContainer">
        <div className="cardBox rgb">
          <div className="cardHeader">
            <IKImage
              urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
              path={imagepath}
              loading="lazy"
              lqip={{ active: true }}
            />
          </div>
          <div className="cardDetails">
            <h1>{title}</h1>
            <p>{description}</p>
            <p style={{ color: "white", fontWeight: "bold" }}>Coming Soon</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <a className="cardContainer" rel="noreferrer" target="_blank" href={href}>
        <div className="cardBox rgb">
          <div className="cardHeader">
            <IKImage
              urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
              path={imagepath}
              loading="lazy"
              lqip={{ active: true }}
            />
          </div>
          <div class="cardDetails">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </a>
    );
  }
};

export default RGBCard;
