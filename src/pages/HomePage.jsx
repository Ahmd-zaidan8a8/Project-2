import { useState } from "react";
import { useForm } from "react-hook-form";
import UserInfoCardHome from "../components/UserInfoCardHome";
import SummaryList from "./SummaryList";
import DailyNutritionCard from "../components/DailyNutrionCard";
import apiServer from "../services/api-server";

const HomePage = ({ loginData }) => {
  const [meals, setMeals] = useState([]);

  const [error, setError] = useState("");

  const [analyze, setAnalyze] = useState(false);

  const [apiResponse, setApiResponse] = useState(null);

  const [isSubmitted, setSubmitted] = useState(false);
  const [isConsumed, setConsumed] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const { gender, height = 192, id, userName, weight = 80 } = loginData;

  const calcCalories = (weight, height) => {
    let BMR = 0;
    let burn = 0;
    if (gender === "Male") {
      BMR = 10 * weight + 6.25 * height - 5 * 30 + 5;
      burn = BMR * 1.2;
    } else {
      BMR = 10 * weight + 6.25 * height - 5 * 30 - 161;
      burn = BMR * 1.2;
    }

    return burn;
  };

  function splitIngr(ingr) {
    let ingrArr = ingr.split("\n");
    return ingrArr;
  }

  const createNewMeal = (meal) => {
    apiServer
      .post("/summarylist", meal)
      .then((res) => console.log(res.data))
      .catch((err) => {
        setError(err.message);
      });
  };

  const getFoodInf = (ingr) => {
    apiServer
      .get(`/nutrition-data?ingr=${ingr}`)
      .then((response) => {
        console.log("Response:", response.data);
        setApiResponse(response.data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };

  const onSubmit = (ingr) => {
    const newMeal = {
      dailyCalories: calcCalories(weight, height),
      ingr: splitIngr(ingr),
    };

    createNewMeal(newMeal);

    setMeals([newMeal, ...meals]);
    setConsumed(true);
  };

  if (error) {
    return <p className="text-danger">{error}</p>;
  }

  return (
    <div className="w-100 d-flex justify-content-center mt-4">
      <div
        className={
          isConsumed
            ? "d-none"
            : "d-flex flex-column w-50 shadow-lg rounded p-3"
        }
      >
        <UserInfoCardHome
          gender={gender}
          height={height}
          id={id}
          userName={userName}
          weight={weight}
        />
        <div>
          <h2>Enter your ingredients: </h2>
          <small>
            Please enter each ingredient line by line to see it's nutrition
            scorecard.
          </small>
          <form
            onSubmit={handleSubmit(({ ingr }) => {
              if (analyze) {
                getFoodInf(ingr);
                setSubmitted(true);
                reset();
              } else {
                onSubmit(ingr);
              }
            })}
          >
            <div className="form-floating my-2">
              <textarea
                {...register("ingr")}
                className="form-control"
                id="ingr"
              ></textarea>
            </div>

            <div className="d-flex justify-content-start">
              <button
                onClick={() => setAnalyze(true)}
                type="submit"
                className="btn btn-primary"
              >
                Analyze
              </button>
              <button type="submit" className="btn btn-secondary ms-2">
                Add to Mealplan
              </button>
            </div>
          </form>
        </div>
        <div>{isSubmitted && <DailyNutritionCard nutritionDetails={apiResponse} />}</div>
      </div>
      {isConsumed && (
        <div>
          <SummaryList />
          <div className="my-4">
            <button
              onClick={() => {
                setConsumed(false);
              }}
              className="btn btn-secondary"
            >
              Back to Home Page
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
