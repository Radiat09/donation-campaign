import { getStoredDonation } from "../../Utility/localstorage";
import Donation from "../../Components/Donation/Donation";
import { useState } from "react";

const Donate = () => {
  const donations = getStoredDonation();
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div>
        {donations.length > 0 ? (
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto my-10 max-w-7xl">
              {isShow
                ? donations.map((donation) => (
                    <Donation key={donation.id} donation={donation}></Donation>
                  ))
                : donations
                    .slice(0, 4)
                    .map((donation) => (
                      <Donation
                        key={donation.id}
                        donation={donation}
                      ></Donation>
                    ))}
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => setIsShow(!isShow)}
                className="btn bg-[#009444] text-white hover:text-[#009444]"
              >
                {isShow ? "Show Less" : "Show more"}
              </button>
            </div>
          </div>
        ) : (
          <h2 className="text-5xl text-center mt-20">No Data Found</h2>
        )}
      </div>
    </>
  );
};

export default Donate;
