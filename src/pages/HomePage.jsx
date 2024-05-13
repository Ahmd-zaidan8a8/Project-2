import { useState } from "react";
import { Link } from "react-router-dom";
import FoodInfo from "../components/FoodInfo";

const HomePage = () => {
  const [textValue, setTextArea] = useState("");
  const [isSubmitted , setSubmitted] = useState(false);

  const handleTextAreaChange = (e) => {
    setTextArea(e.target.value);
  };

  return (
    <div className="d-flex justify-content-between">
      <div>
        <h2>Enter your ingredients: </h2>
        <small>Please enter each ingredient line by line.</small>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="form-floating my-2">
            <textarea
              value={textValue}
              onChange={handleTextAreaChange}
              className="form-control"
              id="floatingTextarea"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
        <div>
          {isSubmitted && <FoodInfo ingr={textValue} />}
        </div>
    </div>
  );
};

export default HomePage;
