import { useLoaderData, useParams } from "react-router-dom";

const CardDescription = () => {
  const cards = useLoaderData();
  const { id } = useParams();
  const card = cards.find((card) => card.id == id);
  console.log(id, cards, card);
  const { price, description, title, image } = card;
  return (
    <div className="max-w-7xl mx-auto">
      <figure className="flex justify-center items-center">
        <img className="w-4/5" src={image} alt="" />
      </figure>
      <button>
        Donate <span>${price}</span>
      </button>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardDescription;
