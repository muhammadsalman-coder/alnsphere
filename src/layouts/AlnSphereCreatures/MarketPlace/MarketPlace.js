import React, { useContext } from "react";
import "./MarketPlace.css";
import { BsFillGrid1X2Fill, BsShop, BsStack } from "react-icons/bs";
import { FaBoxes } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { RiGalleryFill } from "react-icons/ri";
import crossIcon from "assets/images/cross-icon.png";
import { Outlet } from "react-router-dom";
import { AlnSphereCreaturesContext_Provider } from "pages/AlnSphereCreatures/AlnSphereCreaturesContext";
import SidebarTab from "./SidebarTab";
import OutsideClickDetector from "hooks/OutsideClickDetector";

function MarketPlace() {
  // const [setETHRate] = useState(3797);

  const { isSidebarOpen, setIsSidebarOpen } = useContext(
    AlnSphereCreaturesContext_Provider
  );

  // React.useEffect(() => {
  //   fetch("https://api.coinbase.com/v2/exchange-rates?currency=ETH")
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         setETHRate(result.data.rates.USD);
  //         console.log(result.data.rates.USD);
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  // }, []);

  let menuRef = OutsideClickDetector(() => {
    // setIsFilterBarOpen(false);
    setIsSidebarOpen(false);
  });

  return (
    <div className="dashboard bg-purple-2">
      <div
        ref={menuRef}
        className={`dashboard-left ${isSidebarOpen ? "open" : ""}`}
      >
        <div>
          <img
            src={crossIcon}
            onClick={() => setIsSidebarOpen(false)}
            className="cross-icon"
            alt=""
          />
          <SidebarTab
            onClick={() => setIsSidebarOpen(false)}
            Icon={<BsFillGrid1X2Fill />}
            title="Dashboard"
            to="dashboard"
          />
          <SidebarTab
            onClick={() => setIsSidebarOpen(false)}
            Icon={<BsShop />}
            title="Marketplace"
            active={true}
            to="collection"
          />
          <SidebarTab
            onClick={() => setIsSidebarOpen(false)}
            Icon={<FaBoxes />}
            title="Inventory"
            to="inventory"
          />
          <SidebarTab
            onClick={() => setIsSidebarOpen(false)}
            Icon={<BsStack />}
            title="Staking "
            to="staking"
          />
          <SidebarTab
            onClick={() => setIsSidebarOpen(false)}
            Icon={<MdFavorite />}
            title="Favorite"
            to="favorite"
          />
          <SidebarTab
            onClick={() => setIsSidebarOpen(false)}
            Icon={<RiGalleryFill />}
            title="Gallery"
            to="gallery"
          />
        </div>
      </div>

      <div className="dashboard-center bg-purple">
        <Outlet />
      </div>
    </div>
  );
}

export default MarketPlace;
