import React, { memo } from "react";
import "./Title.css";

function Title({ title, className }) {
  return <p className={`Title-Text ${className}`}>{title}</p>;
}

export default memo(Title);
