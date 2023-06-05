const express = require("express");
const mongoose = require("mongoose");
const URI = "mongodb://localhost/foodforpets";

mongoose.set("debug", true);

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("DB is up!"))
  .catch((e) => console.log(e));
