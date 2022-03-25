const express = require("express");
const { validateBody, checkResourceNameUnique } = require("./resourcesMd");
const Resource = require("./model");
const router = express.Router();

router.get("/", (req, res) => {
  Resource.findAll().then((resp) => {
    res.status(200).json(resp);
  });
});

router.post("/", validateBody, checkResourceNameUnique, (req, res, next) => {
  Resource.postResource(req.body)
    .then((resp) => {
      res.status(201).json(resp);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;