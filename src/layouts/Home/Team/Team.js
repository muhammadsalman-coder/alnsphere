import React, { memo } from "react";
import styles from "./Team.module.css";
import "./TeamSlider.css";

import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { membersData } from "./membersData";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation, Pagination } from "swiper";
import TeamMemberSliderCard from "./TeamMemberSliderCard";
import Title from "components/Title/Title";
SwiperCore.use([Navigation, Pagination]);

function Team() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <div className={`${styles.teamWrapper} bg-purple-2 py-100px`}>
      <div className="container-wrapper">
        <div className={`${styles.team_head} mb-70px`}>
          <Title
            title="our team"
            className={"text-center  fs-46px weight-7 uppercase "}
          />
          <p className="fs-16px white weight-4 lh-30px  ">
            Special thanks go out to our employees and partners! We are always
            searching for experienced employees in development & art. If you
            believe to fit into our team and provide value we are still hiring.
            <br />
            <a
              // href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=job@alnsphere.com "
              href="mailto:job@alnsphere.com"
              target="_blank"
              className="weight-7 "
              rel="noreferrer"
            >
              Job applications to job@alnsphere.com
            </a>
            .
          </p>
        </div>

        <div className={styles.team_members}>
          <div className={`${styles.team_member_slider} team_member_slider `}>
            <Swiper
              spaceBetween={30}
              className="team_member_slider_swipper"
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              loop={true}
              onBeforeInit={(swiper) => {
                setTimeout(() => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                  swiper.navigation.destroy();
                  swiper.navigation.init();
                  swiper.navigation.update();
                });
              }}
              pagination={{
                el: ".members_slider_pagination_cards",
                clickable: true,

                type: "bullets",
                bulletElement: "div",
                bulletClass: "slider-member-bullet",
                bulletActiveClass: "slider-member-bullet-active",

                renderBullet: (index, className) => {
                  return `
                        <div  class=${className}>
                             <div class="slider-member-bullet-img"> <img src=${membersData[index].image2} alt="" /> </div>
                             <p class="slider-member-bullet-name">${membersData[index].name}</p>
                        </div>
                    `;
                },
              }}
            >
              {membersData.map((member, index) => (
                <SwiperSlide>
                  <TeamMemberSliderCard data={member} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={styles.team_members_gallery}>
            <div className={styles.team_members_gallery_buttons}>
              <button className="pointer" ref={navigationNextRef}>
                <div className={styles.team_members_gallery_btn_wrappper}>
                  <div className={styles.team_members_gallery_btn_wrap}>
                    <BiChevronRight />
                  </div>
                </div>
              </button>
              <button className="pointer" ref={navigationPrevRef}>
                <div className={styles.team_members_gallery_btn_wrappper}>
                  <div className={styles.team_members_gallery_btn_wrap}>
                    <BiChevronLeft />
                  </div>
                </div>
              </button>
            </div>

            {/* PAGINATION */}
            <div
              className={`${styles.members_slider_pagination_cards} members_slider_pagination_cards`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Team);
