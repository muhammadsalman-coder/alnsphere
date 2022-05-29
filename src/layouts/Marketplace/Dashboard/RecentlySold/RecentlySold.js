import CreatureCard from "components/Cards/CreatureCard/CreatureCard";
import React from "react";
import styles from "./RecentlySold.module.css";
import CardsArrays from "layouts/AlnSphereCreatures/MarketPlace/CardsArrays";
import Tabs from "components/Tabs/Tabs";
import Tab from "components/Tabs/Tab";
import TabPan from "components/Tabs/TabPan";
import { AiOutlineCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";

function RecentlySold() {
  return (
    <Tabs defaultTab="CreaturesCards">
      <div>
        <h1 className="fs-22px white weight-5 mb-20px">Recently Sold</h1>

        <div className={`${styles.recentlyListed} mb-20px`}>
          <div className={styles.recentlyListedHeader}>
            <Tab
              tabIndex="CreaturesCards"
              className={`${styles.btn} fs-14px white weight-5`}
              activeClassName={styles.active}
            >
              Alns
            </Tab>
            <Tab
              tabIndex="Lands"
              activeClassName={styles.active}
              className={`${styles.btn} fs-14px white weight-5`}
            >
              Lands
            </Tab>
            <Tab
              tabIndex="items"
              activeClassName={styles.active}
              className={`${styles.btn} fs-14px white weight-5`}
            >
              items
            </Tab>
            <Tab
              tabIndex="enchants"
              activeClassName={styles.active}
              className={`${styles.btn} fs-14px white weight-5`}
            >
              enchants
            </Tab>
            <Tab
              tabIndex="mounts"
              activeClassName={styles.active}
              className={`${styles.btn} fs-14px white weight-5`}
            >
              mounts
            </Tab>
            <Tab
              tabIndex="mysteryboxes"
              activeClassName={styles.active}
              className={`${styles.btn} fs-14px white weight-5`}
            >
              mysteryboxes
            </Tab>
          </div>

          <div className={styles.recentlyListed_body}>
            <div>
              <TabPan tabIndex="CreaturesCards">
                {CardsArrays.CreaturesCards.slice(0, 10).map((card, index) => (
                  <CreatureCard
                    id={card.id}
                    price={
                      Math.round(
                        (parseFloat(card.price) * 3797 + Number.EPSILON) * 100
                      ) / 100
                    }
                    available={card.price}
                    img={card.img}
                    idBg={card.idBg}
                    layout={"Rows"}
                    type="Alns"
                    imageClassname={card.imageClassname}
                    style={{ borderRadius: 0 }}
                    everThingColumn={true}
                    RightArrow={true}
                    duration="a minute ago"
                    analytics={{
                      buyer: {
                        name: "Tom",
                        ethAddress: "02ff5c04009306fe6de9d5a7a54a02ac775b3889",
                      },
                      seller: {
                        name: "Maxville",
                        ethAddress: "02ff5c04009306fe6de9d5a7a54a02ac775b3889",
                      },
                    }}
                  />
                ))}
              </TabPan>
              <TabPan tabIndex="Lands">
                {CardsArrays.Lands.slice(0, 10).map((card, index) => (
                  <CreatureCard
                    id={card.id}
                    price={
                      Math.round(
                        (parseFloat(card.price) * 3797 + Number.EPSILON) * 100
                      ) / 100
                    }
                    available={card.price}
                    img={card.img}
                    idBg={card.idBg}
                    layout={"Rows"}
                    type="Alns"
                    imageClassname={card.imageClassname}
                    style={{ borderRadius: 0 }}
                  />
                ))}
              </TabPan>
              <TabPan tabIndex="items">
                {CardsArrays.items.slice(0, 10).map((card, index) => (
                  <CreatureCard
                    id={card.id}
                    price={
                      Math.round(
                        (parseFloat(card.price) * 3797 + Number.EPSILON) * 100
                      ) / 100
                    }
                    available={card.price}
                    img={card.img}
                    idBg={card.idBg}
                    layout={"Rows"}
                    type="Alns"
                    imageClassname={card.imageClassname}
                    style={{ borderRadius: 0 }}
                  />
                ))}
              </TabPan>
              <TabPan tabIndex="enchants">
                {CardsArrays.enchants.slice(0, 10).map((card, index) => (
                  <CreatureCard
                    id={card.id}
                    price={
                      Math.round(
                        (parseFloat(card.price) * 3797 + Number.EPSILON) * 100
                      ) / 100
                    }
                    available={card.price}
                    img={card.img}
                    idBg={card.idBg}
                    layout={"Rows"}
                    type="Alns"
                    imageClassname={card.imageClassname}
                    style={{ borderRadius: 0 }}
                  />
                ))}
              </TabPan>
              <TabPan tabIndex="mounts">
                {CardsArrays.mounts.slice(0, 10).map((card, index) => (
                  <CreatureCard
                    id={card.id}
                    price={
                      Math.round(
                        (parseFloat(card.price) * 3797 + Number.EPSILON) * 100
                      ) / 100
                    }
                    available={card.price}
                    img={card.img}
                    idBg={card.idBg}
                    layout={"Rows"}
                    type="Alns"
                    imageClassname={card.imageClassname}
                    style={{ borderRadius: 0 }}
                  />
                ))}
              </TabPan>
              <TabPan tabIndex="mysteryboxes">
                {CardsArrays.mysteryboxes.slice(0, 10).map((card, index) => (
                  <CreatureCard
                    id={card.id}
                    price={
                      Math.round(
                        (parseFloat(card.price) * 3797 + Number.EPSILON) * 100
                      ) / 100
                    }
                    available={card.price}
                    img={card.img}
                    idBg={card.idBg}
                    layout={"Rows"}
                    type="Alns"
                    imageClassname={card.imageClassname}
                    style={{ borderRadius: 0 }}
                  />
                ))}
              </TabPan>
            </div>
          </div>
        </div>

        <Link
          to="/marketplace/collection"
          className={`${styles.linkToNextPage} weight-5 fs-16px`}
        >
          View More On Marketplace
          <AiOutlineCaretRight />
        </Link>
      </div>
    </Tabs>
  );
}

export default RecentlySold;
