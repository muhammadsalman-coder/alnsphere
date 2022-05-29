import StatusBar from "components/StatusBar/StatusBar";
import React from "react";
import styles from "./Dashbord.module.css";
import RecentlyListed from "./RecentlyListed/RecentlyListed";
import RecentlySold from "./RecentlySold/RecentlySold";

function Dashboard() {
  return (
    <div className="MARKETPLACE_CONTENT">
      <div className={styles.dashboard}>
        <div className="mb-40px">
          <StatusBar />
        </div>

        <div className={styles.marketStats}>
          <div className="mb-50px">
            <RecentlyListed />
          </div>
          <RecentlySold />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
