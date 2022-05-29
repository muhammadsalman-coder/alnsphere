import React, { useState, createContext } from "react";

export let AlnSphereCreaturesContext_Provider = createContext();

function AlnSphereCreaturesContext(props) {
  const { children } = props;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFilterBarOpen, setIsFilterBarOpen] = useState(false);
  return (
    <AlnSphereCreaturesContext_Provider.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        isFilterBarOpen,
        setIsFilterBarOpen,
      }}
    >
      {children}
    </AlnSphereCreaturesContext_Provider.Provider>
  );
}

export default AlnSphereCreaturesContext;
