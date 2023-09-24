const Banner = () => {
  return (
    <banner>
      <div
        className="hero min-h-screen mb-24"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="form-control">
            <h2 className="font-bold text-5xl">
              I Grow By Helping People In Need
            </h2>
            <div className="input-group flex justify-center items-center mt-10">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered w-full"
              />
              <button className="btn  px-5">Search</button>
            </div>
          </div>
        </div>
      </div>
    </banner>
  );
};

export default Banner;
