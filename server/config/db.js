const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/assignment').then(() => {
    console.log('Connection is successful');
}).catch((e) => {
    console.log(`the Error is ${e}`);
})