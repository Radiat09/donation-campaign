import Banner from "../../Components/Banner/Banner";
import Cards from "../../Components/Cards/Cards";
import { useState } from "react";

const Home = () => {
  const [search, setSearchInput] = useState("");
  const getInput = (inputTxt) => {
    setSearchInput(inputTxt);
  };
  // console.log(search);
  return (
    <div>
      <Banner getInput={getInput}></Banner>
      <Cards search={search}></Cards>
    </div>
  );
};

export default Home;
