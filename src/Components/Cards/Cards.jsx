import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const Cards = () => {
  const cards = useLoaderData();
  // console.log(cards);
  return (
    <div className="max-w-7xl mx-auto my-28">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {cards.map((card) => (
          <Card key={card.id} card={card}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
