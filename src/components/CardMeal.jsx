import { useState } from "react";
import UpdateForm from "./UpdateForm";

const CardMeal = ({ meal, index, onDelete, handleUpdateForm}) => {
  const { id, dailyCalories, ingr } = meal;

  const [showUpdaterForm, setUpdaterForm] = useState(false);

  if (showUpdaterForm) {
    return (
      <div>
        <UpdateForm
          id={id}
          setUpdateForm={setUpdaterForm}
          handleUpdateForm={handleUpdateForm}
          
        />
      </div>
    );
  }

  return (
    <div className="container d-flex justify-content-center text-center mt-2">
      <div className="card mb-3" style={{ height: "auto", width: "25rem" }}>
        <div className="card-body">
          <h5 className="card-title">Meal {index + 1}</h5>
          <ul className="list-group-item" style={{ listStyleType: "none" }}>
            {ingr.map((ing, index) => (
              <li key={index}>{ing}</li>
            ))}
          </ul>
          <div className="card-footer text-body-secondary">
            Total calories: {dailyCalories}
          </div>
          <div className="d-flex justify-content-around">
            <button
              onClick={() => setUpdaterForm(true)}
              className="btn btn-info mt-2"
            >
              update
            </button>
            <button onClick={() => onDelete(id)} className="btn btn-danger mt-2">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMeal;
