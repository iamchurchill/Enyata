const express = require('express');
const dot_env = require('dotenv');
dot_env.config();

const apiRoutes =  require('./routes/api');
const errorController = require('./controllers/api/v1/error');

const PORT = process.env.PORT || 8888;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(apiRoutes);
app.use(errorController.get404);

app.listen(PORT, () => {
   console.log("Server is running on PORT: %s", PORT);
});
