import apiClient from "../services/api-client";

const Info = () => {
  apiClient
    // .get()
    .then((response) => {
      console.log("Response:", response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return <div>Info</div>;
};

export default Info;
