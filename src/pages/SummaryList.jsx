import React, { useEffect, useState } from "react";
import apiServer from "../services/api-server";
import CardMeal from "../components/CardMeal";

const SummaryList = ({ meal, setMeals, meals }) => {
  useEffect(() => {
    setMeals([...meals, meal]);
  }, []);

  useEffect(() => {
    apiServer
      .post("/summarylist", meal)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      {meals.length !== 0 &&
        meals.map((meal) => {
          return <CardMeal key={meal.mealCount} meal={meal} />;
        })}
    </div>
  );
};

export default SummaryList;
