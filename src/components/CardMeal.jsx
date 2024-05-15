import apiServer from "../services/api-server";

const CardMeal = ({ meal, index, onDelete }) => {
  const { id, dailyCalories, ingr } = meal;

  return (
    <div className="container d-flex">
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
          <button onClick={() => onDelete(id)} className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardMeal;
