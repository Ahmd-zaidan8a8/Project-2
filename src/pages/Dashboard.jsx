import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submitted!");
        }}
      >
          <div className="mb-3">
            <select name="gender" id="gender">
              <option value=""></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            Username:{" "}
          </label>
          <input id="userName" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="height" className="form-label">
            Height
          </label>
          <input id="height" type="number" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="Weight" className="form-label">
            Weight
          </label>
          <input id="Weight" type="number" className="form-control" />
        </div>
        <Link to="/">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
        </Link>
      </form>
    </div>
  );
};

export default Dashboard;
