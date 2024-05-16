import { useState } from "react";
import UpdateForm from "./UpdateForm";

const CardMeal = ({ meal, index, onDelete , handleUpdateForm }) => {
  const { id, dailyCalories, ingr } = meal;

  const [showUpdaterForm, setUpdaterForm] = useState(false);

  


  if (showUpdaterForm) {
    return (
      <div>
        <UpdateForm id={id} setUpdateForm={setUpdaterForm} handleUpdateForm={handleUpdateForm} />
      </div>
    );
  }
  console.log(ingr)

  return (
    <div className="container d-flex text-center">
      <div className="card mb-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Meal {index + 1}</h5>
          <ul className="list-group-item" style={{ listStyleType: "none" }}>
            {ingr.map((ing , index) => (
              <li key={index}>{ing}</li>
            ))}
          </ul>
          <div className="card-footer text-body-secondary">
            Total calories: {dailyCalories}
          </div>
          <div className="d-flex justify-content-around">
            <button
              onClick={() => setUpdaterForm(true)}
              className="btn btn-info"
            >
              update
            </button>
            <button onClick={() => onDelete(id)} className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMeal;
