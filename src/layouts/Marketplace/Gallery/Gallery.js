import React, { useState } from "react";
import mergeImages from "merge-images";

import styles from "./Gallery.module.css";

import baseCharacter from "assets/images/gallery-assets-2/base-character.png";
import crossIcon from "assets/images/cross-icon.png";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import Accordion from "./Accordion";

// BACKGROUNDS
import base_background from "assets/images/gallery-assets-2/backgrounds/Basic/base-background.png";
// BASIC
import base_background_11 from "assets/images/gallery-assets-2/backgrounds/Basic/11.png";
import base_background_12 from "assets/images/gallery-assets-2/backgrounds/Basic/12.png";
import base_background_13 from "assets/images/gallery-assets-2/backgrounds/Basic/13.png";

// BACK ITEMS

import Golden_longsword from "assets/images/gallery-assets-2/Back-Items/Golden_longsword.png";
import red_wings from "assets/images/gallery-assets-2/Back-Items/red_wings.png";
import soldier_rocket_launcher from "assets/images/gallery-assets-2/Back-Items/soldier_rocket_launcher.png";

// CLOTHES
import akatsukirobe from "assets/images/gallery-assets-2/Items-Clothes/akatsuki-robe.png";
import assasinscreedroguejacket from "assets/images/gallery-assets-2/Items-Clothes/assasins-creed-rogue-jacket.png";
import hawaiishirtwithholes from "assets/images/gallery-assets-2/Items-Clothes/hawaii-shirt-with-holes.png";

// EARS
import cottonSwab from "assets/images/gallery-assets-2/Items-Ears/cotton-swab.png";
import earPlug from "assets/images/gallery-assets-2/Items-Ears/ear-plug.png";
import EthereumSymbol from "assets/images/gallery-assets-2/Items-Ears/Ethereum-Symbol.png";

// HEAD
import head1 from "assets/images/gallery-assets-2/Items-Head/1.png";
import head2 from "assets/images/gallery-assets-2/Items-Head/2.png";
import head3 from "assets/images/gallery-assets-2/Items-Head/3.png";

// EYES
// import default_eyes from "assets/images/gallery-assets-2/Items-Eyes/default-eyes.png";
import eye2 from "assets/images/gallery-assets-2/Items-Eyes/2.png";
import eye4 from "assets/images/gallery-assets-2/Items-Eyes/4.png";
import eye6 from "assets/images/gallery-assets-2/Items-Eyes/6.png";

// MOUHT
import defaultMouth from "assets/images/gallery-assets-2/Items-Mouth/default-mouth.png";
import mouth4 from "assets/images/gallery-assets-2/Items-Mouth/4.png";
import mouth6 from "assets/images/gallery-assets-2/Items-Mouth/6.png";
import mouth9 from "assets/images/gallery-assets-2/Items-Mouth/9.png";

// FUR
import default_fur from "assets/images/gallery-assets-2/Fur-Item/default-fur.png";
import fur1 from "assets/images/gallery-assets-2/Fur-Item/1.png";
import fur2 from "assets/images/gallery-assets-2/Fur-Item/2.png";
import fur3 from "assets/images/gallery-assets-2/Fur-Item/3.png";

// NOSE
import nose from "assets/images/gallery-assets-2/nose.png";

//ANTENNAS
import base_antennas from "assets/images/gallery-assets-2/Items-Antennas/antenna_base.png";
import diamond_antennas from "assets/images/gallery-assets-2/Items-Antennas/diamond_antennas.png";
import brown_antennas from "assets/images/gallery-assets-2/Items-Antennas/brown_antennas.png";
import cyborg_antennas from "assets/images/gallery-assets-2/Items-Antennas/cyborg_antennas.png";

