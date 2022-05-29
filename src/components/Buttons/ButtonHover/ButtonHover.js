import React, { memo } from "react";
import "./ButtonHover.css";

function ButtonHover({ icon, iconSize, padding }) {
  return (
    <div
      className={`button-hover pointer`}
      style={{ fontSize: iconSize, padding }}
    >
      {icon}
    </div>
  );
}

export default memo(ButtonHover);
