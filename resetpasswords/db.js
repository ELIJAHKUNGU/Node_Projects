const mongoose = require("mongoose")
const MONGO_URL = process.env.DB_URL

const DbConnection = async() => {
    try {
       await  mongoose.connect(MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: false,
            
        });
        console.log("Mongo Db connected ..............");
        
    } catch (error) {
        console.log(error);
        
    }

}

module.exports = DbConnection