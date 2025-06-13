const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();
const app = express();
const AuthRoutes = require("./Routes/AuthRoutes");
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.DB_LI)
  .then(() => {
    console.log("✅ Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

app.use("/", AuthRoutes);
// app.post("/register", async (req, res) => {
//   try {
//     const user = await UserModel.create(req.body);
//     res.json(user);
//   } catch (err) {
//     console.log(err);
//   }
// });

// app.post("/Login", async (req, res) => {
//   const { email, pass } = req.body;

//   try {
//     const us = await UserModel.findOne({ email });
//     if (us) {
//       if (us.pass == pass) {
//         res.json("success");
//       } else {
//         res.json("not success");
//       }
//     } else {
//       res.json("user not Found");
//     }
//   } catch (err) {
//     console.log(err);
//   }
// });
app.listen(process.env.PORT || 8080, () => {
  console.log(`server is running in port number ${process.env.PORT}`);
});
