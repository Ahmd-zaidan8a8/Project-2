const CardMeal = ({ meal }) => {
  const { mealCount, dailyCalories, ingr } = meal;
  
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Meal {mealCount}</h5>
          <ul className="list-group-item" style={{ listStyleType: "none" }}>
            {ingr.map((ing) => (
              <li key={mealCount}>{ing}</li>
            ))}
          </ul>
          <div className="card-footer text-body-secondary">
            Total calories: {dailyCalories}
          </div>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default CardMeal;
