const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:3000/myhorror_db", {
    useNewUrlParser: true
}).then(() => console.log("Connected to Mongo")).catch(err => console.log("Connection failed:", err));

const horrorSchema = new mongoose.Schema({
    movieName: String,
    yearRelease: String,
    synopsis: String,
    score: String,
});

const horrorModel = mongoose.model("horror", horrorSchema);

module.exports = {
    horrorModel
}