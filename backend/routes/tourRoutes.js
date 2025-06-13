import express from "express";
export let tourRoutes = express.Router();
let {
  tourInsert,
  tourList,
  updateTour,
  deleteTour,
  getSingleTour,
} = require("../controllers/tourControl");

tourRoutes.post("/review-insert", tourInsert);
tourRoutes.get("/review-list", tourList);
tourRoutes.put("/update", updateTour);
tourRoutes.delete("/delete", deleteTour);
tourRoutes.get("/getSingleTour", getSingleTour);
