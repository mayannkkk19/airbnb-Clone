const Home = require('../models/home');

exports.getAddHome = (req, res, next) => {
  res.render('admin/admin-add-home');
};

exports.postHome = (req, res, next) => {
  console.log("House pushed into homes array with details: ", req.body);
  const {houseName, pricePerNight, location, rating} = req.body;
  const home = new Home(houseName, pricePerNight, location, rating);
  home.save();

  res.render('admin/admin-home-added');
};

exports.getAdminHomes = (req, res, next) => {
  const homes = Home.fetchAll((homes) => {
      console.log('Inside callback!');
        res.render('admin/admin-home-list', {homes});
    });
}