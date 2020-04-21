const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');


const ConnectDB = async() => {
     try{
         await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
         });

         console.log('MongoDB Connected');
     }
     catch(err){
        console.log(err.msg);
        process.exit(1);
     }
}


module.exports = ConnectDB;