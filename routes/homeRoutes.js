const express = require("express");
const homeRouter = express.Router();

const {getHomePage} = require('../controllers/homes');

homeRouter.get("/", getHomePage);

exports.homeRouter = homeRouter;
