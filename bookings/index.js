const express = require("express");

const PORT = 3000;

const app = express();


app.listen(PORT, () => console.log("App listening on " + PORT));