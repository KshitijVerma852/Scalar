const mongoose = require("mongoose");
require("dotenv").config();

const connectToDB = async connectionString => {
	await mongoose.connect(connectionString);
};

const disconnectFromDB = async () => {
	await mongoose.disconnect();
};

mongoose.connection.once("open", () => {
	console.log("Connected to DB.");
});
mongoose.connection.on("error", err => {
	console.error(err);
});

module.exports = { connectToDB, disconnectFromDB };
