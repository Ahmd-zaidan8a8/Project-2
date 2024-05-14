import { useState } from "react";
import FoodInfo from "../components/FoodInfo";
import { useForm } from "react-hook-form";
import Summary from "./Summary";
import UserInfoCardHome from "../components/UserInfoCardHome";
import SummaryList from "./SummaryList";

const HomePage = ({ loginData }) => {
  const [mealCount , setMealCount] = useState(0);
  const [dailyCalories, setDailyCalories] = useState(0);
  const [isSubmitted, setSubmitted] = useState(false);
  const [ingr, setIngr] = useState("");
  const [isConsumed, setConsumed] = useState(false);
  const { register, handleSubmit } = useForm();

  const { gender, height, id, userName, weight } = loginData;

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
              setIngr(ingr);
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

            <div className="d-felx jsutify-content-start">
              <button type="submit"
                onClick={() => {
                  setTimeout(() => {
                    setDailyCalories(calcCalories(weight, height));
                    setMealCount(mealCount + 1);
                    setConsumed(true);
                  }, 2000);
                }}
                className="btn btn-secondary"
              >
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
      {isConsumed && <SummaryList dailyCalories={dailyCalories} ingr={ingr} mealCount={mealCount} />}
      <div className="my-4"><button onClick={() => {
        setConsumed(false);
      }} className="btn btn-secondary">Back to Home Page</button></div>
    </div>
  );
};

export default HomePage;
