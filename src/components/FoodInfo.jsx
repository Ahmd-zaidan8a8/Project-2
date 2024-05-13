import { useEffect } from "react";
import apiClient from "../services/api-client";

const FoodInfo = ({ ingr, setApiResponse }) => {
  useEffect(() => {
    apiClient
      .get("", { params: { ingr: ingr } })
      .then((response) => {
        console.log("Response:", response.data);
        setApiResponse(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [ingr, setApiResponse]);

  return <div>FoodInfo</div>;
};

export default FoodInfo;
