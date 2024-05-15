import { useForm } from "react-hook-form";

const UpdateForm = ({meal}) => {
  const { register, handleSubmit } = useForm();
  const {ingr} = meal;

  const onSubmit = () => {

  }
  return (
    <div>
      <form onSubmit={handleSubmit(data => console.log(data))}>
        <div className="form-floating my-2">
          <textarea
            {...register("ingr")}
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
