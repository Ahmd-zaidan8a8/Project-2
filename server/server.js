const Joi = require("joi");
const express = require("express");
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const users = [];

app.get("/", (req, res) => {
    res.send("Hello! , Ahmad");
  });

  app.get("/login", (req, res) => {
    res.send(users);
  });


app.post("/login", (req, res) => {
    const { error, value } = validateUser(req.body);
    
    if (error) return res.status(400).send(error.details[0].message);
    
    const {userName , gender , weight , height} = req.body;

  const newUser = {
    id:users.length + 1,
    userName: userName,
    gender: gender,
    weight: weight,
    height: height,
  }

  users.push(newUser);
  res.send(newUser);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listining on port ${port}`));

function validateUser(user) {
  const schema = Joi.object({
    gender: Joi.string().valid('Male','Female').required(),
    weight: Joi.number().min(0).max(500).required(),
    height: Joi.number().min(0).max(300).required(),
    userName: Joi.string().min(3).max(100).required(),
  });

  return schema.validate(user);
}
