import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import "./Dropdown.css";

const Dropdown = ({ title, dropdownItems, defaultValueIndex, setFilter}) => {
  const [show, setShow] = useState(false);
  const menuRef = React.useRef(null);
  const [itemIndex, setItemIndex] = useState(defaultValueIndex);

  React.useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current?.contains(e.target)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div ref={menuRef} className="sale-dropdown pointer">
      <div
        className={`sale-dropdown-btn ${show ? "showing" : ""}`}
        onClick={() => setShow(!show)}
      >
        <p className="fs-14px white weight-5 ">
          {dropdownItems[itemIndex].title}
        </p>
        <FiChevronDown className="white fs-20px" />
      </div>

      <div className={`sale-dropdown-menu ${show ? "drop" : ""}`}>
        {dropdownItems.map((data, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setItemIndex(index);
                setShow(false);
                setFilter(data.title)
              }}
              className={`sale-dropdown-menu-item fs-14px white weight-5 ${
                index === itemIndex ? "active" : ""
              } `}
            >
              {data.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
