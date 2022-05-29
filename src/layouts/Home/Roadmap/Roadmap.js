import TriShapeButton from "components/Buttons/TriShapeButton/TriShapeButton";
import React, { memo } from "react";
import "./Roadmap.css";
import { AiFillCaretDown } from "react-icons/ai";
import { roadmapData } from "./roadmapData";
import Title from "components/Title/Title";
import RoadmapCard from "./RoadmapCard";

function Roadmap() {
  const [dataLength, setDatalength] = React.useState(6);
  const [toShow, setToShow] = React.useState("Roadmap Launch");

  return (
    <div className="roadmap-container py-100px">
      <div className="container-wrapper">
        <Title
          title="Roadmap"
          className={"text-center  fs-46px weight-7 uppercase mb-50px"}
        />

        <div className="roadmap-btns mb-70px">
          <div onClick={() => setToShow("Roadmap Launch")}>
            <TriShapeButton
              title="Roadmap Launch"
              normal={toShow === "Roadmap Launch" ? false : true}
            />
          </div>
          <div onClick={() => setToShow("Roadmap Growth")}>
            <TriShapeButton
              title="Roadmap Growth"
              normal={toShow === "Roadmap Growth" ? false : true}
            />
          </div>
        </div>

        {toShow === "Roadmap Launch" ? (
          <>
            <div className="roadmap-cards ">
              {roadmapData.slice(0, dataLength).map((data, index) => {
                return (
                  <RoadmapCard
                    title={`${data.title} ${index + 1}`}
                    cardIndex = {index}
                    disc={data.discContent.map((text, index) => (
                      <p className="fs-18px weight-5 white mb-5px" key={index}>
                        {text}
                      </p>
                    ))}
                  />
                );
              })}
            </div>

            <div className="roadmap-show-more">
              {dataLength < 8 ? (
                <button
                  className="fs-22px white weight-5 pointer"
                  onClick={() => setDatalength(12)}
                >
                  <span className="roadmap-show-more-icon">
                    <AiFillCaretDown />
                  </span>
                  Show more
                </button>
              ) : (
                ""
              )}
            </div>
          </>
        ) : (
          <div className="roadmap-cards ">
            <RoadmapCard
              title={``}
              disc={
                <p className="fs-18px weight-5 white mb-5px">
                  Extension of Roadmap with community feedback and experience
                </p>
              }
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(Roadmap);
