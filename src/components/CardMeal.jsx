import { useState } from "react";
import UpdateForm from "./UpdateForm";

const CardMeal = ({ meal, index, onDelete , handleUpdateForm }) => {
  const { id, dailyCalories, ingr } = meal;

  const [showUpdaterForm , setUpdaterForm] = useState(false);

  const handleClick = () => {
    // display a form for the user to change the info
    setUpdaterForm(true);

    // recive this info and use it as a new elements in the meal.ingr array

    // send a request to the server to update the item there
    // handle upcoming error from the server
  };

  if(showUpdaterForm) {
    return (
      <div>
        <UpdateForm meal={meal} handleUpdateForm={handleUpdateForm} setUpdateForm={setUpdaterForm} />
      </div>
    )
  }

  return (
    <div className="container d-flex text-center">
      <div className="card mb-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Meal {index + 1}</h5>
          <ul className="list-group-item" style={{ listStyleType: "none" }}>
            {ingr.map((ing) => (
              <li key={index}>{ing}</li>
            ))}
          </ul>
          <div className="card-footer text-body-secondary">
            Total calories: {dailyCalories}
          </div>
          <div className="d-flex justify-content-around">
            <button onClick={() => handleClick()} className="btn btn-info">
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
