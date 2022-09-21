const mongoose = require('mongoose');
const Connection = async()=> {
    try {
        await mongoose.connect(process.env.MONGO_URL,{
            useUnifiedTopology:true,
            useNewUrlParser:true
            
        })
    } catch (error) {
        
    }

}

module.exports = Connection;