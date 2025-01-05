import { useState } from "react";

const Language = ({ name, img, options }) => {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <div
      className="cardWrapper"
      onClick={() => setShow(!show)}
    >
      {show && (
        <div className="cardBottom">
          <img
            src={img}
            alt={name}
          />
          <h3>{name}</h3>
        </div>
      )}
      {!show && (
        <ul>
          {options.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Language;