function Gallery() {
  const [image, setImage] = useState(baseCharacter);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [items, setItems] = useState({
    background: base_background,
    backItem: "",
    furItem: default_fur,
    clothe: "",
    ears: "",
    eyes: "",
    head: "",
    antenna: base_antennas,
    mouth: defaultMouth,
    nose: nose,
  });

  const sideBarRef = OutsideClickDetector(() => {
    setIsSidebarOpen(false);
  });

  const mergeAndDownloadImage = () => {
    const imagesarray = [];
    for (let i in items) {
      if (items[i] !== "") {
        imagesarray.push(items[i]);
      }
    }

    mergeImages(imagesarray)
      .then((b64) => {
        document.getElementById("mergedimagedownloadtag").href = b64;
        document.getElementById("mergedimagedownloadtag").click();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const resetCharacter = () => {
    setImage(baseCharacter);
    setItems({
      background: base_background,
      backItem: "",
      furItem: default_fur,
      clothe: "",
      ears: "",
      eyes: "",
      head: "",
      antenna: base_antennas,
      mouth: defaultMouth,
      nose: nose,
    });
  };

  return (
    <div className={styles.galleryWrapper}>
      <div className={styles.gallery}>
        <div className={styles.gallery_left}>
          <div className="MARKETPLACE_CONTENT">
            <div className={styles.galleryImg}>
              {items.furItem && (
                <img
                  src={items.furItem}
                  className={styles.base_character}
                  alt=""
                />
              )}

              <img
                src={items.background}
                className={styles.backgrounds}
                alt=""
              />

              {items.nose && (
                <img src={items.nose} className={styles.nose} alt="" />
              )}
              {items.backItem && (
                <img src={items.backItem} className={styles.backItems} alt="" />
              )}
              {items.clothe && (
                <img src={items.clothe} className={styles.clothe} alt="" />
              )}
              {items.ears && (
                <img src={items.ears} className={styles.ears} alt="" />
              )}
              {items.head && (
                <img src={items.head} className={styles.head} alt="" />
              )}
              {items.antenna && (
                <img src={items.antenna} className={styles.antenna} alt="" />
              )}
              {items.eyes && (
                <img src={items.eyes} className={styles.eyes} alt="" />
              )}
              {items.mouth && (
                <img src={items.mouth} className={styles.mouth} alt="" />
              )}

              {/* <img
                src={Bandanawhite}
                className={styles.galleryImg_main_asset}
                alt=""
              /> */}
            </div>

            <div className={styles.downloadImage}>
              {/* <UrlImageDownloader imageUrl={image} /> */}
              <a
                href={image}
                download={true}
                id="mergedimagedownloadtag"
                style={{ display: "none" }}
              >
                Download
              </a>
              {/* <img id = "mergedimgsrc" width = "300px" src = "" alt = 'mergedimage'  /> */}
              <button
                className={styles.download_btn}
                onClick={mergeAndDownloadImage}
              >
                Download
              </button>

              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className={styles.filters_btn}
              >
                Filters
              </button>
            </div>
          </div>
        </div>
        <div
          ref={sideBarRef}
          className={`${styles.gallery_right} ${
            isSidebarOpen ? styles.open : ""
          }`}
        >
          <img
            src={crossIcon}
            className={`${styles.crossIcon} invert`}
            alt=""
            onClick={() => setIsSidebarOpen(false)}
          />

          <h1 className="fs-28px white weight-6 mb-20px">Gallery</h1>
          <div className={`${styles.galleryAccordions} mb-30px`}>
            <Accordion
              type={items.background}
              onClick={(data) => {
                setItems({
                  ...items,
                  background: data.content.img,
                });
              }}
              bodyContent={[
                { title: "1", content: { img: base_background_11 } },
                { title: "2", content: { img: base_background_12 } },
                { title: "3", content: { img: base_background_13 } },
              ]}
              title="Background"
            />
            <Accordion
              title="Back Items"
              type={items.backItem}
              bodyContent={[
                {
                  title: "1",
                  content: { img: Golden_longsword },
                },
                { title: "2", content: { img: red_wings } },
                {
                  title: "3",
                  content: { img: soldier_rocket_launcher },
                },
              ]}
              onClick={(data) => {
                setItems({
                  ...items,
                  backItem: data.content.img,
                });
              }}
            />
            <Accordion
              title="Clothes"
              type={items.clothe}
              bodyContent={[
                { title: "1", content: { img: akatsukirobe } },
                { title: "2", content: { img: assasinscreedroguejacket } },
                { title: "3", content: { img: hawaiishirtwithholes } },
              ]}
              onClick={(data) => {
                setItems({
                  ...items,
                  clothe: data.content.img,
                });
              }}
            />
            <Accordion
              title="Ears"
              type={items.ears}
              bodyContent={[
                { title: "1", content: { img: cottonSwab } },
                { title: "2", content: { img: earPlug } },
                { title: "3", content: { img: EthereumSymbol } },
              ]}
              onClick={(data) => {
                setItems({
                  ...items,
                  ears: data.content.img,
                });
              }}
            />
            <Accordion
              title="Head Items"
              type={items.head}
              bodyContent={[
                { title: "1", content: { img: head1 } },
                { title: "2", content: { img: head2 } },
                { title: "3", content: { img: head3 } },
              ]}
              onClick={(data) => {
                setItems({
                  ...items,
                  head: data.content.img,
                });
              }}
            />
            <Accordion
              title="Eyes"
              type={items.eyes}
              bodyContent={[
                { title: "1", content: { img: eye2 } },
                { title: "2", content: { img: eye4 } },
                { title: "3", content: { img: eye6 } },
              ]}
              onClick={(data) => {
                setItems({
                  ...items,
                  eyes: data.content.img,
                });
              }}
            />
            <Accordion
              title="Mouths"
              type={items.mouth}
              bodyContent={[
                { title: "1", content: { img: mouth4 } },
                { title: "2", content: { img: mouth6 } },
                { title: "3", content: { img: mouth9 } },
              ]}
              onClick={(data) => {
                setItems({
                  ...items,
                  mouth: data.content.img,
                });
              }}
            />
            <Accordion
              title="Fur"
              type={items.furItem}
              bodyContent={[
                {
                  title: "1",
                  content: { img: fur1, antenna: cyborg_antennas },
                },
                {
                  title: "2",
                  content: { img: fur2, antenna: diamond_antennas },
                },
                { title: "3", content: { img: fur3, antenna: brown_antennas } },
              ]}
              onClick={(data) => {
                setItems({
                  ...items,
                  furItem: data.content.img,
                  antenna: data.content.antenna,
                });
              }}
            />
          </div>

          <div className={styles.gallery_right_btns}>
            <button
              className="fs-16px weight-5 uppercase text-center"
              onClick={resetCharacter}
            >
              RESET FILTERS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
