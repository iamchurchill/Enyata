const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const apiRoutes =  require('./routes/api');
const errorController = require('./controllers/api/v1/error');

const PORT = process.env.PORT || 8888;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/api/v1', apiRoutes);
app.use(errorController.get404);

app.listen(PORT, () => {
   console.log("Server is running on PORT: %s", PORT);
});
