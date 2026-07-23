const Home = require('../models/home');

exports.getHomePage = (req, res, next) => {
  res.render('store/homePage');
};

exports.getAddHome = (req, res, next) => {
  res.render('admin/addHome');
};

exports.postHome = (req, res, next) => {
  console.log("House pushed into homes array with details: ", req.body);
  const {houseName, pricePerNight, location, rating} = req.body;
  const home = new Home(houseName, pricePerNight, location, rating);
  home.save();

  res.render('store/homeAdded');
};

exports.getHomes = (req, res, next) => {
    const homes = Home.fetchAll((homes) => {
      console.log('Inside callback!');
      res.render('store/viewHome', {homes});
    });
}

exports.getFavList = (req, res, next) => {
  res.render('store/favouriteList');
}

exports.getReserve = (req, res, next) => {
  res.render('store/reserve');
}

exports.getBookings = (req, res, next) => {
  res.render('store/bookings');
}
