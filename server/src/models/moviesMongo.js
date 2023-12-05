const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
	id: {
		type: Number,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	vote_count: {
		type: Number,
		required: true
	},
	vote_average: {
		type: Number,
		required: true
	},
	release_date: {
		type: Date,
		required: true
	},
	popularity: {
		type: Number,
		required: true
	},
	overview: {
		type: String,
		required: true
	},
	original_language: {
		type: String,
		required: true
	},
	genre: {
		type: String,
		required: true
	}
})

module.exports = mongoose.model("Movie", moviesSchema);
