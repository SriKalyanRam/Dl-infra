const express = require("express");
const UserModel = require("../models/UserModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.register = async (req, res) => {
  const { email, name, pass } = req.body;
  try {
    const HashPass = await bcrypt.hash(pass, 10);
    const user = await UserModel.create({ email, name, pass: HashPass });
    res.json(user);
  } catch (err) {
    console.log(err);
  }
};

exports.login = async (req, res) => {
  const { email, pass } = req.body;

  try {
    const us = await UserModel.findOne({ email });
    if (us) {
      const hpas = await bcrypt.compare(pass, us.pass);
      if (hpas) {
        const token = jwt.sign(
          { id: us.id, email: us.email },
          process.env.JWT_SECRET,
          { expiresIn: "1hr" }
        );
        res.json({ message: "success", token });
      } else {
        res.json({ message: "Incorrect password" });
      }
    } else {
      res.json({ message: "User not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};
