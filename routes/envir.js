const express = require("express");

const envirRouter = express.Router();

//UPDATE
//DELETE

const Gmail = require("../models/han");

envirRouter.post("/add", async (req, res) => {
  try {
    const newGmail = new Gmail(req.body);
    const result = await newGmail.save();
    res.send({ gmail: result, msg: "added successfully" });
  } catch (error) {
    console.log(error);
  }
});
envirRouter.get("/", async (req, res) => {
  try {
    const result = await Gmail.find();
    res.status(200).send({ gmails: result, msg: "tous gmail" });
  } catch (error) {
    console.log(error);
  }
});
envirRouter.get("/:id", async (req, res) => {
  try {
    const result = await Gmail.findById(req.params.id);
    console.log(req.params.id);
    res.status(200).send({ gmails: result, msg: "tous gmail" });
  } catch (error) {
    console.log(error);
  }
});
envirRouter.delete("/remove/:id", async (req, res) => {
  try {
    const result = await Gmail.findByIdAndDelete(req.params.id);
    console.log(req.params.id);
    res.status(200).send({ gmails: result, msg: "Gmail deleted " });
  } catch (error) {
    console.log(error);
  }
});

envirRouter.put("/upp/:id", async (req, res) => {
  await Gmail.findByIdAndUpdate(req.params.id, {
    name: "yyyyy",
  }).then((value) => {
    res.send(value);
  });
  // res.status(200).send({ gmails: newObj, msg: "Gmail updated " });

  try {
  } catch (error) {
    console.log(error);
  }
});

module.exports = envirRouter;
