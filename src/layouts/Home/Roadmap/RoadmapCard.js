import React, { memo } from "react";
import { Fade } from "react-reveal";

const RoadmapCard = ({ title, disc, cardIndex }) => {
  return (
    <div className="roadmap-card-wrapper" id = {`roadmap-card${cardIndex}`}>
      <div className="roadmap-card-line">
        <div className="roadmap-card-line-box"></div>
      </div>
      <Fade right distance="200px">
        <div className="roadmap-card">
          <div className="roadmap-card-body">
            <p className="pink uppercase fs-28px weight-7 mb-10px">{title}</p>

            {disc}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default memo(RoadmapCard);
