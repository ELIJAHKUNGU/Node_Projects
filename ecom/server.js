require('./models/db')
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const orderController = require('./controllers/orderController')

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json);
app.use(express.static(path.join(__dirname, '/public')))
app.set('views', path.join(__dirname, 'views'))
app.engine('hbs', exphbs({
    extname: 'hbs',
    defaultLayout: 'mainLayout',
    layoutsDir: __dirname + '/views'
}))
app.set('view engine', 'hbs')

app.listen(3000, () => {
    console.log('Server on port');
})
app.use('/', orderController)