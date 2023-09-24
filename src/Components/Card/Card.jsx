import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const {
    id,
    image,
    title,
    category,
    card_bg_color,
    text_color,
    button_bg_color,
  } = card;
  // console.log(card_bg_color);

  return (
    <Link to={`/cardDescription/${id}`}>
      <div
        className="rounded-md"
        style={{
          backgroundColor: `${card_bg_color}`,
        }}
      >
        <img src={image} alt={`${title} image`} />
        <div className="p-4">
          <p
            className="w-fit px-3 text-sm font-medium mt-2 rounded-md "
            style={{
              backgroundColor: `${button_bg_color}`,
              color: `${text_color}`,
            }}
          >
            {category}
          </p>
          <h4
            className="text-xl font-semibold"
            style={{
              color: `${text_color}`,
            }}
          >
            {title}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default Card;
