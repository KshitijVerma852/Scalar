const app = require("./app");
const { connectToDB } = require("./utils/db");
const { parseAndStoreDataToDB } = require("./src/models/moviesModel");

require("dotenv").config();

const CONNECTION_STRING = process.env.DEV_DB;
const PORT = process.env.PORT;

const startServer = async app => {
	await connectToDB(CONNECTION_STRING);
	await parseAndStoreDataToDB("./data/movies.csv")
	app.listen(PORT, () => {
		console.log(`Listening on: http://localhost:${PORT}`);
	});
};

startServer(app);
