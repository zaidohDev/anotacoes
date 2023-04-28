const express= require('express');
const path = require('path');
const routes = require('./routes/routes');

const port = process.env.PORT || 3000;
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

//routes
app.use(routes);

app.listen(port,
  () => console.log(`O servidor está rondando na  porta ${port}...`)
);