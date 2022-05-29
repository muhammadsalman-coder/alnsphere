import Checkbox from "components/Checkbox/Checkbox";
import { AlnSphereCreaturesContext_Provider } from "pages/AlnSphereCreatures/AlnSphereCreaturesContext";
import React, { useContext, useState } from "react";
import styles from "./Collection.module.css";
import { BiChevronDown, BiSearch } from "react-icons/bi";
import crossIcon from "assets/images/cross-icon.png";
import Tabs from "components/Tabs/Tabs";
// import { NavLink, Outlet } from "react-router-dom";
import DataContext from "context/DataContext";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import TabPan from "components/Tabs/TabPan";
// import Cards from "../MarketPlace/Cards";
import Tab from "components/Tabs/Tab";
import CardComponent from "components/CardComponent";
import Popup from "./Popup";

function Collection() {
  const { isFilterBarOpen, setIsFilterBarOpen } = useContext(
    AlnSphereCreaturesContext_Provider
  );
  const [isOpen, setIsOpen] = useState(false);
  const [activeTabIndexValue, setActiveTabIndexValue] = useState("Creatures");
  const { searchInput, setSearchInput, checkboxes, setCheckboxes, showPopup, setShowPopup } =
    useContext(DataContext);

  let menuRef = OutsideClickDetector(() => {
    setIsFilterBarOpen(false);
  });


  return (
    <>
      {showPopup ? <Popup setShowPopup = {setShowPopup} /> : null}
      <Tabs defaultTab={1}>
        <div className="market-place-nav">
          <div className="nav-center-wrap">
            <div
              className="nav-center-dropdown-btn fs-14px white weight-5"
              onClick={() => setIsOpen(!isOpen)}
            >
              {activeTabIndexValue}
              <BiChevronDown />
            </div>
            <div className={`nav-center-dropdown ${isOpen ? "open" : ""} `}>
              <Tab
                className="nav-tab pointer fs-14px white weight-5"
                activeClassName="nav-tab-active"
                tabIndex={1}
                onPress={() => {
                  setIsOpen(false);
                  setActiveTabIndexValue("Creatures");
                }}
              >
                Creatures
              </Tab>
              <Tab
                className="nav-tab pointer fs-14px white weight-5"
                activeClassName="nav-tab-active"
                tabIndex={2}
                onPress={() => {
                  setIsOpen(false);
                  setActiveTabIndexValue("Lands");
                }}
              >
                Lands
              </Tab>

              <Tab
                className="nav-tab pointer fs-14px white weight-5"
                activeClassName="nav-tab-active"
                tabIndex={4}
                onPress={() => {
                  setIsOpen(false);
                  setActiveTabIndexValue("Items");
                }}
              >
                Items
              </Tab>
              <Tab
                className="nav-tab pointer fs-14px white weight-5"
                activeClassName="nav-tab-active"
                tabIndex={5}
                onPress={() => {
                  setIsOpen(false);
                  setActiveTabIndexValue("Enchant");
                }}
              >
                Enchant
              </Tab>
              <Tab
                className="nav-tab pointer fs-14px white weight-5"
                activeClassName="nav-tab-active"
                tabIndex={6}
                onPress={() => {
                  setIsOpen(false);
                  setActiveTabIndexValue("Mounts");
                }}
              >
                Mounts
              </Tab>
              <Tab
                className="nav-tab pointer fs-14px white weight-5"
                activeClassName="nav-tab-active"
                tabIndex={7}
                onPress={() => {
                  setIsOpen(false);
                  setActiveTabIndexValue("Mystery Box");
                }}
              >
                Mystery Box
              </Tab>
            </div>
          </div>
        </div>

        <div className="dashboard-center-marketplace">
          <img
            src={
              "https://ik.imagekit.io/6pl7k4a01ha/filter_YCnS7Usoy.png?updatedAt=1639329322918"
            }
            onClick={() => setIsFilterBarOpen(!isFilterBarOpen)}
            className={`${styles.filter} pointer`}
            alt=""
          />
          <div className="MARKETPLACE_CONTENT">
            <TabPan tabIndex={1}>
              <CardComponent type="alns" />
            </TabPan>

            <TabPan tabIndex={2}>
              <CardComponent type="lands" />
            </TabPan>

            <TabPan tabIndex={4}>
              <CardComponent type="items" />
            </TabPan>

            <TabPan tabIndex={5}>
              <CardComponent type="enchants" />
            </TabPan>

            <TabPan tabIndex={6}>
              <CardComponent type="mounts" />
            </TabPan>

            <TabPan tabIndex={7}>
              <CardComponent type="mysteryboxes" />
            </TabPan>
          </div>

          <div
            className={`dashboard-right ${isFilterBarOpen ? "open" : ""}`}
            ref={menuRef}
          >
            <div>
              <img
                src={crossIcon}
                onClick={() => setIsFilterBarOpen(false)}
                className="cross-icon"
                alt=""
              />
              <div className="filter-title mb-20px">
                <p className="fs-20px weight-5 white">Filter (20)</p>
                <button
                  onClick={() =>
                    setCheckboxes({
                      alns: false,
                      legendary: false,
                      rare: false,
                      epic: false,
                      common: false,
                      unCommon: false,
                    })
                  }
                  className="pointer pink fs-14px weight-5"
                >
                  Clear Filter
                </button>
              </div>

              <div className="stats-btns mb-20px">
                <button className="fs-14px white pointer weight-5 active">
                  General
                </button>
                <button className="fs-14px white pointer weight-5">
                  Stats
                </button>
              </div>

              <p className="fs-12px weight-5 light-white-2 mb-10px">SEARCH</p>

              <div className="filter-input mb-30px">
                <input
                  type="text"
                  className="white"
                  value={searchInput}
                  onChange={(event) => setSearchInput(event.target.value)}
                />
                <BiSearch className="pink" />
              </div>

              <div className="mb-30px">
                <p className="fs-12px weight-5 light-white-2 mb-15px">RACE</p>
                <Checkbox
                  onChange={(e) =>
                    setCheckboxes({
                      ...checkboxes,
                      [e.target.name.toLowerCase()]: e.target.checked,
                    })
                  }
                  checked={checkboxes.alns}
                  title="Alns"
                />
              </div>

              <p className="fs-12px weight-5 light-white-2 mb-15px">RARITY</p>
              <div className="filter-checkboxes">
                <Checkbox
                  onChange={(e) =>
                    setCheckboxes({
                      ...checkboxes,
                      [e.target.name.toLowerCase()]: e.target.checked,
                    })
                  }
                  checked={checkboxes.legendary}
                  title="Legendary"
                />
                <Checkbox
                  onChange={(e) =>
                    setCheckboxes({
                      ...checkboxes,
                      [e.target.name.toLowerCase()]: e.target.checked,
                    })
                  }
                  checked={checkboxes.epic}
                  title="Epic"
                />
                <Checkbox
                  onChange={(e) =>
                    setCheckboxes({
                      ...checkboxes,
                      [e.target.name.toLowerCase()]: e.target.checked,
                    })
                  }
                  checked={checkboxes.rare}
                  title="Rare"
                />
                <Checkbox
                  onChange={(e) =>
                    setCheckboxes({
                      ...checkboxes,
                      [e.target.name.toLowerCase()]: e.target.checked,
                    })
                  }
                  checked={checkboxes.common}
                  title="Common"
                />
                <Checkbox
                  onChange={(e) =>
                    setCheckboxes({
                      ...checkboxes,
                      unCommon: e.target.checked,
                    })
                  }
                  checked={checkboxes.unCommon}
                  title="Uncommon"
                />
              </div>
            </div>
          </div>
        </div>
      </Tabs>
    </>
  );
}

export default Collection;
