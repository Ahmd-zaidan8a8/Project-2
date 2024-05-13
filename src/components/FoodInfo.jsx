import { useEffect } from "react";
import apiClient from "../services/api-client";

const FoodInfo = ({ ingr }) => {
  useEffect(() => {
    apiClient
      .get("/x", { params: { ingr: ingr } })
      .then((response) => {
        console.log("Response:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return <div>FoodInfo</div>;
};

export default FoodInfo;
