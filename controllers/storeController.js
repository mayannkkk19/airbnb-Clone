const Home = require('../models/home');
const Favourite = require('../models/favourites');

exports.getHomePage = (req, res, next) => {
  res.render('store/homePage');
};

exports.getStoreHomes = (req, res, next) => {
    const homes = Home.fetchAll((homes) => {
      res.render('store/store-view-homes', {homes});
    });
}

exports.getFavList = (req, res, next) => {
  Favourite.getFavList((favourites) => {
    Home.fetchAll ((homes) => {
      const favsWithDetails = homes.filter(home =>  favourites.includes(home.id));
      
      console.log(favsWithDetails);
      res.render('store/store-view-favs', {favsWithDetails});
    });
  });
}

exports.postFavHome = (req, res, next) => {
  Favourite.addFavHome(req.body.homeID, () => {
    console.log('Home added to fav');
  })
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
    if(!home) {
      console.log('Home not found!');
      res.redirect("/");
    }else{
      console.log(home);
      res.render('store/homeDetails', {home});
    }
  })
}
