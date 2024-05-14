import { useState } from "react";
import { Link } from "react-router-dom";

const Summary = ({ title, subTitle, ingredients }) => {
  const [mealCount, setMealCounter] = useState(0);
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Meal {mealCount}</h5>
          {subTitle && (
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {subTitle}
            </h6>
          )}
          <ul className="list-group p-2" style={{ listStyleType: "none" }}>
            <li>A</li>
            <li>B</li>
            <li>C</li>
          </ul>
          <ul className="list-group p-2" style={{ listStyleType: "none" }}>
            {ingredients && ingredients.map((ingr) => <li>{ingr}</li>)}
          </ul>
          <button
            className="btn btn-danger"
            onClick={() => console.log("delete the Meal from the list")}
          >
            Reomve
          </button>
        </div>
      </div>
      <div className="my-3">
        <Link to="/">
          {" "}
          <button className="btn btn-secondary">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Summary;
