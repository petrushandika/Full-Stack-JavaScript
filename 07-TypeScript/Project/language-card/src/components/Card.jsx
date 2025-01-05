import Language from "./Language";
import { data } from "../data/data";

const Card = () => {
  return (
    <div className="card">
      <h1>Language</h1>
      <div className="langWrapper">
        {data.map((lang, index) => (
          <Language
            lang={lang}
            key={index}
            name={lang.name}
            img={lang.img}
            options={lang.options}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
