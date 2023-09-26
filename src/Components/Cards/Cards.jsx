import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const Cards = ({ search }) => {
  const cards = useLoaderData();
  const [cardsS, setCardS] = useState([]);
  useEffect(() => {
    // if (!search === "") {
    const searchI = search.toLowerCase();
    console.log(searchI);
    const foundCard = cards.filter((card) =>
      card.category.toLowerCase().includes(searchI)
    );
    setCardS(foundCard);
  }, [cards, search]);

  return (
    <div className="max-w-7xl mx-auto my-28">
      {search ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {cardsS.map((card) => (
            <Card key={card.id} card={card}></Card>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {cards.map((card) => (
            <Card key={card.id} card={card}></Card>
          ))}
        </div>
      )}
    </div>
  );
};
Cards.proptypes = {
  search: PropTypes.string.isRequired,
};
export default Cards;
