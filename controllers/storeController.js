const Home = require('../models/home');

exports.getHomePage = (req, res, next) => {
  res.render('store/homePage');
};

exports.getStoreHomes = (req, res, next) => {
    const homes = Home.fetchAll((homes) => {
      console.log('Inside callback!');
      res.render('store/store-view-homes', {homes});
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

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId, (home) => {
    console.log(home);
    res.render('store/homeDetails', {home});
  })
}
