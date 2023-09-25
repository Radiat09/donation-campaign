import { getStoredDonation } from "../../Utility/localstorage";
import Donation from "../../Components/Donation/Donation";

const Donate = () => {
  const donations = getStoredDonation();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto my-10 max-w-7xl">
      {donations.length > 0 ? (
        donations.map((donation) => (
          <Donation key={donation.id} donation={donation}></Donation>
        ))
      ) : (
        <h1 className="text-6xl text-center my-20"> No Data Found</h1>
      )}
    </div>
  );
};

export default Donate;
