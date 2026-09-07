const fs = require("fs");
const path = require("path");

const rootDir = require("../utils/pathUtil");

const favDataPath = path.join(rootDir, "data", "favourites.json");

module.exports = class Favourite {

  static getFavList(callback) {
    fs.readFile(favDataPath, (err, data) => {
      if (!err) {
        callback(JSON.parse(data));
      } else {
        callback([]);
      }
    });
  }

  static addFavHome(homeID, callback) {
    Favourite.getFavList((favourites) => {
      if(favourites.includes(homeID)) {
        console.log("Home already marked favourite!");
        return;
      }
      favourites.push(homeID);
      fs.writeFile(favDataPath, JSON.stringify(favourites), (error) => {
        console.log("File writing concluded: ", error);
        callback();
      });
    });
  }
};
