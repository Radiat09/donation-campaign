import { getStoredDonation } from "../../Utility/localstorage";
const PieChart = () => {
  const totalDonations = getStoredDonation();
  console.log(totalDonations);

  return (
    <>
      <div></div>
    </>
  );
};

export default PieChart;
