import React, { memo } from "react";
import "./TriShapeButton.css";

function TriShapeButton({ title, icon = false, normal = false, style }) {
  return (
    <button className={`tri-button-wrapper pointer ${normal ? "normal" : "notnormal"}`}>
      <div className="tri-button-border"></div>
      <div className="tri-button" style={style}>
        {icon}
        <p className="fs-16px white weight-5">{title}</p>
      </div>
    </button>
  );
}

export default memo(TriShapeButton);
