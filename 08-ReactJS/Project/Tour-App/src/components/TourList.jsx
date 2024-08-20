import Tour from "./Tour";
import { destinations } from "../utils/data";

const TourList = () => {
  return (
    <div>
      {destinations.map((destination) => (
        <Tour
          key={destination.id}
          title={destination.title}
          desc={destination.desc}
          image={destination.image}
          price={destination.price}
          tourIsUp={destination.tourIsUp}
        />
      ))}
    </div>
  );
};

export default TourList;
