import React, { useContext } from "react";
import { Tab_Context_Provider } from "./Tabs";

function Tab_Pan(props) {
  let { activeTab } = useContext(Tab_Context_Provider);
  let { children, tabIndex, className } = props;

  if (activeTab === tabIndex) {
    return <div className={`tabs-tab-pan ${className}`}>{children}</div>;
  } else {
    return null;
  }
}

export default Tab_Pan;
