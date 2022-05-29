import React from "react";
import styles from "./Accordion.module.css";
import { BiChevronDown } from "react-icons/bi";

const Accordion = ({ title, bodyContent, type, onClick, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSelectedInsideParent, setIsSelectedInsideParent] =
    React.useState(false);
  const bodyRef = React.useRef(null);
  const componentRef = React.useRef();
  React.useEffect(() => {
    if (false) {
      setIsSelectedInsideParent(false);
    }
  }, []);

  const handler = () => {
    if (bodyRef.current.clientHeight === 0) {
      bodyRef.current.style.height = bodyRef.current.scrollHeight + "px";
      setIsOpen(true);
    } else {
      bodyRef.current.style.height = 0;
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    function handleClick(e) {
      if (componentRef && componentRef.current) {
        const ref = componentRef.current;
        if (!ref.contains(e.target)) {
          // put your action here
          bodyRef.current.style.height = 0;
          setIsOpen(false);
        }
      }
    }
  }, []);

  return (
    <div
      className={`${styles.accordion} ${isOpen ? styles.open : ""} ${
        isSelectedInsideParent ? styles.active : ""
      }`}
      ref={componentRef}
    >
      <button
        onClick={handler}
        className={`${styles.accordion_btn}  pointer fs-18px white weight-5`}
      >
        {title}
        <span className="white">
          <BiChevronDown size={30} />
        </span>
      </button>
      <main ref={bodyRef}>
        {children ? (
          children
        ) : (
          <div className={styles.accordionBody}>
            {bodyContent &&
              bodyContent.map((data, index) => (
                <button
                  key={index}
                  className={`fs-16px white weight-4 ${
                    type === data.content.img ? styles.active : ""
                  } `}
                  onClick={() => onClick(data)}
                >
                  {data.title}
                </button>
              ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Accordion;
