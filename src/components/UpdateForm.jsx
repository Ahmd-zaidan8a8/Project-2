import { useForm } from "react-hook-form";

const UpdateForm = ({ meal , handleUpdateForm , setUpdateForm}) => {
  const { register, handleSubmit } = useForm();

//   const onSubmit = (newIngr) => {
//     const newMeal = { ...meal, ingr: newIngr };
//   };
  return (
    <div className="my-3">
      <form
        onSubmit={handleSubmit(({ newIngr }) => {
          handleUpdateForm(newIngr);
          setUpdateForm(false)
          console.log(meal.ingr);
          console.log(newIngr);
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
