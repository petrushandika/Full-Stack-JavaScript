import { destinations } from "../utils/data";

const Tour = ({ image, title, desc, price, tourIsUp }) => {
  // const tours = [];
  const tours = destinations;

  return (
    <div className={`content ${tourIsUp ? "grey" : ""}`}>
      {tours.length > 0 ? (
        <div className="contentList">
          <img src={image} alt="..." />
          <h2>{title}</h2>
          <p>{desc}</p>
          <span>{tourIsUp ? tourIsUp : price}</span>
        </div>
      ) : (
        <h1>Sorry...</h1>
      )}
    </div>
  );
};

export default Tour;
