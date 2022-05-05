const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const Movie = require('./models/movies');


// https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
const imageMimeTypes = ["image/jpeg", "image/png", "images/gif"];
const app = express();
// Middleware
mongoose.connect('mongodb://localhost/file_upload', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (err) => {
    console.log(`DB connection error ${err}`);
});
db.on('open', () => { //when db is connected
    console.log(`DB connected`);
});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.render('index')
})
app.post('/add', async(req, res, next) => {
    const { name, type, img } = req.body;
    const movie = new Movie({
        name,
        type
    });

    // SETTING IMAGE AND IMAGE TYPES
    saveImage(movie, img);
    try {
        const newMovie = await movie.save();
        console.log(newMovie);
        res.redirect('/');
    } catch (err) {
        console.log(err);
    }
});

function saveImage(movie, imgEncoded) {
    // CHECKING FOR IMAGE IS ALREADY ENCODED OR NOT
    if (imgEncoded == null) return;

    // ENCODING IMAGE BY JSON PARSE
    // The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string
    const img = JSON.parse(imgEncoded);
    console.log("JSON parse: " + img);

    // CHECKING FOR JSON ENCODED IMAGE NOT NULL 
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
    // AND HAVE VALID IMAGE TYPES WITH IMAGE MIME TYPES
    if (img != null && imageMimeTypes.includes(img.type)) {

        // https://nodejs.org/api/buffer.html
        // The Buffer class in Node.js is designed to handle raw binary data. 
        // SETTING IMAGE AS BINARY DATA
        movie.img = new Buffer.from(img.data, "base64");
        movie.imgType = img.type;
    }
}
app.listen(process.env.PORT || 2000, () => {
    console.log(`Server is   running on port ...`);
});