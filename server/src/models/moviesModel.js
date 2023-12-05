const { parse } = require("csv-parse");
const fs = require("fs");
const path = require("path");
const movies = require("./moviesMongo");

const saveMovie = async movieObj => {
	try {
		await movies.updateOne(movieObj, movieObj, { upsert: true });
	} catch (err) {
		console.error(err);
	}
};

const getAllMovies = async () =>
	movies.find(
		{},
		{
			__v: 0,
			_id: 0
		}
	);

const parseAndStoreDataToDB = async filePath => {
	return new Promise((resolve, reject) => {
		fs.createReadStream(path.join(filePath))
			.pipe(
				parse({
					columns: true
				})
			)
			.on("data", async data => {
				await saveMovie(data);
			})
			.on("error", err => {
				reject(err);
			})
			.on("end", async () => {
				console.log("Saved movies to DB.");
			});
	});
};

module.exports = { parseAndStoreDataToDB };
