import { useEffect, useState } from "react";
import DailyNutritionCard from "./DailyNutrionCard";
import apiServer from "../services/api-server";


const FoodInfo = ({ ingr }) => {
  const [apiResponse, setApiResponse] = useState(null);
  

  useEffect(() => {
    apiServer.get(`/nutrition-data?ingr=${ingr}`)
      .then((response) => {
        console.log("Response:", response.data);
        setApiResponse(response.data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  }, [ingr]);

  return (
    <div>
      <DailyNutritionCard nutritionDetails={apiResponse} />
    </div>
  );
};

export default FoodInfo;
