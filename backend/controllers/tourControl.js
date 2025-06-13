import express from "express";
import tourModal from "../models/Tour";
import { User } from "../models/userModel";

export const tourInsert = (req, res) => {
  let tour = new tourModal(req.body);

  tour
    .save()
    .then(() => {
      res.send({ msg: "data saved success" });
    })
    .catch(() => {
      res.send({ msg: "data not saved" });
    });
};

export const tourList = async (req, res) => {
  let tourlist = await tourModal.find();
  res.json({ success: true, msg: "list recieved", data: tourlist });
};

export const updateTour = async (req, res) => {
  try {
    const id = req.params.id;

    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "update successful",
      data: savedTour,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "update failed",
      data: savedTour,
    });
  }
};

export const deleteTour = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedtour = User.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "delete successful",
      data: savedTour,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "delete failed",
      data: savedTour,
    });
  }
};

export const getSingleTour = async (req, res) => {
  try {
    const id = req.params.id;

    const singletour = tourModal.findById(id);
    res.status(200).json({
      success: true,
      message: "single tour found successful",
      data: savedTour,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "cant find single tour",
      data: savedTour,
    });
  }
};

export const getTourBySearch = async (req, res) => {
  try {
    const city = new RegExp(req.query.city, "i");

    const distance = parseInt(req.query.distance);

    const maxGroupSize = parseInt(req.query.maxGroupSize);

    const tours = await Tour.find({
      city,
      distance: { $gte: distance },

      maxGroupSize: { $gte: maxGroupSize },
    });
  } catch (err) {}
};
