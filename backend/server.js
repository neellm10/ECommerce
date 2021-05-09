require('dotenv').config();
const express = require("express");
const connectDB = require("./config/db");
const productsRoute = require("./routes/productsRoutes");

connectDB();
const app = express();
app.use(express.json());
app.use("/api/products", productsRoute);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('frontend/build'));
}