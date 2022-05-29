import React, { useContext } from "react";
import "./Navbar.css";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AlnSphereCreaturesContext_Provider } from "pages/AlnSphereCreatures/AlnSphereCreaturesContext";
import { IKImage } from "imagekitio-react";

function Navbar() {
  const {
    isSidebarOpen,
    setIsSidebarOpen,
    
  } = useContext(AlnSphereCreaturesContext_Provider);
  return (
    <div className="navbar bg-purple-3">
      <div className="nav-left">
        <Link to="/">
          <IKImage
            urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
            path="ALIENSPHERE-head_aUSB3rrYqu0.png"
            loading="lazy"
            lqip={{ active: true }}
            style={{ width: "38px" }}
          />
          <p className="white weight-7 fs-20px">AlnSphere</p>
        </Link>
        {/* <div className="grid-dropdown pointer">
          <BsFillGridFill className="white" />
          <IoMdArrowDropdown className="white" />
        </div> */}
      </div>
      <div className="nav-right">
        <img
          src={
            "https://ik.imagekit.io/6pl7k4a01ha/hamburgerIcon_LMC2npahf.png?updatedAt=1639329322820"
          }
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="hamburger"
          alt=""
        />

        <button className="nav-logout-btn pointer fs-16px white weight-5 bg-purple-gradient">
          <FiLogIn /> Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;
