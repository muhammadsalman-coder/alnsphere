import React, { useState } from "react";
import DataContext from "./DataContext";

function DataContextProvider(props) {
  const [ETHRate, setETHRate] = useState(2400);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTabIndexValue, setActiveTabIndexValue] = useState("Creatures");
  const [cardLayout, setCardLayout] = useState("Columns");
  const [searchInput, setSearchInput] = useState("");
  const [showPopup, setShowPopup] = useState(true);
  const [showTeaserModal, setShowTeaserModal] = useState(false);
  const [showDiscordPopup, setShowDiscordPopup] = useState(false);
  const [checkboxes, setCheckboxes] = useState({
    alns: false,
    legendary: false,
    rare: false,
    epic: false,
    common: false,
    unCommon: false,
  });

  React.useEffect(() => {
    fetch("https://api.coinbase.com/v2/exchange-rates?currency=ETH")
      .then((res) => res.json())
      .then(
        (result) => {
          setETHRate(result.data.rates.USD);
          console.log(result.data.rates.USD);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
        }
      );
  }, []);


  return (
    <DataContext.Provider
      value={{
        ETHRate,
        setETHRate,
        isOpen,
        setIsOpen,
        activeTabIndexValue,
        setActiveTabIndexValue,
        cardLayout,
        setCardLayout,
        searchInput,
        setSearchInput,
        checkboxes,
        setCheckboxes,
        showPopup,
        setShowPopup,
        showDiscordPopup,
        setShowDiscordPopup,
        showTeaserModal,
        setShowTeaserModal,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
