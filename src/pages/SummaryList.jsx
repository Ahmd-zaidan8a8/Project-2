import React, { useEffect, useState } from "react";
import apiServer from "../services/api-server";
import CardMeal from "../components/CardMeal";

const SummaryList = () => {
  const [error, setError] = useState("");
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    apiServer
      .get("/summarylist")
      .then((res) => setMeals(res.data.meals))
      .catch((err) => setError(err.message));
  }, []);


  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div>
      {meals.length !== 0 &&
        meals.map((meal , index) => {
          return <CardMeal key={index} meal={meal} index={index} />;
        })}
    </div>
  );
};

export default SummaryList;
