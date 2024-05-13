import { useState } from "react";
import FoodInfo from "../components/FoodInfo";
import DailyNutritionCard from "../components/DailyNutrionCard";
import { useForm } from "react-hook-form";

const HomePage = () => {
  const [apiResponse, setApiResponse] = useState(null);
  const [isSubmitted, setSubmitted] = useState(false);
  const [ingr , setIngr] = useState('');
  const { register, handleSubmit } = useForm();

  return (
    <div className="d-flex justify-content-between">
      <div>
        <h2>Enter your ingredients: </h2>
        <small>Please enter each ingredient line by line.</small>
        <form
          onSubmit={handleSubmit((data) => {
            setIngr(data);
            console.log(data);
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
      <div>
        {isSubmitted && (
          <FoodInfo ingr={ingr} setApiResponse={setApiResponse} />
        )}
      </div>
      <DailyNutritionCard nutritionDetails={apiResponse} />
    </div>
  );
};

export default HomePage;
