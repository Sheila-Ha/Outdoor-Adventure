const express = require("express");
const router = express.Router();
const user = require("../../models/User");

router.get("/", async (req, res) => {
  try {
    const allUser = await user.findAll();
    res.status(200).json(allUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports =  router ;
