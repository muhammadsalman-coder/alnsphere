import React, { useEffect, useState, memo, Suspense } from "react";
import "./Home.css";

import { IKImage } from "imagekitio-react";
import { Link } from "react-router-dom";
import { AiTwotoneShop } from "react-icons/ai";
// import DataContext from "context/DataContext";

const Navbar = React.lazy(() => import("layouts/Home/Navbar/Navbar"));
const Hero = React.lazy(() => import("layouts/Home/Hero/Hero"));
const Represents = React.lazy(() =>
  import("layouts/Home/Represents/Represents")
);
const Gallery = React.lazy(() => import("layouts/Home/Gallery/Gallery"));
const RGBCards = React.lazy(() => import("layouts/Home/RGBCards/RGBCards"));
const PlayToEarn = React.lazy(() =>
  import("layouts/Home/PlayToEarn/PlayToEarn")
);
const Aliens = React.lazy(() => import("layouts/Home/Aliens/Aliens"));
const Roadmap = React.lazy(() => import("layouts/Home/Roadmap/Roadmap"));
const Team = React.lazy(() => import("layouts/Home/Team/Team"));
const Faq = React.lazy(() => import("layouts/Home/Faq/Faq"));
const NFT = React.lazy(() => import("layouts/Home/NFT/NFT"));
const Footer = React.lazy(() => import("layouts/Home/Footer/Footer"));
const Teaser = React.lazy(() => import("layouts/Home/Teaser/Teaser"));
// const DiscordPopup = React.lazy(() => import("layouts/Home/DiscordPopup/DiscordPopup"));

function Home() {
  const [load, setLoad] = useState(true);
  // const {showDiscordPopup, setShowDiscordPopup} =
  //   useContext(DataContext);

  useEffect(() => {
    let clearLoading = setInterval(() => {
      setLoad(false);
    }, 5000);

    return () => {
      clearInterval(clearLoading);
    };
  }, []);

  return (
    <div>
      {/* {showDiscordPopup ? <DiscordPopup setShowPopup={setShowDiscordPopup}/> : null} */}
      {load ? (
        <div id="loading">
          <IKImage
            urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
            path="/loadingscreen.gif"
            loading="lazy"
            lqip={{ active: true }}
          />

          {/* <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div> */}
        </div>
      ) : null}

      <Link
        to="/marketplace/collection"
        target="_blank"
        className="dashboard-call-center"
      >
        <AiTwotoneShop />
      </Link>

      <Suspense fallback={<div />}>
        <Navbar />{" "}
      </Suspense>
      <Suspense fallback={<div />}>
        <Hero />{" "}
      </Suspense>
      <Suspense fallback={<div />}>
        <Represents />{" "}
      </Suspense>
      <Suspense fallback={<div />}>
        <Teaser />{" "}
      </Suspense>
      <Suspense fallback={<div />}>
        <Gallery />{" "}
      </Suspense>

      <div className="play-gallery-bg">
        <Suspense fallback={<div />}>
          <PlayToEarn />
        </Suspense>
        <Suspense fallback={<div />}>
          <RGBCards />
        </Suspense>
        <Suspense fallback={<div />}>
          <Aliens />
        </Suspense>
      </div>
      <Suspense fallback={<div />}>
        <Roadmap />
      </Suspense>
      <Suspense fallback={<div />}>
        <Team />
      </Suspense>
      <Suspense fallback={<div />}>
        <Faq />
      </Suspense>
      <Suspense fallback={<div />}>
        <NFT />
      </Suspense>
      <Suspense fallback={<div />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default memo(Home);
