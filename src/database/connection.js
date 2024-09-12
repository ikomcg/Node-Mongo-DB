require("dotenv").config();
const mongoose = require("mongoose");

const userAuth = process.env.USER;
const passAuth = process.env.PASSWORD;
const appName = process.env.APP_NAME;

const nodeJS_URI = `mongodb+srv://${userAuth}:${passAuth}@nodejs.ouqzw.mongodb.net/node-beg?retryWrites=true&w=majority&appName=${appName}`;

module.exports = async () => {
   try {
      const db = await mongoose.connect(nodeJS_URI);
      console.log("Connected successfully to server");
      return db;
   } catch (error) {
      throw error;
   }
};
