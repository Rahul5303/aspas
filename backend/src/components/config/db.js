const mongoose = require("mongoose");
const Connect = () => {
  return mongoose.connect(`mongodb+srv://Rahul53033:Rahul53033@cluster0.hh0r4uc.mongodb.net/test1
    `);
};
module.exports = Connect;

// mongodb+srv://Shirso:shirso@clusterasap.5xqb3yt.mongodb.net/asap
