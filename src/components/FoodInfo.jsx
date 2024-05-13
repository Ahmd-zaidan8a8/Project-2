import { useEffect, useState } from "react";
import DailyNutritionCard from "./DailyNutrionCard";
import axios from "axios";

// TODO: the api-client configrution object

const FoodInfo = ({ ingr }) => {
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/nutrition-data?ingr=${ingr}`)
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
      info here
      <DailyNutritionCard nutritionDetails={apiResponse} />
    </div>
  );
};

export default FoodInfo;
