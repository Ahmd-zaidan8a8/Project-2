import { useForm } from "react-hook-form";
import apiServer from "../services/api-server";

const UpdateForm = ({ setUpdateForm, id, handleUpdateForm }) => {
  const { register, handleSubmit } = useForm();

  function splitIngr(ingr) {
    let ingrArr = ingr.split("\n");
    return ingrArr;
  }

  return (
    <div className="my-3">
      <form
        onSubmit={handleSubmit(({ newIngr }) => {
          setUpdateForm(false);

          const updatedMeal = {
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
