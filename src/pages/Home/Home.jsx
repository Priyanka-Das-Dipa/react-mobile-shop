import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Phones from "../../components/Header/Phones/Phones";

const Home = () => {
  const phones = useLoaderData();
  console.log(phones);

  return (
    <div className="mb-10">
      <Banner></Banner>
      <Phones phones={phones}></Phones>
    </div>
  );
};

export default Home;
