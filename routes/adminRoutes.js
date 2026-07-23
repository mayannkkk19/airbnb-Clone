const express = require("express");
const adminRouter = express.Router();

const {getAddHome, postHome, getAdminHomes} = require('../controllers/adminController');

adminRouter.get('/add-home', getAddHome);

adminRouter.post('/add-home', postHome);

adminRouter.get('/view-homes', getAdminHomes);

exports.adminRouter = adminRouter;