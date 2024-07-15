const mongoose = require('mongoose');

const mongo_url = "mongodb+srv://Vansh11:12345@database1.nraetgr.mongodb.net/?retryWrites=true&w=majority&appName=Database1";

mongoose.connect(mongo_url)
    .then(() => {
        console.log('MongoDB Connected...');
    }).catch((err) => {
        console.log('MongoDB Connection Error: ', err);
    })