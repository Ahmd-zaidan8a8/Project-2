import { useState } from "react";
import FoodInfo from "../components/FoodInfo";
import { useForm } from "react-hook-form";
import UserInfoCardHome from "../components/UserInfoCardHome";
import SummaryList from "./SummaryList";
import apiServer from "../services/api-server";

const HomePage = ({ loginData }) => {
  const [meals, setMeals] = useState([]);
  const [meal, setMeal] = useState({
    dailyCalories: 0,
    ingr: "",
  });

  const [error, setError] = useState("");

  const createNewMeal = (meal) => {
    apiServer
      .post("/summarylist", meal)
      .then((res) => console.log(res.data))
      .catch((err) => {
        setError(err.message);
      });
  };

  

  const [isSubmitted, setSubmitted] = useState(false);
  const [isConsumed, setConsumed] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  // TODO: remove the default values

  const { gender, height = 192, id, userName, weight = 80 } = loginData;

  const calcCalories = (weight, height) => {
    let BMR = 0;
    let burn = 0;
    if (gender === "Male") {
      BMR = 10 * weight + 6.25 * height - 5 * 30 + 5; //age shoudld be in place for 30
      burn = BMR * 1.2;
    } else {
      BMR = 10 * weight + 6.25 * height - 5 * 30 - 161; // age should be in place for 30
      burn = BMR * 1.2;
    }

    return burn;
  };

  function splitIngr(ingr) {
    let ingrArr = ingr.split("\n");
    return ingrArr;
  }

  // lifting the state up
  const handleUpdateForm = (newIngr) => {
    const newMeal = {
      ...meal,
      ingr: splitIngr(newIngr)
    }
    setMeal(newMeal);
  }
  
  const onSubmit = (ingr) => {
    const newMeal = {
      dailyCalories: calcCalories(weight, height),
      ingr: splitIngr(ingr),
    };
    setMeal(newMeal);
    setMeals([newMeal, ...meals]);
    createNewMeal(newMeal);
    setConsumed(true);
  };

  if(error){
    return <p className="text-danger">{error}</p>;
  }

  
  return (
    <div>

      <div className={isConsumed ? "d-none" : "d-flex justify-content-between"}>
        <UserInfoCardHome
          gender={gender}
          height={height}
          id={id}
          userName={userName}
          weight={weight}
        />
        <div>
          <h2>Enter your ingredients: </h2>
          <small>Please enter each ingredient line by line.</small>
          {/* TODO:the data in a form of object */}
          <form
            onSubmit={handleSubmit(({ ingr }) => {
              onSubmit(ingr);
              setSubmitted(true);
              reset();
            })}
          >
            <div className="form-floating my-2">
              <textarea
                {...register("ingr")}
                className="form-control"
                id="ingr"
              ></textarea>
            </div>

            <div className="d-felx jsutify-content-start">
              <button type="submit" className="btn btn-secondary">
                Add to Mealplan
              </button>
              <button type="submit" className="btn btn-primary">
                Analyze
              </button>
            </div>
          </form>
        </div>
        {/* <div>{isSubmitted && <FoodInfo ingr={ingr} />}</div> */}
      </div>
      {isConsumed && (
        <div>
          <SummaryList handleUpdateForm={handleUpdateForm} />
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
