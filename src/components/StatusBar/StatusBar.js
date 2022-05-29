import React from "react";
import styles from "./StatusBar.module.css";
import DataContext from "context/DataContext";
import ethereumIcon from "assets/images/ethereum-2.png";
import alien from "assets/images/alien.png";
import ufo from "assets/images/ufo-3.png";

import Tab from "components/Tabs/Tab";
import Tabs from "components/Tabs/Tabs";
import TabPan from "components/Tabs/TabPan";
// import DataContext from "context/DataContext";

const Card = ({ title, value, img }) => {
  return (
    <div className={styles.card}>
      <img src={img} className="invert" alt="" />
      <div>
        <p className="uppercase light-white fs-12px weight-5 mb-5px">{title}</p>
        <TabPan tabIndex="24h">
          <p className={`${styles.cardValue} uppercase white fs-22px weight-7`}>
            {value.twentyFour}
          </p>
        </TabPan>
        <TabPan tabIndex="7days">
          <p className={`${styles.cardValue} uppercase white fs-22px weight-7`}>
            {value.seven}
          </p>
        </TabPan>
        <TabPan tabIndex="30days">
          <p className={`${styles.cardValue} uppercase white fs-22px weight-7`}>
            {value.thirty}
          </p>
        </TabPan>
      </div>
    </div>
  );
};

function StatusBar() {
  const {ETHRate} = React.useContext(DataContext);

  return (
    <Tabs defaultTab="24h">
      <div className={styles.statusBar}>
        <div className={styles.statusbarHeader}>
          <Tab
            tabIndex={"24h"}
            className={`${styles.statusbarHeaderBtn} fs-16px white weight-6 pointer`}
            activeClassName={styles.active}
          >
            Last 24h
          </Tab>
          <Tab
            tabIndex={"7days"}
            className={`${styles.statusbarHeaderBtn} fs-16px white weight-6 pointer`}
            activeClassName={styles.active}
          >
            7 days
          </Tab>
          <Tab
            tabIndex={"30days"}
            className={`${styles.statusbarHeaderBtn} fs-16px white weight-6 pointer`}
            activeClassName={styles.active}
          >
            30 days
          </Tab>
        </div>
        <div className={`${styles.statusBarBody}`}>
          <Card
            value={{ twentyFour: ETHRate, seven: ETHRate, thirty: ETHRate }}
            title="ETH-USD Price"
            img={ethereumIcon}
          />
          <Card
            img={ufo}
            value={{
              twentyFour: (
                <>
                  Ξ 1,410.8&nbsp;<p className="light-white fs-18px">$4.64M</p>
                </>
              ),
              seven: (
                <>
                  Ξ 1,430.8&nbsp;<p className="light-white fs-18px">$4.64M</p>
                </>
              ),
              thirty: (
                <>
                  Ξ 1,467.8&nbsp;<p className="light-white fs-18px">$4.64M</p>
                </>
              ),
            }}
            title="TOTAL VOLUME"
          />
          <Card
            img={alien}
            value={{ twentyFour: "102", seven: "483", thirty: "1255" }}
            title="ALNS SOLD"
          />
        </div>
      </div>
    </Tabs>
  );
}

export default StatusBar;
