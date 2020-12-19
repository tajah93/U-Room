const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI ||
    "mongodb://localhost/u-room");

const roomSeed = [
    {
        name: 'Elle Woods',
        url: 'https://media1.popsugar-assets.com/files/thumbor/YN5HMVHuMrFhsJ0IEQIIs2NCzaY/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/06/08/659/n/1922283/02ba55eb7871cef9_MCDLEBL_EC002/i/Reese-Witherspoon-Elle-Woods.jpg'
    },
    {
        name: 'Vivian Kensington',
        url: 'https://i.pinimg.com/originals/8a/d0/bf/8ad0bf02fe5fab1c1e2336dc7bc9e7f3.jpg'
    }
]

db.roommies
  .remove({})
  .then(() => db.roommies.collection.insertMany(roomSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
