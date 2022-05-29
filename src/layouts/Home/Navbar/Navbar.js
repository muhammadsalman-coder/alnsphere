import ButtonHover from "components/Buttons/ButtonHover/ButtonHover";
import React, { memo } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

import { FaTwitter } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
// import { AiTwotoneShop } from "react-icons/ai";
import { IoNewspaperSharp } from "react-icons/io5";
// import DataContext from "context/DataContext";

// const TriShapeButton = React.lazy(() =>
//   import("components/Buttons/TriShapeButton/TriShapeButton")
// );
const IKImage = React.lazy(() =>
  import("imagekitio-react").then((module) => ({ default: module.IKImage }))
);

function Navbar() {
  // const {setShowDiscordPopup} = useContext(DataContext);
  // const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handler = () => {
  //     const scrollTop = window.scrollY;

  //     if (scrollTop > 100) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handler);

  //   return () => {
  //     window.removeEventListener("scroll", handler);
  //   };
  // });

  return (
    // <div
    //   className={`${styles.navbarWrapper} ${
    //     scrolled ? styles.scrolled : ""
    //   } bg-purple-2`}
    // >
    <div className={`${styles.navbarWrapper} ${styles.scrolled} bg-purple-2`}>
      <div className="container-wrapper">
        <div className={styles.navbar}>
          <div className={styles.navbarLeft}>
            <a
              href="https://twitter.com/AlnSphere"
              target="_blank"
              rel="noreferrer"
            >
              <ButtonHover iconSize="1.2rem" icon={<FaTwitter />} />
            </a>
            <a
              href="https://discord.com/invite/alnsphere"
              target="_blank"
              rel="noreferrer"
            >
            {/* <button onClick={() => setShowDiscordPopup(true)}> */}
              <ButtonHover iconSize="1.2rem" icon={<BsDiscord />} />
            {/* </button> */}
            </a>
            <a
              href={
                "https://ik.imagekit.io/6pl7k4a01ha/Whitepaper_jLPK3sQMpHh.pdf?updatedAt=1639460659749"
              }
              target="_blank"
              rel="noreferrer"
            >
              <ButtonHover iconSize="1.2rem" icon={<IoNewspaperSharp />} />
            </a>
          </div>
          <div className={styles.navbarCenter}>
            <Link to="/">
              <IKImage
                urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
                path="Logo3Small_KOc5W2vs8.png"
                loading="lazy"
                lqip={{ active: true }}
              />
              {/* <img src={brandLogo} alt="" /> */}
            </Link>
          </div>
          <div className={styles.navbarRight}>
            {/* <Link to="/marketplace" target="_blank">
              <ButtonHover iconSize="1.2rem" icon={<AiTwotoneShop />} />
            </Link> */}
            {/* <TriShapeButton title="Connect Wallet" /> */}
            {/* <button className={`${styles.connect_wallet_btn} pointer fs-16px white weight-5 bg-purple-gradient ${styles.hover_gradient_effect}`}>
              Connect Wallet
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Navbar);
