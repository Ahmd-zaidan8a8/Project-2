import { useState } from "react";
import FoodInfo from "../components/FoodInfo";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [isSubmitted, setSubmitted] = useState(false);
  const [ingr, setIngr] = useState("");
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-between">
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
          <div className="d-flex justify-content-evenly">
            <button
              type="submit"
              onClick={() => {
                console.log(
                  "the meal consumed and added to the daily meal plan! wait a few seconds"
                );
                setTimeout(() => {
                  navigate("/summary");
                }, 6000);
              }}
              className="btn btn-secondary"
            >
              Consume
            </button>
            <button type="submit" className="btn btn-primary">
              Analyze
            </button>
          </div>
        </form>
      </div>
      <div>{isSubmitted && <FoodInfo ingr={ingr} />}</div>
    </div>
  );
};

export default HomePage;
