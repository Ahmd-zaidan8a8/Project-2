import React, { useEffect, useState } from "react";
import apiServer from "../services/api-server";
import CardMeal from "../components/CardMeal";

const SummaryList = ({ dailyCalories, ingr , mealCount }) => {

  function splitIngr(ingr) {
    let ingrArr = ingr.split("\n");
    return ingrArr;
  }

  const ingrArr = splitIngr(ingr);

  useEffect(() => {
    const newMeal = {
        dailyCalories,
        ingr: ingrArr,
    }
    apiServer.post('/summarylist' , newMeal)
        .then(res => console.log(res))
        .catch(err => console.log(err.message))
  } ,[]);

  return (
    <div>
      <CardMeal dailyCalories={dailyCalories} ingrArr={ingrArr} mealCount={mealCount} />
    </div>
  );
};

export default SummaryList;
