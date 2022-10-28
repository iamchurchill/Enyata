const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const fs = require('fs')
const morgan = require('morgan');
const path = require('path')
const app = express()
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 8888;

app.use(helmet());
app.use(cors())
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'logs/access.log'), {flags: 'a'})
app.use(morgan('combined', {stream: accessLogStream}))

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', 'views');

const apiRoutes = require('./routes/api');
const errorController = require('./controllers/api/v1/error');
app.use('/api/v1', apiRoutes);
app.use(errorController.get404);

app.listen(PORT, () => {
    console.log("Server is running on PORT: %s", PORT);
});
