import DataContext from "context/DataContext";
import Cards from "layouts/AlnSphereCreatures/MarketPlace/Cards";
import React from "react";

function CardComponent({ type }) {
  const { ETHRate, cardLayout, setCardLayout, searchInput, checkboxes } =
    React.useContext(DataContext);

  return (
    <Cards
      type={type}
      ETHRate={ETHRate}
      cardLayout={cardLayout}
      setCardLayout={setCardLayout}
      checkboxes={checkboxes}
      searchInput={searchInput}
    />
  );
}

export default CardComponent;
