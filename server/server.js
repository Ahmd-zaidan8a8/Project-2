const Joi = require("joi");
const express = require("express");
const cors = require("cors");
const axios = require('axios')

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST",
  })
);

const users = [];
const consumedMeals = [];

app.get("/", (req, res) => {
  res.send("Hello! , Ahmad");
});

app.get("/login", (req, res) => {
  res.send(users);
});

app.post("/login", (req, res) => {
  const { error, value } = validateUser(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const { userName, gender, weight, height } = req.body;

  const newUser = {
    id: users.length + 1,
    userName: userName,
    gender: gender,
    weight: weight,
    height: height,
  };

  users.push(newUser);
  res.send(newUser);
});
app.get("/nutrition-data", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.edamam.com/api/nutrition-data",
      {
        params: {
          app_id: "3c51ccf7", 
          app_key: "88486511d083c33640ce0bb1971028da",
          ingr: req.query.ingr,
        },
      }
    );
    res.send(response.data);
  } catch (error) {
    console.log("Error", error.message);
    res.status(500).send('internal server error');
  }
});

app.post("/summary" , (req , res) => {
  const meal = req.body;

  consumedMeals.push(meal);
  res.send("you have succesfully added a new meal in your daily plan" , meal);
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listining on port ${port}`));

function validateUser(user) {
  const schema = Joi.object({
    gender: Joi.string().valid("Male", "Female").required(),
    weight: Joi.number().min(0).max(500).required(),
    height: Joi.number().min(0).max(300).required(),
    userName: Joi.string().min(3).max(100).required(),
  });

  return schema.validate(user);
}


// axios.interceptors.request.use(function (config) {
//   console.log("Request:", config);
//   return config;
// }, function (error) {
//   return Promise.reject(error);
// });

// // Add response interceptor
// axios.interceptors.response.use(function (response) {
//   console.log("Response:", response);
//   return response;
// }, function (error) {
//   return Promise.reject(error);
// });