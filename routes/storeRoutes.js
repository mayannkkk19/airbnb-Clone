const path = require('path');

const express = require("express");
const storeRouter = express.Router();

const {getHomes, getFavList, getReserve, getBookings} = require('../controllers/homes');

storeRouter.get('/view-home', getHomes);

storeRouter.get('/favourite', getFavList);

storeRouter.get('/reserve', getReserve);

storeRouter.get('/bookings', getBookings);

exports.storeRouter = storeRouter;
