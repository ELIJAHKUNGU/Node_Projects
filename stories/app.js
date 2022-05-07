const path = require('path')
const express = require('express')
    //const mongoose = require('mongoose')
const dotenv = require('dotenv')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
    //const methodOverride = require('method-override')
const passport = require('passport')
const session = require('express-session')
    //const MongoStore = require('connect-mongo');
const connectDB = require('./config/db')



//load config
dotenv.config({ path: './config/config.env' });
require('./config/passport')(passport)


//CALL DB
connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
//set public folder
app.use(express.static(path.join(__dirname, 'public')));


// Handlebars
app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "main" }));
app.set('view engine', '.hbs');

//SESSIONS
app.use(session({
    secret: 'Hello World',
    resave: false,
    saveUninitialized: false
}))


//PASSPORT MIDDLEWARES
app.use(passport.initialize())
app.use(passport.session())

app.use('/', require('./routes/index'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});