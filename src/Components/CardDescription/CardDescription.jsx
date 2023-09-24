import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CardDescription = () => {
  const cards = useLoaderData();
  const { id } = useParams();
  const card = cards.find((card) => card.id == id);
  console.log(id, cards, card);
  const { price, description, title, image, text_color } = card;

  const handleDonatebtn = () => {
    toast.success("Congratulation,You have successfully Donated");
  };
  return (
    <>
      <div className="max-w-7xl mx-auto my-20">
        <section>
          <div className="relative">
            <figure className="">
              <img className="w-full h-3/4 rounded-lg" src={image} alt="" />
            </figure>
            <button
              onClick={handleDonatebtn}
              className="text-white px-7 py-4 rounded text-xl font-semibold absolute bottom-7 left-8"
              style={{
                backgroundColor: `${text_color}`,
              }}
            >
              Donate <span>${price}</span>
            </button>
          </div>
          <h3 className="text-4xl font-bold mb-6 mt-14">{title}</h3>
          <p className="font-normal">{description}</p>
        </section>
      </div>
      <ToastContainer />
    </>
  );
};

export default CardDescription;
