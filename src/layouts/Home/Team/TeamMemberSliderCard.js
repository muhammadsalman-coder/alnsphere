import React, { memo } from "react";
import styles from "./Team.module.css";
import { GoMail } from "react-icons/go";
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai";

import { IKImage } from "imagekitio-react";

const TeamMemberSliderCard = (props) => {
  const { image, name, designation, description, instagramLink, emailLink, linkedInLink, twitterLink } =
    props.data;
  return (
    <div className={styles.team_member_slider_card}>
      <div className={styles.team_member_slider_card_image}>
        <IKImage
          urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha/"}
          path={image}
          loading="lazy"
          lqip={{ active: true }}
        />
        {/* <img src={image} alt="" /> */}
      </div>

      <div className="text-center mb-25px">
        <p className="fs-20px white weight-7 mb-10px">{name}</p>
        <p className="fs-16px white weight-5">{designation}</p>
      </div>

      <div className={`${styles.team_member_slider_disc} text-center mb-35px`}>
        <p className="fs-16px weight-4 white">{description}</p>
      </div>

      <div className={styles.team_member_slider_card_social_icons}>
        {emailLink ? (
          <a href={`mailto:${emailLink}`} rel="noreferrer" target="_blank">
            <GoMail />
          </a>
        ) : (
          ""
        )}
        {instagramLink ? (
          <a href={instagramLink} rel="noreferrer" target="_blank">
            <AiOutlineInstagram />
          </a>
        ) : (
          ""
        )}
        {linkedInLink ? (
          <a href={linkedInLink} rel="noreferrer" target="_blank">
            <AiOutlineLinkedin />
          </a>
        ) : (
          ""
        )}
        {twitterLink ? (
          <a href={twitterLink} rel="noreferrer" target="_blank">
            <AiOutlineTwitter />
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default memo(TeamMemberSliderCard);
