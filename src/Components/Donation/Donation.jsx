import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
const Donation = ({ donation }) => {
  return (
    <div
      className="rounded-md mx-auto flex flex-col md:flex-row  items-center w-fit md:w-full"
      style={{
        backgroundColor: `${donation?.card_bg_color}`,
      }}
    >
      <div>
        <img src={donation?.image} className="w-[220px] h-[200px]" alt="" />
      </div>
      <div className="md:px-6 pb-4 md:pb-0  flex flex-col  items-center md:items-start gap-3">
        <p
          className="w-fit px-3 text-sm font-medium mt-2 rounded-md "
          style={{
            backgroundColor: `${donation?.button_bg_color}`,
            color: `${donation?.text_color}`,
          }}
        >
          {donation?.category}
        </p>
        <h4 className="text-2xl font-semibold text-black ">
          {donation?.title}
        </h4>
        <p
          className="font-semibold"
          style={{
            color: `${donation?.text_color}`,
          }}
        >
          {donation?.price}
        </p>
        <NavLink to={`/cardDescription/${donation?.id}`}>
          <button
            style={{
              backgroundColor: `${donation?.text_color}`,
            }}
            className="py-2 px-4 text-lg font-semibold text-white rounded-md"
          >
            View Details
          </button>
        </NavLink>
      </div>
    </div>
  );
};
Donation.propTypes = {
  donation: PropTypes.object.isRequired,
};
export default Donation;
