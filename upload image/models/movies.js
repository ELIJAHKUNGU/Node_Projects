const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    img: {
        type: Buffer,
        required: true
    },
    imgType: {
        type: String,
        required: true
    },
});
module.exports = mongoose.model('Movie', movieSchema);