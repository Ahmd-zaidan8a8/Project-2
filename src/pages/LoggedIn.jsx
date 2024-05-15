import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//prop sent from app.jsx
const LoggedIn = ({setLoginData}) => {
  
  const {register, handleSubmit } = useForm();
  const navigate = useNavigate();

  return (
       
    <div className="container-fluid w-50">
    <h1 className="d-flex justify-content-center mb-3 shadow-lg bg-primary p-1 rounded text-white">Let's Get Started</h1>
      <p className="d-flex justify-content-center mb-3">Please enter your health information below</p>
      <form className="shadow-lg p-4 radius rounded"
        onSubmit={handleSubmit((data) => {
          axios
            .post("http://localhost:5000/login", data)
            .then((res) => {
              console.log("sucess with logging in", res.data);
              setLoginData(res.data); //setting prop value
              navigate("/");
            })
            .catch((err) => console.log("Error in logging in", err));
        })}
      >
        <div className="mb-3">
          <label htmlFor="gender" className="form-label me-2">Select your gender</label>
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
            Height cm
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
            Weight kg
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
