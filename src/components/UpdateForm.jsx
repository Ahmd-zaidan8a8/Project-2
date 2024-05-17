import { useForm } from "react-hook-form";
import apiServer from "../services/api-server";
import { useState } from "react";

const UpdateForm = ({ setUpdateForm, id, handleUpdateForm }) => {
  const { register, handleSubmit } = useForm();

  const [newCaloriesPerMeal , setNewCaloriesPerMeal] = useState(0);

  function splitIngr(ingr) {
    let ingrArr = ingr.split("\n");
    return ingrArr;
  }

  const update = (newIngr) => {
    apiServer.get(`/nutrition-data?ingr=${newIngr}`)
      .then(res => setNewCaloriesPerMeal(res.data.calories))
      .catch(err => console.log(err.message));
    
  }


  return (
    <div className="my-3 d-flex justify-content-center">
      <form
        onSubmit={handleSubmit(({ newIngr }) => {
          setUpdateForm(false);

          update(newIngr);

          const updatedMeal = {
            dailyCalories : Math.round(newCaloriesPerMeal),
            ingr: splitIngr(newIngr),
          };

          handleUpdateForm(id, updatedMeal);

          apiServer
            .put(`/summarylist/${id}`, updatedMeal)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err.message));
        })}
      >
        <div className="form-floating my-2">
          <textarea
            {...register("newIngr")}
            className="form-control"
            id="ingr"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-secondary">
          Update Mealplan
        </button>
      </form>
    </div>
  );
};

export default UpdateForm;
