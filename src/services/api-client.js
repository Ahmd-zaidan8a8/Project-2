import axios from "axios";

const YOUR_APP_ID_NUTRITION = "3c51ccf7x"; // typo x in the end
const YOUR_APP_KEY_NUTRITION = "88486511d083c33640ce0bb1971028da";

const endpointNutrition = "https://api.edamam.com/api/nutrition-data";

export default axios.create({
  baseURL: endpointNutrition,
  params: {
    app_id: YOUR_APP_ID_NUTRITION,
    app_key: YOUR_APP_KEY_NUTRITION,
  },
});
