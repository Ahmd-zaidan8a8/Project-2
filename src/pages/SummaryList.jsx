import React, { useEffect, useState } from "react";
import apiServer from "../services/api-server";
import CardMeal from "../components/CardMeal";

const SummaryList = () => {
  const [error, setError] = useState("");
  const [meals, setMeals] = useState([]);

  const [isDeleted, setDeleted] = useState(false);

  const handleDelete = (mealId) => {
    const newMeals = meals.filter((meal) => meal.id !== mealId);
    setMeals(newMeals);
    displayAlert();

    apiServer
      .delete(`/summarylist/${mealId}`)
      .then((res) => console.log(res.data))
      .catch((err) => setError(err.message));
  };

  const displayAlert = () => {
    setDeleted(true);
    setTimeout(() => {
      setDeleted(false);
    }, 4000);
  };

  useEffect(() => {
    apiServer
      .get("/summarylist")
      // .then((res) => setMeals(res.data.meals))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div>
      {isDeleted && (
        <div>
          <div className="alert alert-danger" role="alert">
            you successfully removed a Meal !
          </div>
          <button className="btn btn-info">show info</button>
        </div>
      )}
      {meals.length !== 0 &&
        meals.map((meal, index) => {
          return (
            <div>
              <CardMeal
                key={index}
                meal={meal}
                index={index}
                onDelete={handleDelete}
              />
            </div>
          );
        })}
    </div>
  );
};

export default SummaryList;
