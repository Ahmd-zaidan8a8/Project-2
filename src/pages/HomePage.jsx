import { useState } from "react";
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
          onSubmit={handleSubmit((data) => {
            setIngr(data);
            console.log(data)
            setSubmitted(true);
          })}
        >
          <div className="form-floating my-2">
            <textarea
              {...register("ingr")}
              className="form-control"
              id="ingr"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
<<<<<<< HEAD
        <div>
          {isSubmitted && <FoodInfo ingr={textValue} setApiResponse={setApiResponse}/>}
        </div>
        <DailyNutritionCard nutritionDetails={apiResponse} />
=======
      <div>{isSubmitted && <FoodInfo ingr={ingr} />}</div>
>>>>>>> e78eb5c37aacfb75f19811239b79bff1d9ba8df3
    </div>
  );
};

export default HomePage;
