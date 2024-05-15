import React, { useEffect, useState } from "react";
import apiServer from "../services/api-server";
import CardMeal from "../components/CardMeal";

const SummaryList = ({ meal, meals, setMeals }) => {
  const [error, setError] = useState("");

  useEffect(() => {
    apiServer
      .post("/summarylist", meal)
      .then((res) => {
        setMeals([res.data.mealInfo, ...meals]);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div>
      {meals.length !== 0 &&
        meals.map((meal) => {
          return <CardMeal key={meal.id} meal={meal} />;
        })}
    </div>
  );
};

export default SummaryList;
