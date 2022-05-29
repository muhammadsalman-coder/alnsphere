import React, { useRef,  useEffect, memo, useContext } from "react";
import { Link } from 'react-router-dom';
// import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import "./ImageFadeMaterial";
// import { TextureLoader, MathUtils } from "three";
import {presets, queueWrite} from 'glitched-writer';

import "./hero.styles.scss";

// import { BsDiscord } from "react-icons/bs";
import DataContext from "context/DataContext";

const IKImage = React.lazy(() =>
  import("imagekitio-react").then((module) => ({ default: module.IKImage }))
);
const TriShapeButton = React.lazy(() =>
  import("components/Buttons/TriShapeButton/TriShapeButton")
);

// function FadingImage() {
//   const ref = useRef();
//   const [texture1, texture2, dispTexture] = useLoader(TextureLoader, [
//     "https://ik.imagekit.io/6pl7k4a01ha/hero/bg-min_58DdIoI4y.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642866642291",
//     "https://ik.imagekit.io/6pl7k4a01ha/hero/Img2New_MKvgjSpyD.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642823953005",
//     "https://ik.imagekit.io/6pl7k4a01ha/water-img_oYGDv1Jx1.jpg?updatedAt=1639157953051",
//   ]);
//   const [hovered, setHover] = useState(false);

//   useFrame(
//     () =>
//       (ref.current.dispFactor = MathUtils.lerp(
//         ref.current.dispFactor,
//         !!hovered,
//         0.1
//       ))
//   );

//   useEffect(() => {
//     const handleScroll = (e) => {
//       if (window.pageYOffset > 40) {
//         setHover(true);
//       } else if (
//         window.innerHeight + window.pageYOffset ===
//         window.innerHeight
//       ) {
//         setHover(false);
//       }
//     };

//     document.addEventListener("mouseup", handleScroll);
//     document.addEventListener("mousedown", handleScroll);

//     document.addEventListener("scroll", handleScroll);

//     return () => {
//       document.removeEventListener("scroll", handleScroll);
//       document.removeEventListener("mouseup", handleScroll);
//       document.removeEventListener("mousedown", handleScroll);
//     };
//   });

//   return (
//     <mesh>
//       <planeGeometry args={[1720, 1000]} />
//       <imageFadeMaterial
//         ref={ref}
//         tex={texture1}
//         tex2={texture2}
//         disp={dispTexture}
//       />
//     </mesh>
//   );
// }

function HeroFadeImg() {
  let parallax_element = useRef(null);
  const {setShowTeaserModal} = useContext(DataContext);

  useEffect(() => {
    function parallax(event) {
      this.querySelectorAll(".layer").forEach((shift) => {
        const position = shift.getAttribute("data-depth");
        const x = (window.innerWidth - event.pageX * position) / 90;
        const y = (window.innerHeight - event.pageY * position) / 90;
        shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    }

    document.addEventListener("mousemove", parallax);
    
    // code to run glicted writer
    const phrases = [
      "Welcome",
      "to",
      "Alnsphere",
    ];
    
    queueWrite(
      phrases,
      ".glitched_text",
      {
        ...presets.neo,
        letterize: false
      },
      1000,
      true
    );

    return () => {
      document.removeEventListener("mousemove", parallax);
    };
  });

  // useEffect(() => {
  //   const handleScroll = (e) => {
  //     if (window.pageYOffset > 40) {
  //       if (parallax_element.current) {
  //         parallax_element.current.style.display = "none";
  //       }
  //       // typewriterRef.current.style.display = "block";
  //     } else if (
  //       window.innerHeight + window.pageYOffset ===
  //       window.innerHeight
  //     ) {
  //       if (parallax_element.current) {
  //         parallax_element.current.style.display = "block";
  //       }
  //       // typewriterRef.current.style.display = "none";
  //     }
  //   };

  //   document.addEventListener("mouseup", handleScroll);
  //   document.addEventListener("mousedown", handleScroll);

  //   document.addEventListener("scroll", handleScroll);

  //   return () => {
  //     document.removeEventListener("scroll", handleScroll);
  //     document.removeEventListener("mouseup", handleScroll);
  //     document.removeEventListener("mousedown", handleScroll);
  //   };
  // });


  const flameAnimation = () => {
    let items = [];
    for(let i = 0; i < 30; i++){
      items.push(<div className="flame-anim"></div>)
    }
    return items;
  }

  const circleParticles = () => {
    let items = [];
    for (let i = 0; i < 100; i++){
      items.push(
        <div class="circle-container">
          <div class="circle"></div>
        </div>
      )
    }
    return items;
  }

  return (
    <section className="hero">
      <div className="Hero-btn">
        {/* <a href="https://discord.com/invite/alnsphere" target="_blank" rel="noreferrer">
          <TriShapeButton title="Join Discord"
            icon={
              <span className="white icon-button" style={{ fontSize: "18px" }}>
                <BsDiscord />
              </span>
            }
          />
        </a> */}
        <Link to="/mint" target="_blank" rel="noreferrer">
          <TriShapeButton title="Mint" />
        </Link>

      </div>
      {/* <div className="canvas-container">
        <Canvas
          camera={{
            position: [0, 0, 182],
            fov: 140,
            aspect: 1600 / 900,
            near: 0.1,
          }}
        >
          <Suspense fallback={null}>
            <FadingImage />
          </Suspense>
        </Canvas>
      </div> */}

      <div className="parallax-holder" ref={parallax_element}>
        <div className = 'particles-anim-container'>{circleParticles()}</div>
        <div className="parallax-scene" id="parallax_scene">
          <div data-depth="5" className="layer shot-character">
            <IKImage
              urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
              path="evil-eyes__LH1citv3.png"
              loading="lazy"
              lqip={{ active: true }}
            />
            {/* <img style={{ opacity: 0.7 }} src={evilEyes} alt="" /> */}
          </div>
          <div data-depth="2" className="layer base-character">
            <div className="flame-anim-container">
              {flameAnimation()}
            </div>
            <IKImage
              urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
              path="/hero/MainCharacter-min_taiI61WN8.png"
              loading="lazy"
              lqip={{ active: true }}
            />
            {/* <img src={mainCharacter} alt="" /> */}
          </div>
          <div data-depth="5" className="layer dragon-image">
            <div className="dragon-glow"></div>
            <IKImage
              urlEndpoint={"https://ik.imagekit.io/6pl7k4a01ha"}
              path="/hero/Dragon-min_uXGWJfEYa.png"
              loading="lazy"
              lqip={{ active: true }}
            />
            {/* <img height={820} src={dragon} alt="" /> */}
          </div>
        </div>
      </div>

      <div className="mobile-parallax-holder">
        <div className="mobile_hero">
          <h1 id = 'glitch_text' className="glitched_text mobile-header-text">Alnsphere</h1>
          <button className='hero_open_teaser_modal_btn' onClick = {() => setShowTeaserModal(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"/>
            </svg>
          </button>
        </div>
        {/* <div className="glitch_image">
          <h1 id = 'glitch_text' className="glitched_text">Alnsphere</h1>
        </div> */}
      </div>
    </section>
  );
}

export default memo(HeroFadeImg);
