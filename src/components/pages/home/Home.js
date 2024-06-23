import Card from "../../main/Card";
import Carousel from "../../main/carousel/Carousel";
import NikeCard from "../../main/NikeCard/NikeCard";
import "./Home.css"

let Home = () => {
  return (
    <div className="Body">
      <Carousel />
      <NikeCard />
      <Card />
    </div>
  );
};

export default Home;
