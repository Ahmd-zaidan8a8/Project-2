import { useState } from "react";
import { Link } from "react-router-dom";
import FoodInfo from "../components/FoodInfo";
import DailyNutritionCard from "../components/DailyNutrionCard";

const HomePage = () => {
  const [textValue, setTextArea] = useState("");
  const [apiResponse, setApiResponse] = useState(null);
  const [isSubmitted , setSubmitted] = useState(false);

  const handleTextAreaChange = (e) => {
    setTextArea(e.target.value);
    console.log(textValue);
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
          {isSubmitted && <FoodInfo ingr={textValue} setApiResponse={setApiResponse}/>}
        </div>
        <DailyNutritionCard nutritionDetails={apiResponse} />
    </div>
  );
};

export default HomePage;
