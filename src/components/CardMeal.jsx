const CardMeal = ({ dailyCalories, ingrArr, mealCount }) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Meal {mealCount}</h5>
          <ul className="list-group-item" style={{ listStyleType: "none" }}>
            {ingrArr.map((ingr) => (
              <li key={ingr}>{ingr}</li>
            ))}
          </ul>
          <div className="card-footer text-body-secondary">Total calories: {dailyCalories}</div>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default CardMeal;
