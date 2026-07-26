const fs = require("fs");
const path = require("path");

const rootDir = require("../utils/pathUtil");

module.exports = class Home {
  constructor(houseName, pricePerNight, location, rating) {
    this.houseName = houseName;
    this.pricePerNight = pricePerNight;
    this.location = location;
    this.rating = rating;
  }

  save() {
    this.id = Math.random().toString();
    Home.fetchAll((homes) => {
      homes.push(this);
      const homeDataPath = path.join(rootDir, "data", "homes.json");
      fs.writeFile(homeDataPath, JSON.stringify(homes), (error) => {
        console.log("File writing concluded: ", error);
      });
    });
  }

  //this method is related to class only...
  static fetchAll(callback) {
    const homeDataPath = path.join(rootDir, "data", "homes.json");
    fs.readFile(homeDataPath, (err, data) => {
      if (!err) {
        callback(JSON.parse(data));
      } else {
        callback([]);
      }
    });
    console.log("Callback ran already!");
  }
};
