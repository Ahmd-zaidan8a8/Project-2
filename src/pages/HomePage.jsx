import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import UserInfoCardHome from "../components/UserInfoCardHome";
import SummaryList from "./SummaryList";
import DailyNutritionCard from "../components/DailyNutrionCard";
import apiServer from "../services/api-server";
import { useNavigate } from "react-router-dom";

const HomePage = ({ loginData, userSubmit }) => {
  const [meals, setMeals] = useState([]);

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const [analyze, setAnalyze] = useState(false);

  const [apiResponse, setApiResponse] = useState(null);

  const [showNutritionCard, setShowNutritionCard] = useState(false);

  const [isConsumed, setConsumed] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const [caloriesPerMeal, setCaloriesPerMeal] = useState(0);

  useEffect(() => {
    if (!userSubmit) navigate("/login");
  }, []);

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
        console.log(response.data)
        setCaloriesPerMeal(response.data.calories);
        setApiResponse(response.data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };

  const submittAddToMealPlan = (ingr) => {
    const newMeal = {
      dailyCalories: Math.round(caloriesPerMeal),
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
        <UserInfoCardHome loginData={loginData} />
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
                setShowNutritionCard(true);
              } else {
                submittAddToMealPlan(ingr);
                reset();
                setShowNutritionCard(false);
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
              <button
                onClick={() => setAnalyze(false)}
                type="submit"
                className="btn btn-secondary ms-2"
              >
                Add to Mealplan
              </button>
            </div>
          </form>
        </div>
        <div>
          {showNutritionCard && (
            <DailyNutritionCard nutritionDetails={apiResponse} />
          )}
        </div>
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
