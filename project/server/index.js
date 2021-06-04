"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const {
    
    handle_Apartment_Id,
    handle_Apartment

} = require("./handlers");

const PORT = 4000;

const app = express();

app
.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Methods",
    "OPTIONS, HEAD, GET, PUT, POST, DELETE"
  );

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
})

.use(morgan("tiny"))
.use(express.static("./server/assets"))
.use(bodyParser.json())
.use(express.urlencoded({ extended: false }))
.use("/", express.static(__dirname + "/"))

.get("/apartments/:id", handle_Apartment_Id) 
.get("/apartments", handle_Apartment) 

.listen(PORT, () => console.info(`Listening on port ${PORT}`));