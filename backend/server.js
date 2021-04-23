require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db")();


const app = express();
app.use(express.json());
const routes = require("./routes/index")(app);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
