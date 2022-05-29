import React, { memo } from "react";
import "./Footer.css";
import { FaTwitter } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { IKImage } from "imagekitio-react";
// import DataContext from "context/DataContext";
const ButtonHover = React.lazy(() =>
  import("components/Buttons/ButtonHover/ButtonHover")
);

function Footer() {
  // const {setShowDiscordPopup} = useContext(DataContext);
  return (
    <div>
      <div className="bg-purple-2">
        <div className="container-wrapper py-100px">
          <div className="footer-top">
            <div className="footer-top-left">
              <IKImage
                urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
                path="ALIENSPHERE-head_aUSB3rrYqu0.png"
                loading="lazy"
                lqip={{ active: true }}
              />
              {/* <img src={brandLogoBig} alt="" /> */}
            </div>
            <div className="footer-top-right">
              <a href="https://twitter.com/AlnSphere" target="_blank" rel="noreferrer">
                <ButtonHover
                  padding="14px"
                  iconSize="2.5rem"
                  icon={<FaTwitter />}
                />
              </a>

              {/* <button onClick={() => setShowDiscordPopup(true)}> */}
              <a href="https://discord.com/invite/alnsphere" target="_blank" rel="noreferrer">
                <ButtonHover
                  padding="14px"
                  iconSize="2.5rem"
                  icon={<BsDiscord />}
                />
              </a>
              {/* </button> */}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container-wrapper">
            <p className="text-center fs-14px white weight-4">
              ©2021 AlnSphere. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Footer);
