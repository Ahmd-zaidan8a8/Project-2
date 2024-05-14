import { useState } from "react";
import FoodInfo from "../components/FoodInfo";
import { useForm } from "react-hook-form";
import UserInfoCardHome from "../components/UserInfoCardHome";

const HomePage = ({loginData}) => {
  const [isSubmitted, setSubmitted] = useState(false);
  const [ingr, setIngr] = useState("");
  const { register, handleSubmit } = useForm();
  const {gender, height, id, userName, weight} = loginData;

  return (
    <div className="d-flex justify-content-between">
    <UserInfoCardHome gender={gender} height={height} id={id} userName={userName} weight={weight} />
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <div>{isSubmitted && <FoodInfo ingr={ingr} />}</div>
    </div>
  );
};

export default HomePage;
