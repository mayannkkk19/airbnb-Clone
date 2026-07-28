const path = require('path');

const express = require("express");
const storeRouter = express.Router();

const {getStoreHomes, getFavList, getReserve, getBookings, getHomeDetails} = require('../controllers/storeController');

storeRouter.get('/view-homes', getStoreHomes);

storeRouter.get('/favourite', getFavList);

storeRouter.get('/reserve', getReserve);

storeRouter.get('/bookings', getBookings);

storeRouter.get('/view-homes/:homeId', getHomeDetails);

exports.storeRouter = storeRouter;
