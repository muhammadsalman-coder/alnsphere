import React, { useContext } from "react";
import { Tab_Context_Provider } from "./Tabs";

function Tab(props) {
  let { activeTab, setActiveTab } = useContext(Tab_Context_Provider);
  let { children, tabIndex, className, activeClassName, onPress } = props;
  let active = activeTab === tabIndex;
  return (
    <div
      className={active ? className + " " + activeClassName : className}
      // onClick={() => setActiveTab(active ? "" : tabIndex)}
      onClick={() => {
        setActiveTab(tabIndex);

        if (onPress) {
          onPress();
        }
      }}
    >
      {children}
    </div>
  );
}

export default Tab;
