const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(require("./routes"));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(port, () => {
    console.log(`Listening to port ${port}...`)
});