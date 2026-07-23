const path = require('path');

const express = require("express");
const storeRouter = express.Router();

const {getStoreHomes, getFavList, getReserve, getBookings} = require('../controllers/storeController');

storeRouter.get('/view-homes', getStoreHomes);

storeRouter.get('/favourite', getFavList);

storeRouter.get('/reserve', getReserve);

storeRouter.get('/bookings', getBookings);

exports.storeRouter = storeRouter;
