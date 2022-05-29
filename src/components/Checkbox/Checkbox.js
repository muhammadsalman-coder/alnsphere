import React from "react";
import "./Checkbox.css";

function Checkbox(props) {
  const { onChange, checked } = props;
  return (
    <div className={props.rounded ? "checkbox rounded" : "checkbox"}>
      <div>
        <input
          onChange={onChange}
          type={props.radio ? "radio" : "checkbox"}
          name={props.title}
          id={props.title}
          checked={checked}
        />
      </div>
      <label className="fs-13px white weight-5 pointer" htmlFor={props.title}>
        {props.title}
      </label>
    </div>
  );
}

export default Checkbox;
