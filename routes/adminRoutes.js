const express = require("express");
const adminRouter = express.Router();

const {getAddHome, postHome} = require('../controllers/homes');

adminRouter.get('/add-home', getAddHome);

adminRouter.post('/add-home', postHome);

exports.adminRouter = adminRouter;