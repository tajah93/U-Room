const express = require("express");
const routes = require("./routes")
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3003;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", require("./routes/api/roommies"));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/u-room", { useNewUrlParser: true });


app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});