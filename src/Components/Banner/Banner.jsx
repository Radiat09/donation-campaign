import PropTypes from "prop-types";
const Banner = ({ getInput }) => {
  const handleSeacrhBtn = (e) => {
    e.preventDefault();
    const searchinput = e.target.searchInput.value;
    getInput(searchinput);
    e.target.searchInput.value = "";
  };
  // console.log(search);
  return (
    <banner>
      <div
        className="hero min-h-screen mb-24 "
        style={{
          backgroundImage: 'url("/public/bgImg.jpg")',
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="form-control">
            <h2 className="font-bold text-5xl">
              I Grow By Helping People In Need
            </h2>
            <form onSubmit={handleSeacrhBtn}>
              <div className="input-group flex justify-center items-center mt-10">
                <input
                  type="text"
                  placeholder="Search…"
                  name="searchInput"
                  className="input input-bordered w-full"
                />
                <input
                  type="submit"
                  className="btn bg-[#FF444A] border-[#FF444A] text-white hover:text-[#FF444A]"
                  value="Search"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </banner>
  );
};
Banner.propTypes = {
  getInput: PropTypes.func.isRequired,
};
export default Banner;
