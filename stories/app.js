const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const morgan = require('morgan');
const exphbs = require('express-handlebars');



//load config
dotenv.config({ path: './config/config.env' });
const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
//set public folder
app.use(express.static(path.join(__dirname, 'public')));

//CALL DB
connectDB();
// Handlebars
app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "main" }));
app.set('view engine', '.hbs');

app.use('/', require('./routes/index'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});