const mongoose = require("mongoose")
const MONGO_URL = process.env.DB_URL

const DbConnection = async() => {
    try {
        mongoose.connect(MONGO_URL,{
            useNewUrlParse:true,
            useUnifieldTopology:true,
            useFindAndModify:true,
            useCreateIndex:true,
            autoIndex:true
    
            
        },
        (error),{
            if(error){
                console.log("FAILED TO CONNECT TO DATABASE");
            }
    
        }
        )
        
    } catch (error) {
        console.log(error);
        
    }

}

module.exports(DbConnection)