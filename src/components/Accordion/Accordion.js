import React from "react";
import "./Accordion.css";
import { AiFillCaretDown } from "react-icons/ai";

function Accordion({ title, content }) {
  const [active, setActive] = React.useState(false);
  const accordionBodyRef = React.useRef(null);

  const handler = () => {
    if (accordionBodyRef.current.clientHeight === 0) {
      accordionBodyRef.current.style.height =
        accordionBodyRef.current.scrollHeight + "px";
      console.log(accordionBodyRef.current.scrollHeight);
      setActive(true);
    } else {
      accordionBodyRef.current.style.height = 0;
      setActive(false);
    }
  };
  return (
    <div className="faq-accordion">
      <div className="faq-accordion-button" onClick={handler}>
        <p className="fs-20px white weight-7">{title}</p>

        <div>
          <button className={active ? "active" : ""}>
            <AiFillCaretDown />
          </button>
        </div>
      </div>
      <div className="faq-accordion-body" ref={accordionBodyRef}>
        <div className="faq-accordion-body-content">{content}</div>
      </div>
    </div>
  );
}

export default Accordion;
