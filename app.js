const express = require('express');
const dot_env = require('dotenv');
dot_env.config();

const PORT = process.env.PORT || 8888;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));



app.listen(PORT, () => {
   console.log("Server is running on PORT: %s", PORT);
});
