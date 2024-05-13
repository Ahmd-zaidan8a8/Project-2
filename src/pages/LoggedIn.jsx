import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoggedIn = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          axios
            .post("http://localhost:5000/login", data)
            .then((res) => {
              console.log("sucess with logging in", res.data);
              navigate("/");
            })
            .catch((err) => console.log("Error in logging in", err));
        })}
      >
        <div className="mb-3">
          <select {...register("gender")} name="gender" id="gender">
            <option value=""></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            Username:{" "}
          </label>
          <input
            {...register("userName")}
            id="userName"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="height" className="form-label">
            Height
          </label>
          <input
            {...register("height")}
            id="height"
            type="number"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="weight" className="form-label">
            Weight
          </label>
          <input
            {...register("weight")}
            id="weight"
            type="number"
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoggedIn;
