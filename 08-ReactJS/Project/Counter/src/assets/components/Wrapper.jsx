import { useState } from "react";
import "../styles/Wrapper.css";

const messages = ["Hello React", "React is a Library", "React Best"];

function Wrapper() {
  const [step, setStep] = useState(1);
  const [test] = useState({ name: "Elton" });
  const [open, setOpen] = useState(true);

  const handlePre = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  const handleNext = () => {
    if (step < 3) setStep((s) => s + 1);
  };

  return (
    <div>
      <button onClick={() => setOpen(!open)}>{open ? "Hide" : "Show"}</button>
      {open ? (
        <div className="wrapper">
          <div className="numberWrapper">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p>
            {step}:{messages[step - 1]} - {test.name}
          </p>
          <div className="btnGroup">
            <button onClick={handlePre}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Wrapper;
