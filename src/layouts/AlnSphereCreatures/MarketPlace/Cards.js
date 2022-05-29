import Dropdown from "./Dropdown";
import { BsFillGridFill } from "react-icons/bs";

import { GoListUnordered } from "react-icons/go";
import CreatureCard from "components/Cards/CreatureCard/CreatureCard";
import CardsArrays from "./CardsArrays";
import { useState } from "react";

let CardsArray = [];

const card_types = {
  alns: "Alns",
  lands: "Lands",
  items: "Items",
  mounts: "Mounts",
  mysteryboxes: "Mystery Boxes",
};

const searchCards = (cardsArray, searchValue) => {
  let tempCards = cardsArray;
  if (searchValue !== "" && searchValue) {
    tempCards = tempCards.filter((item) => {
      return item.id.toString().includes(searchValue);
    });
  }
  return tempCards;
};

const Cards = ({
  type,
  ETHRate,
  cardLayout,
  setCardLayout,
  checkboxes,
  searchInput,
}) => {
  const [saleFilter, setSaleFilter] = useState("All");
  const [sortFilter, setSortFilter] = useState("Lowest ID");

  if (type === "alns") {
    CardsArray = CardsArrays.CreaturesCards;
  } else if (type === "lands") {
    CardsArray = CardsArrays.Lands;
  } else if (type === "items") {
    CardsArray = CardsArrays.items;
  } else if (type === "enchants") {
    CardsArray = CardsArrays.enchants;
  } else if (type === "mounts") {
    CardsArray = CardsArrays.mounts;
  } else if (type === "mysteryboxes") {
    CardsArray = CardsArrays.mysteryboxes;
  }

  const displayCard = () => {
    let filteredCards = CardsArray;

    if (saleFilter === "For Sale") {
      filteredCards = filteredCards.filter(
        (card, index) => index < CardsArray.length / 2
      );
    } else if (saleFilter === "Not For Sale") {
      filteredCards = filteredCards.filter(
        (card, index) => index >= CardsArray.length / 2
      );
    }

    if (sortFilter === "Lowest ID") {
      filteredCards = filteredCards.sort((card1, card2) => card1.id - card2.id);
    } else if (sortFilter === "Highest ID") {
      filteredCards = filteredCards.sort((card1, card2) => card2.id - card1.id);
    } else if (sortFilter === "Lowest Price") {
      filteredCards = filteredCards.sort(
        (card1, card2) => card1.price - card2.price
      );
    } else if (sortFilter === "Highest Price") {
      filteredCards = filteredCards.sort(
        (card1, card2) => card2.price - card1.price
      );
    }

    let rarityFilters = ["", "", "", "", ""];
    let checkrarityFilters = false;

    if (checkboxes.common) {
      checkrarityFilters = true;
      rarityFilters[0] = "common";
    }
    if (checkboxes.epic) {
      checkrarityFilters = true;
      rarityFilters[1] = "epic";
    }
    if (checkboxes.legendary) {
      checkrarityFilters = true;
      rarityFilters[2] = "legendary";
    }
    if (checkboxes.rare) {
      checkrarityFilters = true;
      rarityFilters[3] = "rare";
    }
    if (checkboxes.unCommon) {
      checkrarityFilters = true;
      rarityFilters[4] = "uncommon";
    }

    if (checkrarityFilters) {
      filteredCards = filteredCards.filter((card) => {
        return (
          card.rarity === rarityFilters[0] ||
          card.rarity === rarityFilters[1] ||
          card.rarity === rarityFilters[2] ||
          card.rarity === rarityFilters[3] ||
          card.rarity === rarityFilters[4]
        );
      });
    }

    filteredCards = searchCards(filteredCards, searchInput);

    return (
      <div className={`dashboard-center-cards ${cardLayout}`}>
        {filteredCards.map((card) => {
          return (
            <CreatureCard
              id={card.id}
              price={
                Math.round(
                  (parseFloat(card.price) * ETHRate + Number.EPSILON) * 100
                ) / 100
              }
              available={card.price}
              img={card.img}
              idBg={card.idBg}
              layout={cardLayout}
              type="Alns"
              imageClassname={card.imageClassname}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className="marketplace-dashboard-body">
      <div className="dashboard-center-head">
        <div className="dashboard-center-head-left">
          <p className="fs-28px white weight-6">478 {card_types[type]}</p>

          <Dropdown
            dropdownItems={[
              { title: "All" },
              { title: "For Sale" },
              { title: "Not For Sale" },
            ]}
            defaultValueIndex={0}
            title="For Sale"
            setFilter={setSaleFilter}
          />
        </div>
        <div className="dashboard-center-head-right">
          <Dropdown
            dropdownItems={[
              { title: "Lowest ID" },
              { title: "Highest ID" },
              { title: "Lowest Price" },
              { title: "Highest Price" },
              // { title: "Lates" },
            ]}
            defaultValueIndex={0}
            title="Lowest Price"
            setFilter={setSortFilter}
          />

          <div className="layout-toggler">
            <button
              onClick={() => setCardLayout("Columns")}
              className={`pointer ${cardLayout === "Columns" ? "active" : ""}`}
            >
              <BsFillGridFill />
            </button>
            <button
              onClick={() => setCardLayout("Rows")}
              className={`pointer ${cardLayout === "Rows" ? "active" : ""}`}
            >
              <GoListUnordered />
            </button>
          </div>
        </div>
      </div>
      {displayCard()}
    </div>
  );
};

export default Cards;
